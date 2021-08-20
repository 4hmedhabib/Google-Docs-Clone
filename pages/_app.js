import 'tailwindcss/tailwind.css';
import '@material-tailwind/react/tailwind.css';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			</Head>
			<Provider session={pageProps.session}>
				<Component {...pageProps} />
			</Provider>
		</Fragment>
	);
}

export default MyApp;
