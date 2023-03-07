const UserIndex = require('./index');


// .then((data) => {

//         // A function to write README file (use fs.writeFile?)
//             fs.writeFileSync("./lib/logo.svg", logoCreatorTri(data))
//         });

class Shape {
        constructor (data) {
                this.color = data.color;
                this.textColor = data.textColor;
                this.text =  data.text;
                this.shape = data.shape;
                shapeHTML = ``;
        }

        // Add function here where HTML is goign to be created?
        // Add if statement here to decide which class to use next
                //because of shape chosen? 
}

// use extend here instead of making a function
// USE EXAMPLE 08 FROM DAY 1
// the only thing that i feel like is different between the shapes
        // is the html that needs to be populated...
class Circle extends Shape {
        // should I be calling varible names here or data.color?
        constructor(color, textColor, text);
        super(color, textColor, text);
        circle = `<!DOCTYPE html>
        <html>
        <body>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${data.bgColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </body>
        </html>
      </svg>`

      addHTMLCirlce(shapeHTML) {
        console.log("Generated logo.svg");
      }
}

// For other classes, should we use polymorphism ... and overwrite the HTML?

const newCircle = new Circle(
        
        
        shapeHTML = `<!DOCTYPE html>
        <html>
        <body>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${data.bgColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </body>
        </html>
      </svg>`
)

// function Circle (color, text, textColor) {
//         Shape.call(this, color, text, textColor);
       
//         }

// function logoCreatorTri(data)  {
//         console.log("Generated logo.svg");

//         return `<!DOCTYPE html>
//         <html>
//         <body>
//         <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <polygon points ="150, 18 244, 182 56, 182" fill="${data.bgColor}" />
        
//         <text x="150" y="145" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
//         </body>
//         </html>
//         </svg>`
//         }





module.exports = Shapes;

