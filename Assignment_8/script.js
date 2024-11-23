let gamesDatabase = [
    {
      "title": "Sanabi",
      "description": "A fast-paced action platformer where you play as a retired veteran wielding a prosthetic hook to uncover the secrets of a dystopian city.",
      "screenshot_url": "./images/sanabi.jpg",
      "highlight_color": "#3b82f6",
      "year": 2022,
      "tagline": "Hook. Swing. Uncover."
    },
    {
      "title": "Stardew Valley",
      "description": "A relaxing farming simulation game where you restore your grandfather's farm, build relationships, and explore the valley.",
      "screenshot_url": "./images/stardew.png",
      "highlight_color": "#16a34a",
      "year": 2016,
      "tagline": "Farm your dreams."
    },
    {
      "title": "Chef RPG",
      "description": "A unique RPG where you run a restaurant, gather ingredients, and cook meals while exploring a beautiful world.",
      "screenshot_url": "./images/chefrpg.jpg",
      "highlight_color": "#f59e0b",
      "year": 2024,
      "tagline": "Cook, Create, Explore."
    }, 
    {
      "title": "Hollow Knight",
      "tagline": "Explore your own path",
      "screenshot_url": "./images/hollow_knight.jpg",
      "highlight_color": "#2C3E50",
      "description": "Explore the vast interconnected caverns of Hallownest. Uncover its secrets, battle tainted creatures, and befriend bizarre bugs.",
      "year": 2017
    }, 
    {
        "title": "Celeste",
        "description": "A challenging platformer about climbing a mountain, where you play as Madeline, exploring themes of mental health and self-discovery.",
        "screenshot_url": "./images/celeste.jpg",
        "highlight_color": "#F14D2B",
        "year": 2018,
        "tagline": "Climb your way to the top."
      },
      {
        "title": "Dead Cells",
        "description": "A rogue-like action-platformer where you explore an ever-changing castle, battling monsters and collecting weapons in a fast-paced, satisfying loop.",
        "screenshot_url": "./images/dead_cells.webp",
        "highlight_color": "#2C6A3B",
        "year": 2018,
        "tagline": "Fight, die, repeat."
      },
      {
        "title": "Undertale",
        "description": "A unique RPG where your choices matter. You can fight, spare, or befriend monsters as you navigate a strange underground world.",
        "screenshot_url": "./images/undertale.webp",
        "highlight_color": "#7F6B4B",
        "year": 2015,
        "tagline": "The game where you can choose mercy or violence."
      },
      {
        "title": "The Messenger",
        "description": "A retro-inspired action-platformer that blends ninja-style combat with a time-traveling twist and witty dialogue.",
        "screenshot_url": "./images/the_messenger.jpg",
        "highlight_color": "#1E4072",
        "year": 2018,
        "tagline": "Travel through time, save the world."
      }
      
];
  
let rellax = new Rellax('.rellax');

//generate random background colors
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let bground = document.getElementsByClassName("random_background");
for (let i = 0; i < bground.length; i++) {
  bground[i].style.backgroundColor = getRandomColor();
}


//loading data
let contentGridElement = document.getElementById("contentGrid");
for (let i = 0; i < gamesDatabase.length; i++) {
  createGameElement(gamesDatabase[i]);
}

//initialize Lozad.js for Lazy Loading
const observer = lozad('.gameImage', {
  loaded: function(el) {
    el.setAttribute('data-loaded', 'true');
    console.log('Image loaded:', el);
  }
});
observer.observe();

function createGameElement(game) {
  let gameContainer = document.createElement("DIV");
  gameContainer.classList.add("gameCard");
  gameContainer.style.backgroundColor = game.highlight_color;

  let gameTitle = document.createElement("H2");
  gameTitle.classList.add("gameTitle");
  gameTitle.innerText = game.title;
  gameContainer.appendChild(gameTitle);

  let gameTagline = document.createElement("H3");
  gameTagline.classList.add("gameTagline");
  gameTagline.innerText = game.tagline;
  gameContainer.appendChild(gameTagline);

  let gameImage = document.createElement("IMG");
  gameImage.classList.add("gameImage");
  gameImage.setAttribute("data-src", game.screenshot_url);
  gameImage.setAttribute("alt", `${game.title} Screenshot`);
  gameContainer.appendChild(gameImage);

  let gameDescription = document.createElement("P");
  gameDescription.classList.add("gameDescription");
  gameDescription.innerText = game.description;
  gameContainer.appendChild(gameDescription);

  let gameYear = document.createElement("SPAN");
  gameYear.classList.add("gameYear");
  gameYear.innerText = `Released: ${game.year}`;
  gameContainer.appendChild(gameYear);

  contentGridElement.appendChild(gameContainer);
}
