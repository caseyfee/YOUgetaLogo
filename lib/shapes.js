class Shape {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
}


class Circle extends Shape {
    // should I be calling varible names here or data.color?
    constructor(color, textColor, text) {
        super(color, textColor, text);
    }

    getHTML() {
        console.log("Generated logo.svg");
        return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="80" fill="${this.color}" />
                    svg.setText(text, textColor);
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>
          `
    }
}

// REPLICATE TRIANGLE 
class Triangle extends Shape {
    constructor(color, textColor, text) {
        super(color, textColor, text);
    }

    getHTML() {
        console.log("Generated logo.svg");

        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points ="150, 18 244, 182 56, 182" fill="${this.color}" />
            svg.setText(text, textColor);
            <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
    }
}

// REPLICATE  SQUARE
class Square extends Shape {
    constructor(color, textColor, text) {
        super(color, textColor, text);
    }

    getHTML() {
        console.log("Generated logo.svg");

        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
            <rect x="10" y="10" width="200" height="200" fill="${this.color}"/>
            svg.setText(text, textColor);
            <text x="105" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
    }
}

module.exports = {
    Circle,
    Triangle,
    Square,
}



// Splitting color and text apart -- TO be updated when I am no longer sick

// class Shape {
//     constructor() {
//       this.color = "";
//     }
//     setColor(color) {
//       this.color = color;
//     }
//   }
  
//   class Circle extends Shape {
//     render() {
//       return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
//     }
//   }
  
//   class Triangle extends Shape {
//     render() {
//       return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
//     }
//   }
  
//   class Square extends Shape {
//     render() {
//       return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
//     }
//   }
  
//   module.exports = { Circle, Triangle, Square };
