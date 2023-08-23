/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const gamesContainer = document.getElementById("games-container");


/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

let x = document.getElementById("unfunded-btn")

x.addEventListener("click", function() {
    filterUnfundedOnly()
})

let y = document.getElementById("funded-btn")

y.addEventListener("click", function() {
    filterFundedOnly()
})

let z = document.getElementById("all-btn")

z.addEventListener("click", function() {
    deleteChildElements(gamesContainer)
    addGamesToPage(GAMES_JSON)
})

// grab the element with the id games-container

addGamesToPage(GAMES_JSON)

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

    for (let i = 0; i < games.length; i++) {
        let x = document.createElement("div")
        x.classList.add("game-card")
        x.innerHTML = `${games[i].description}`
        let y = document.createElement("img")
        y.setAttribute("src", `${games[i].img}`)
        y.classList.add("game-img")
        x.appendChild(y)
        gamesContainer.appendChild(x)
    }

    // loop over each item in the data


        // create a new div element, which will become the game card


        // add the class game-card to the list


        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")


        // append the game to the games-container

}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
let contributionsCard = document.getElementById("num-contributions");

contributionsCard.innerHTML = GAMES_JSON.reduce( (acc, song) => {
    return acc + song.backers;
  }, 0);



// use reduce() to count the number of total contributions by summing the backers


// set the inner HTML using a template literal and toLocaleString to get a number with commas


// grab the amount raised card, then use reduce() to find the total amount raised
let raisedCard = document.getElementById("total-raised");

raisedCard.innerHTML = GAMES_JSON.reduce( (acc, song) => {
    return acc + song.pledged;
  }, 0);

let numUnfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal).length;

let def = `A total of $${Number(raisedCard.innerHTML).toLocaleString()} has been raised for 4 games. Currently, ${numUnfundedGames} ${numUnfundedGames == 1 ? "game" : "games"} remains unfunded. We need your help to fund these amazing games!`
// set inner HTML using template literal


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

gamesCard.innerHTML = GAMES_JSON.length


/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/
// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    let listOfIncreasedSongs = GAMES_JSON.filter ( (song) => {
        if(song.pledged < song.goal) {
            return song;
        }
      })
    addGamesToPage(listOfIncreasedSongs)
    console.log(listOfIncreasedSongs)

    // use filter() to get a list of games that have not yet met their goal


    // use the function we previously created to add the unfunded games to the DOM

}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    let listOfIncreasedSongs = GAMES_JSON.filter ( (song) => {
        if(song.pledged > song.goal) {
            return song;
        }
      })
    addGamesToPage(listOfIncreasedSongs)
    console.log(listOfIncreasedSongs)

    // use filter() to get a list of games that have met or exceeded their goal
    // use the function we previously created to add unfunded games to the DOM

}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM

}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games


// create a string that explains the number of unfunded games using the ternary operator


// create a new DOM element containing the template string and append it to the description container

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

let [a, b, ...c] = sortedGames
console.log(a.name)
console.log(b.name)

// use destructuring and the spread operator to grab the first and second games

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item