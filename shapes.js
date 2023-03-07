.then((data) => {

        // A function to write README file (use fs.writeFile?)
            fs.writeFileSync("./lib/logo.svg", logoCreatorTri(data))
        });

class Shape {
        constructor (data) {
                this.color = data.color;
                this.textColor = data.textColor;
                this.text =  data.text;
                this.shape = data.shape;
        }
}

// use extend here instead of making a function
// USE EXAMPLE 08 FROM DAY 1
class Circle extends Shape {
        constructor(color, textColor, text);
        console.log("Generated logo.svg");
        shape = `<!DOCTYPE html>
        <html>
        <body>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${data.bgColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </body>
        </html>
      </svg>`
}


function Circle (color, text, textColor) {
        Shape.call(this, color, text, textColor);
       
        }

function logoCreatorTri(data)  {
        console.log("Generated logo.svg");

        return `<!DOCTYPE html>
        <html>
        <body>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points ="150, 18 244, 182 56, 182" fill="${data.bgColor}" />
        
        <text x="150" y="145" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </body>
        </html>
        </svg>`
        }

