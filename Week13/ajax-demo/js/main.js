var xhr = new XMLHttpRequest();
var button = document.querySelector('.button');
var output = document.querySelector('.output');

button.addEventListener('click', function (evt) {
	// use the href for the request URL
	xhr.open('GET', evt.target.href, true); //get or post request
	xhr.send(null);
	// don't reload the page
	evt.preventDefault();
	console.log('Finished Click event');
});

xhr.addEventListener('load', function (evt) {
	if (xhr.status === 200) { // success web request
		output.innerHTML = xhr.responseText;
	} else { // failure
		console.log('... request failed.');
		output.innerHTML = '<div>Request Failed.</div>';
	}
	console.log('Finished load event');
});