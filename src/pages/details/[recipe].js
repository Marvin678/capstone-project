import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

import {Cuisines} from '../../components/styled.components/Überschriften.styled';
export default function Details() {
	const [data, setData] = useState(null);
	const router = useRouter();
	const {recipe} = router.query;

	useEffect(() => {
		async function showDetails() {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/${recipe}/information?includeNutrition=false&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
			);

			const json = await response.json();

			setData(json);
		}
		showDetails();
	}, [recipe]);
	{
		console.log(data);
	}
	return (
		<>
			<h1>Details</h1>
			<Cuisines>{data?.title}</Cuisines>
			<ul>
				{data?.extendedIngredients.map(ingredient => {
					return (
						<li key={ingredient.id}>
							<h3>{ingredient.name}</h3>
						</li>
					);
				})}
			</ul>
			<p>{data?.cookingMinutes}</p>
		</>
	);
}
