import {useEffect, useState} from 'react';

export default function Details() {
	//const [searchDetails, setSearchDetails] = useState('');
	const [data, setData] = useState(null);
	console.log(data);
	useEffect(() => {
		async function showDetails(request) {
			const {recipe} = request.query;
			const response = await fetch(
				`https://api.spoonacular.com/recipes/analyze=${recipe}&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
			);

			const json = await response.json();

			setData(json);
			console.log(data);
		}
		showDetails();
	});

	return <h1>details</h1>;
}
