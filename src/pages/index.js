import Head from 'next/head';

import Layout from '../components/Layout';
import Searchfield from '../components/Searchfield';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<Searchfield />
		</Layout>
	);
}
