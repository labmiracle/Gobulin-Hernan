import React, { useState } from 'react';

const ApiComponent: React.FC = () => {
	const [jsonData, setJsonData] = useState<any>(null);

	const fetchData = async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/todos/1'
			);
			const data = await response.json();
			setJsonData(data);
		} catch (error) {
			console.log('Error fetching data:', error);
		}
	};

	return (
		<div>
			<button onClick={fetchData}>Fetch Data</button>
			{jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}
		</div>
	);
};

export default ApiComponent;
