# Team-Profile-Generator

## User Story

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## Description

This is a command-line application that users can quickly and easily create a team profile html page by inputting their team members' information.

Once the user input information for the Manager, Intern(optional) and Engineer(optional), then an html page will be generated with the role of each team member, their emails, employee IDs and other informations such as github username for the Engineer and school for the Intern.

## Table of Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#links)
* [Tests](#tests)


## Installation

To generate your team profile page using this application:
1. run ```npm init``` 
2. run ```npm install inquirer```

## Usage 

The application can be invoked with ```node index.js```

## Screenshots

![Sample Team Page Screenshot](./output/My_Team_Screenshot.jpg)

## Tests

This program used [jest](https://jestjs.io/) to run the tests for each employee classes before building out the rest of the program.
The test can be initiated with:
`npm run test`


## Links

* The URL of a video that shows a typical user flow: https://drive.google.com/file/d/1mXMzdF44O0VwRcXahH-6KQyPiB_jDJQn/view

* The URLs of the GitHub repositories: https://github.com/mengyue-z/Team-Profile-Generator

