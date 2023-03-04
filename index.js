// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// Array of questions inside inquirer.prompt
inquirer.prompt([
    {   type: "input",
        name: "color",
        message: "What color would you like to use for your logo?", 
        choices: ["red", "blue", "green", "yellow"],
    },
    {   type: "input",
        name: "shape",
        message: "What shape would you like to include?", 
        choices: ["triangle", "circle", "square"],
    },
    {   type: "input",
        name: "text",
        message: "What text would you like to include in your logo?", 
   },
])


.then((data) => {

// A function to write README file
    fs.writeFileSync("draftLogo.svg", logoCreator())
});

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

//  Populating the logo file
function logoCreator() {
    console.log("logo coming soon");
                    //     return `
                    // # Title: ${data.title}
                    
                    // ${licenseBadge(data.license)}
                    // ## Description: 
                    //     ${data.description}

                    // ## Table of Contents: 
                    // - [Description](#description) 
                    // - [Installation](#installation)
                    // - [Usage](#usage) 
                    // - [Credits](#credits) 
                    // - [Test](#test) ${licenseTOC(data.license)}
                    // - [Questions](#questions) 

                    // ## Installation: 
                    //     ${data.instructions}

                    // ## Usage: 
                    //     ${data.usage}

                    // ## Credits: 
                    //     ${data.credits}

                    // ## Test: 
                    //     ${data.test}
                    // ${licenseNotice(data.license)}
                    // ## Questions
                    // Contact me: \n
                    //     -gitHub username: ${data.gitHub} \n
                    //     -gitHub profile: https://github.com/${data.gitHub} \n
                    //     -Email: ${data.email}

                    //     `
}
