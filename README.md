# Mind Mtach 

Mind Match is Pokemon Card Game is a simple web application where users are presented with cards featuring different Pokémon. The user must select a card, and if they select the same card more than once, they lose. The game tracks the user's current score and the highest score achieved. The purpose of this game is to test the player's memory and provide an engaging way to interact with Pokémon.

# Features

1. Display 20 Pokémon cards, with 10 shown at a time.
2. Click on a Pokémon card to select it.
3. Keep track of the current score and high score.
4. Fetch Pokémon images dynamically from the Pokémon API.
5. Responsive design for various screen sizes.

# Demo

click here to see the demo project - [demo](https://mind-match-omega.vercel.app/)

# Technologies Used

- React: A JavaScript library for building user interfaces.
- PokeAPI: A RESTful API for Pokémon data.
- CSS: Styling for the application.
- PropTypes: Type checking for props.

# Getting Started

## Prerequisites
- Node.js and npm installed on your local machine.
- Basic knowledge of JavaScript, React, and Git.

# Installation
Clone the repository:
```
git clone https://github.com/your-username/pokemon-memory-card-game.git
cd pokemon-memory-card-game
```

nstall dependencies:
```
npm install
```

# Running the Project

Start the development server:
```
npm start
```

This will start the app in development mode and open it in your default web browser at http://localhost:3000.


# Usage
- Card Selection: Clicking a card selects it and adds it to the selectedPokemon array. The game checks if the card has been selected before and updates the score accordingly.
- API Requests: Pokémon data (including images) is fetched from the PokéAPI.

# Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
```
git checkout -b feature/new-feature
```
3. Commit your changes:
```
git commit -m 'Add new feature'
```
4. Push to the branch:
```
git push origin feature/new-feature
```
5. Create a pull request: Once your changes are reviewed and approved, they will be merged into the main branch.

# License
This project is licensed under the MIT License.

# Acknowledgments
- PokéAPI for providing the Pokémon data and images.
- React for the frontend framework.
- The open-source community for various code snippets and inspiration.
