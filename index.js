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
        name: "shape",
        message: "What shape would you like your logo to be?", 
        choices: ["circle", "triangle", "square"],
    },
    {   type: "input",
        name: "bgColor",
        message: "What color would you like the background color of your logo be?", 
        // input can be a color OR a hexidicimal number
    },
    {   type: "input",
        name: "text",
        message: "What text would you like to include in your logo?", 
   },
])


.then((data) => {

// A function to write README file
    fs.writeFileSync("draftLogo.svg", logoCreator(data))
});


//  Populating the logo file
function logoCreator(data) {
    console.log(typeof(data));
    console.log("Generated logo.svg");
    console.log(`${data.color}`);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${data.shape} cx="150" cy="100" r="80" fill="${data.bgColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">SVG</text>
  
  </svg>`
}

// License functions
            // function licenseBadge(licenseChoice) {
            //     return (licenseChoice === "None") ? "" : `![${licenseChoice}](https://img.shields.io/badge/license-${licenseChoice}-brightgreen) \n`; 
            // }

            // function licenseTOC(licenseChoice){ 
            //     return (licenseChoice === "None") ? "" : `\n- [License](#license) `;
            // }

            // function licenseNotice(licenseChoice){ 
            //     return (licenseChoice === "None") ? "" : 
            //     ` \n ## License: 
            //         The license chosen was ${licenseChoice}. \n 
            //     `;
            // }


