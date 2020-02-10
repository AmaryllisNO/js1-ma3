// 1. 
(a, b) => {
    return a - b;
}

// 2. 
fetch("https://api.rawg.io/api/games?genres=sports")
    .then(response => response.json())
    .then(json => {
        loadGames(json); 
    })
    .catch(error => {
        window.location = "error.html";
    });

function loadGames(json) {
    // console.dir(json);
    const games = json.results;
    for (let index = 0; index < games.length; index++) {
        console.log(games[index].name);
    };

}

// 3. 

"These cats are outrageous".replace(/cats/, "giraffes");

// 4. 

// const queryString = document.location.search;
// console.log(queryString);


var url = new URL(window.location.href);
var param = url.searchParams.get("userId");

if (param == "") {
    window.location = "third.html"
} else if(param > 10) {
    window.location = "first.html"
} else if(param < 10) { 
    window.location = "second.html"
}


// 5. 

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// 6. 

const listItem = document.createElement("li");
listItem.className = "parrots";
const listItemContent = document.createTextNode("Parrots");
listItem.appendChild(listItemContent);
console.log(listItem);

const unorderedList = document.querySelector("ul");
const elephants = document.querySelector(".elephants");

elephants.before(listItem);

// 7. 

fetch("https://api.rawg.io/api/games/3801")
    .then(response => response.json())
    .then(json => doStuff(json))
    .catch(error => console.log(error));

function doStuff(json) {
    var rating = document.querySelector(".rating");
    console.log(rating.textContent = json.ratings); 
};

