import Link from 'next/link';
import {useState} from 'react';

export default function Searchfield() {
	const [searchTerm, setSearchTerm] = useState('');
	const [data, setData] = useState(null);
	console.log(data);
	async function searchCuisine() {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?cuisine=${searchTerm}&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
		);
		const json = await response.json();

		setData(json);
	}

	return (
		<>
			<h1>Cuisines</h1>
			<form
				onSubmit={event => {
					event.preventDefault();
				}}
			>
				<input
					onChange={event => setSearchTerm(event.target.value)}
					name="search"
					aria-label="search"
					type="search"
					placeholder="search..."
				/>
				<button onClick={searchCuisine} type="submit">
					<svg style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
						/>
					</svg>
				</button>
			</form>

			{data?.results.map(result => {
				return (
					<div key={result.id}>
						<h2>{result.title}</h2>
						<p>Image: {result.image}</p>
						<Link href={`/spoonacular/cuisines/${result.id}`}>Show Details</Link>
					</div>
				);
			})}
		</>
	);
}
