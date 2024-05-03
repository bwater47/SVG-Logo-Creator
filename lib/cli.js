// The required exports for this file.
const inquirer = require("inquirer");
const fs = require("fs");
const generateSvgLogo = require("./svg.js");

// This is the array of questions that will be asked to the user
const questions = [
    {
      type: "input",
      name: "Text",
      message: "What three characters do you want on your logo?",
      validate: function (value) {
        if (value.length === 3) {
          return true;
        } else {
          return "Please enter exactly three characters.";
        }
      },
    },
    {
      type: "input",
      name: "TextColor",
      message: "Enter a color or a hexidecimal number for the text color.",
    },
    {
      type: "list",
      name: "Shape",
      message: "What shape do you want the logo to be?",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "ShapeColor",
      message: "Enter a color or a hexidecimal number for the shape color.",
    },
  ];


  // This is the function that will be called when the user answers the questions and then generates the logo with the answers
function writeToFile(data) {
    fs.writeFile("./examples/logo.svg", data, (err) => {
      if (err) {
        console.log(err);
      } else if (data) {
        console.log("Logo saved!");
      } else {
        console.log("No data to save.");
      }
    });
  };
  // This is the function that initializes the application and then prompts the user with the questions array, and then calls the write to file function with the data from the answers.
function init() {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      const data = generateSvgLogo(answers);
      console.log(data);
      writeToFile(data);
    });
  };
  
  module.exports = init;