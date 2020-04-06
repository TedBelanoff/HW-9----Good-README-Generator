//required files
const fs = require ("fs");
const path = require("path")
const inquirer = require("inquirer")
const api = require("./utils/api.js")
const generateMarkdown = require("./utils/generateMarkdown.js")

//User Input Questions
const questions = [
    {type: "input",
    name: "gUsername",
    message: "Enter GitHub username:"},

    {type: "list",
    name: "creatorbadgecolor",
    message: "Select color for creator badge:",
    choices:["lightgrey",
    "blue",
    "red",
    "orange",
    "yellow",
    "brightgreen",
    "blueviolet"]},

    {type: "input",
    name: "pTitle",
    message: "Enter project name:"},

    {type: "input",
    name: "description",
    message: "Describe your project:"},

    {type: "input",
    name: "TOC",
    message: "Enter your table of contents:"},

    {type: "input",
    name: "installation",
    message: 
    "Please enter installation commands:",
    default: "npm i"},

    {type: "list",
    name: "installationbadgecolor",
    message: "Select color for installation badge:",
    choices:["lightgrey",
    "blue",
    "red",
    "orange",
    "yellow",
    "brightgreen",
    "blueviolet"]},

    {type: "input",
    name: "usage",
    message: "Enter usage instructions/recommendations:"},


    {type: "list",
    name: "license",
    message: "Enter license:",
    choices:["Apache License", 
    "GNU General Public License v3.0", 
    "MIT License", 
    "BSD 2-Clause License",
    "BSD 3-Clause License", 
    "CC0 1.0 Universal",
    "Eclipse Public License - v 2.0",
    "GNU Affero General Public License",
    "GNU General Public License",
    "GNU Lesser General Public License 2.1",  
    "GNU Lesser General Public License 3.0",
    "Mozilla Public License 2.0",
    "The Unlicense"]},

    {type: "list",
    name: "licensebadgecolor",
    message: "Select color for license badge:",
    choices:["lightgrey",
    "blue",
    "red",
    "orange",
    "yellow",
    "brightgreen",
    "blueviolet"]},

    {type: "input",
    name: "contribution",
    message: "Enter contribution instructions:"},

    {type: "input",
    name: "testing",
    message: "Enter testing commands:"},

    {type: "input",
    name: "questions",
    message: "Enter any questions:"},

];

//File writing function to be used in next function
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

//Primary program function - implements inquirer and api
function init() {
    inquirer.prompt(questions).then((QuestionData) => {
        api
        .getUser(QuestionData.gUsername)
        .then (({data}) => {
            writeToFile("README.md", generateMarkdown({...QuestionData, ...data})
            )}
        )}
    )}
//Script Begin
init();
