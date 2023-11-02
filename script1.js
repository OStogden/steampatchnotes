// JavaScript source code
var req = new XMLHttpRequest();
req.open("GET", "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json", false);
req.send(null);
console.log(JSON.parse(req.responseText));