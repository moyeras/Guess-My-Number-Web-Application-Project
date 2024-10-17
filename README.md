# Guess My Number Game 🎮

## Description
**Guess My Number** is a simple browser-based game where the player has to guess a randomly generated secret number between 1 and 20. The player is given feedback on whether their guess was too high, too low, or correct. The game keeps track of the player's score, which decreases with each incorrect guess. If the player wins, their highscore is updated.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Features
- A secret number between 1 and 20 is randomly generated each round.
- Player receives feedback based on their guess:
  - Too high
  - Too low
  - Correct number
- The player's score decreases with each incorrect guess.
- The highscore is tracked across games.
- The game can be restarted with the "Again!" button without resetting the highscore.

## Technologies Used
- **HTML** for structuring the webpage.
- **CSS** for styling the game elements.
- **JavaScript** for handling the game logic and user interactions.

## How to Play
1. Enter a number between 1 and 20 in the input field.
2. Click the "Check!" button to submit your guess.
3. The game will tell you whether your guess was too high, too low, or correct.
4. Keep guessing until you find the correct number!
5. Once the correct number is found, you can play again by clicking the "Again!" button, and your highscore will be retained.

## Installation
To run this project locally:
1. Clone the repository:
    ```bash
    git clone https://github.com/moyeras/Guess-My-Number-Web-Application-Project.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Guess-My-Number-Web-Application-Project
    ```
3. Open the `index.html` file in your browser.

## Project Structure
guess-my-number/ │
├── index.html # The HTML file for the game interface
├── style.css # The CSS file for styling 
├── script.js # JavaScript file containing the game logic 
└── README.md # Project README file
