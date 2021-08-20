import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Head from 'next/head';
import { Header, Login } from '../components';
import Image from 'next/image';
import { getSession, useSession } from 'next-auth/client';

export default function Home() {
	const [ session ] = useSession();

	if (!session) return <Login />;

	return (
		<div>
			<Head>
				<title>Google Docs Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<section className="bg-[#f8f9fa] pb-10 px-10">
				<div className="max-w-3xl mx-auto">
					<div className="flex items-center justify-between py-6">
						<h2 className="text-gray-700 text-lg">Start a new document</h2>

						<Button
							color="gray"
							buttonType="outline"
							rounded={true}
							iconOnly={true}
							ripple="dark"
							className="border-0"
						>
							<Icon name="more_vert" size="3xl" />
						</Button>
					</div>
					<div>
						<div className="relative h-52 w-40 border-2 hover:border-blue-200 cursor-pointer">
							<Image src="https://links.papareact.com/pju" layout="fill" />
						</div>
						<p className="ml-2 mt-2 text-gray-700 font-semibold text-sm">Blank</p>
					</div>
				</div>
			</section>

			<section className="vg-white px-10 md:px-0">
				<div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
					<div className="flex items-center justify-between pb-5">
						<h2 className="font-medium flex-grow">My Document</h2>
						<p className="mr-12">Date Created</p>
						<Icon name="folder" size="3xl" color="gray" />
					</div>
				</div>
			</section>
		</div>
	);
}
