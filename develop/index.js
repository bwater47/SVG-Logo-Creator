// Runs the application using imports from lib
const inquirer = require("inquirer");
const fs = require("fs");
const generateSvgLogo = require("./lib/shapes");
// This is the array of questions that will be asked to the user
const questions = [
  {
    type: "input",
    name: "Text",
    message: "What text do you want to display on the logo?",
  },
  {
    type: "list",
    name: "Font",
    message: "What font do you want the text to be?",
    choices: ["Arial", "Times New Roman", "Courier New"],
  },
  {
    type: "number",
    name: "Size",
    message: "What size do you want the text to be?",
  },
  {
    type: "list",
    name: "TextColor",
    message: "What color do you want the text to be?",
    choices: ["blue", "red", "green"],
  },
  {
    type: "list",
    name: "Shape",
    message: "What shape do you want the logo to be?",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "list",
    name: "ShapeColor",
    message: "What color do you want the logo to be?",
    choices: ["blue", "red", "green"],
  },
  {
    type: "list",
    name: "Border",
    message: "Do you want a border around the logo?",
    choices: ["Yes", "No"],
  },
  {
    type: "list",
    name: "BorderColor",
    message: "What color do you want the border to be?",
    choices: ["blue", "red", "green"],
  },
  {
    type: "number",
    name: "BorderSize",
    message: "What size do you want the border to be?",
  },
  {
    type: "list",
    name: "BorderStyle",
    message: "What style do you want the border to be?",
    choices: ["solid", "dotted", "dashed"],
  },
  {
    type: "confirm",
    name: "Save",
    message: "Do you want to save the logo?",
  },
];
// This is the function that will be called when the user answers the questions and then generates the logo with the answers
function writeToFile(data) {
  fs.writeFile("logo.svg", data, (err) => {
    if (err) {
      console.log(err);
    } else if (data) {
      console.log("Logo saved!");
    } else {
      console.log("No data to save.");
    }
  });
};
// This is the function that initializes the application and asks the user the questions in the questions array and
// then generates the logo with the generateSvgLogo function which in turn passes along the data from the questions for the write to file function to be saved.
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const data = generateSvgLogo(answers);
    writeToFile(data);
  });
};

init();