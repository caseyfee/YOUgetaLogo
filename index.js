// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const {Circle, Triangle, Square} = require("./lib/shapes");
// ADD TRI SQUARE HERE IN {}


// Array of questions inside inquirer.prompt
inquirer.prompt([
    {   type: "input",
        name: "textColor",
        message: "What color would you like the text on your logo to be?", 
        // input can be a color OR a hexidicimal number
    }, 
    {   type: "input",
        name: "text",
        message: "What text would you like to include in your logo?", 
},
    {   type: "list",
        name: "shape",
        message: "What shape would you like your logo to be?", 
        choices: ['circle', 'triangle', 'square'],
    },
    {   type: "input",
        name: "bgColor",
        message: "What color would you like the background color of your logo be?", 
        // input can be a color OR a hexidicimal number
    },
])


.then((data) => {
const {shape, text, textColor, bgColor} = data;

var newShape;

switch (shape){
    case "circle":
        newShape = new Circle(bgColor, textColor, text);
        break;
    case "triangle":
        newShape = new Triangle(bgColor, textColor, text);
        break;
    case "square":
        newShape = new Square(bgColor, textColor, text);
        break;
}

// A function to write README file (use fs.writeFile?)
    fs.writeFileSync("./examples/logo.svg", newShape.getHTML())
});


