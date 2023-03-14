const {Shape, Circle, Triangle, Square} = require("./lib/shapes");

class createSVG {
    constructor() {
      this.textEl = "";
      this.shapeEl = "";
    }
  
    // top line of svg logo
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
  
    // makes sure the setText has a user input of less than 3
    setText(text, textColor) {
      if (text.length > 3) {
        throw new Error("Text must be less than 3 characters.");
      }
      this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
  
    // Starts creating shape element 
    setShape(shape) {
      this.shapeEl = shape.getHTML();
    }
  }
  
  module.exports = createSVG;