import 'tailwindcss/tailwind.css';
import '@material-tailwind/react/tailwind.css';
import Head from 'next/head';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
