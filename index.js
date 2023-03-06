// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

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

// A function to write README file
    fs.writeFileSync("./lib/logo.svg", logoCreator(data))
});


//  Populating the logo file
function logoCreator(data) {
    console.log(typeof(data));
    console.log("Generated logo.svg");
    console.log(`${data.color}`);

    return `<!DOCTYPE html>
    <html>
    <body>
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${data.shape} cx="150" cy="100" r="80" fill="${data.bgColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </body>
    </html>
  </svg>`
}