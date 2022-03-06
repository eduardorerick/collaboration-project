# Collaboration Project

Sample project made with React to study the fundamentals of HTML, CSS, JS and Sass. We used Firebase for back-end service, Sonarcloud to run the Quality Gate, Netlify for build the app, Github Actions for our pipeline, and Cypress to write our end-to-end (e2e) tests.
## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.35.1` while writing this doc)
- [nodejs](https://nodejs.org/en/) (I've used version `16.13.1` while writing this doc)
- NPM (I've used version `8.1.2` while writing this doc)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (I've used version `99.0.4844.51` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Acessing our SonarCloud

You can check the quality of our code on [SonarCloud](https://sonarcloud.io/summary/new_code?id=eduardorerick_collaboration-project&pullRequest=21), 
## Configuring the environment variables

Before running the app and tests, some environment variables need to be set up.

Make a copy of the [`env.example`](./.env.example) file as `.env`, and set the appropriate values for all the variables.

**Note:** `.env` file is not tracked by git.

## Running the app

Run `npm start` to run the project in your brownser on localhost:3000
## Running the tests

In this project, you can run tests in interactive and headless modes

### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode.e using a tablet viewport.
### Interactive mode

Run `npm run cy:open` to open the Cypress Test Runner to run tests in interactive mode

---

Made with ❤️ by: \
[Eduardo Rerick](https://github.com/eduardorerick) \
[Rodrigo Richell](https://github.com/RRichellFA) \
[Itair Filho](https://github.com/ItairFilho). 
