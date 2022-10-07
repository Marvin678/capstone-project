import Head from 'next/head';
import {useState} from 'react';

import Layout from '../components/Layout';
import Searchfield from '../components/Searchfield';

export default function HomePage() {
	const [recipes, setRecipes] = useState([]);
	console.log(recipes);
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			<Searchfield onChangeRecipes={setRecipes} />
		</Layout>
	);
}
