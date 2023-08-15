document.addEventListener('DOMContentLoaded', () => {
	console.log('Script loaded.');

	fetch('/api/data')
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}
			return response.json();
		})
		.then((data) => {
			console.log('Data received:', data);
		})
		.catch((error) => {
			console.error('Fetch error:', error);
		});
});
