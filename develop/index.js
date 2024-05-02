// Runs the application using imports from lib
// import { lib } from './lib';
// This is the array of questions that will be asked to the user
const questions = [
  {
    type: "input",
    name: "Text",
    message: "What text do you want to display on the logo?",
  },
  {
    type: "list",
    name: "Color",
    message: "What color do you want the logo to be?",
    choices: ["blue", "red", "green"],
  },
  {
    type: "list",
    name: "Shape",
    message: "What shape do you want the logo to be?",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "confirm",
    name: "Save",
    message: "Do you want to save the logo?",
  },
];

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
