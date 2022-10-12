import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

export default function Details() {
	const [data, setData] = useState(null);
	const router = useRouter();
	const {recipe} = router.query;

	useEffect(() => {
		async function showDetails() {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/${recipe}/analyzedInstructions?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
			);

			const json = await response.json();

			setData(json);
		}
		showDetails();
	}, [recipe]);

	return (
		<>
			<h1>details</h1>
			{data?.results.map(result => {
				return (
					<div key={result.steps}>
						<h2>{result.ingredients}</h2>
					</div>
				);
			})}
		</>
	);
}
