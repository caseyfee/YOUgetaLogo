// class circle {
//         constructor(name, age, breed) {
//           this.name = name;
//           this.age = age;
//           this.breed = breed;
//         }
// }



// const shape = new Triangle();
// shape.setColor(`${data.bgColor}`);
// expect(shape.render()).toEqual(
//     `<polygon points="150, 18 244, 182 56, 182" 
//     fill="${data.bgColor}" />`);

//  Populating the logo file
function logoCreator(data) {
        console.log(typeof(data));
        console.log("Generated logo.svg");
        console.log(`${data.color}`);
    
        return `<!DOCTYPE html>
        <html>
        <script src="jquery-3.6.3.min.js"></script>
        <body>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <${data.shape} cx="150" cy="100" r="80" fill="${data.bgColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </body>
        </html>
      </svg>`
    }