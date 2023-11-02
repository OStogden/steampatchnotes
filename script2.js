// JavaScript source code
function bindGetNewsButton() {
	document.getElementById('getNewsForApp').addEventListener('click', function (event) {
		var homeURL = "https://ostogden.github.io/"
		var userInput = 440//document.getElementById('getNewsInput').value;
		var newURL = homeURL + userInput;
		var req = new XMLHttpRequest();
		req.open("GET", newURL, true);
		req.addEventListener('load', function () {
			if (req.status >= 200 && req.status < 400) {
				var response = JSON.parse(req.responseText);
				console.log(JSON.parse(req.responseText));
			}
			else {
				console.log("Error in network request: " + request.statusText);
			}
		});
		req.send(null);
	});
}