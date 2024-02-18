async function fetchDefinition() {
	//user input and search//
	const searchTerm = document.getElementById('searchTerm').value;
	if (!searchTerm.trim()) {
		//tells you tp enter word if blank
		alert('Please enter a word.');
		return;
	}
	// api key
	const apiKey = '175e2607-9962-4f08-af00-dbd03a583671';
	// url for api requets. THE MAIN JUICE... Why does the dictionary want my whole life story to use their API's?
	const url = `https://dictionaryapi.com/api/v3/references/sd3/json/${encodeURIComponent(searchTerm)}?key=175e2607-9962-4f08-af00-dbd03a583671`;

	try {
		// fetch data 
		const response = await fetch(url);
		// booleans
		if (!response.ok) {
			//error if not working
			throw new Error('Network response was not ok');
		}
		//if empty
		const data = await response.json();
		if (data.length === 0) {
			//if no defintion is found 
			document.getElementById('definition').textContent = 'No definition found.';
			return;
		}
		//only gonna have it so you get on simple defintion (the first)
		const firstDefinition = data[0].shortdef[0]; //only gonna have it so you get on simple defintion (the first)
		document.getElementById('definition').textContent = firstDefinition;
	} catch (error) {
		// Logs errors to the console
		console.error('There has been a problem with your fetch operation:', error);
		// No defintion found
		document.getElementById('definition').textContent = 'No definition found...';
	}

}