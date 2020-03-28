var requestURL = 'https://api.rand.fun/';

var request = new XMLHttpRequest();

var aleatorio = Math.round(Math.random() * 10);

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}


console.log(requestURL + aleatorio);

/* function abreModal(obj) {
    alert(obj.name);
} */


fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then(response => response.json())
    .then(data => document.body.innerHTML = data.result)