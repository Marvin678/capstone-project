import {useState} from 'react';

export default function Details() {
	const [searchDetails, setSearchDetails] = useState('');
	const [data, setData] = useState(null);
	console.log(data);
	async function showDetails() {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/analyze=${searchDetails}&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
		);
		const json = await response.json();

		setData(json);
	}

	return (
		<>
			<form>
				<h1>Details</h1>
				<form
					onSubmit={event => {
						event.preventDefault();
					}}
				/>
				<input
					onChange={event => setSearchDetails(event.target.value)}
					name="search"
					aria-label="search"
					type="search"
					placeholder="search..."
				/>
				<button onClick={showDetails} type="submit"></button>
			</form>
		</>
	);
}
