const axios = require('axios');

const magnitude = parseInt(process.argv[2]);

if (isNaN(magnitude)) {
	console.log('Please specify a valid magnitude parameter.');
	process.exit(1);
}

const url =
	'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson';

axios
	.get(url)
	.then((response) => {
		if (response.status === 200) {
			const earthquakes = response.data.features;

			const filteredEarthquakes = earthquakes.filter(
				(earthquake) => earthquake.properties.mag >= magnitude
			);

			console.log(`*****************************`);
			console.log(`USGS All Earthquakes, Past Hour`);
			console.log(`---------------------`);
			console.log(`Total: ${filteredEarthquakes.length}`);
			console.log(`Status: ${response.status}`);
			console.log(`---------------------`);

			for (const earthquake of filteredEarthquakes) {
				const { mag, place, time, status, type, url, detail, coordinates } =
					earthquake.properties;

				const formattedTime = new Date(time).toLocaleString();
				console.log(`${formattedTime}`);
				console.log(`==============================`);
				console.log(`Magnitude: ${mag}`);
				console.log(`Place: ${place}`);
				console.log(`${formattedTime}`);
				console.log(`Status: ${status}`);
				console.log(`Type: ${type}`);
				console.log(`Coordinates: ${coordinates.join(' , ')}`);
				console.log(`Info: ${url}`);
				console.log(`Details: ${detail}`);
				console.log(`==============================`);
			}
		} else {
			console.log('The HTTP request was not successful.');
		}
	})
	.catch((error) => {
		console.log('There was an error:', error.message);
	});
