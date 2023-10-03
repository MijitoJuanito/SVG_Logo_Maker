// required dependencies and shapes file imports
const { Triangle, Square, Circle } = require('./lib/shapes.js');
const fs = require("fs");
const inquirer = require('inquirer');

// user input prompt
inquirer.prompt([
    { /* question for user's initials aka letters to be used in logo stamp */
        type: "input",
        name: "Characters",
        message: "Enter one (1) to three(3) characters to use on your logo stamp",
        validate: (input) => {
            if (input == "" || input.length > 3) {
                return console.log("Must be one (1) to three(3) characters only!")
            } else {
                return true;
            }
        }
    },
    {  /* question for the letter's color */
        type: "input",
        name: "CharactersColor",
        message: "Enter the color keyword or hexadecimal code for your logo stamps's letters",
        validate: (input) => {
            if (input == "") {
                return console.log("Required! Enter the color keyword or hexadecimal code for your logo stamps's letters");
            } else {
                return true;
            }
        }
    },
    {  /* question for user to pick from available shapes */
        type: "list",
        name: "Shape",
        message: "Choose the logo stamps's shape",
        choices: ["Triangle", "Square", "Circle"],
    },
    {  /* question for shape's color */
        type: "input",
        name: "Color",
        message: "Enter the color keyword or hexadecimal code for your logo stamps's shape",
        validate: (input) => {
            if (input == "") {
                return console.log("Required! Enter the color keyword or hexadecimal code for your logo stamps's shape");
            } else {
                return true;
            }
        }
    },
    {  /* question for background color */
        type: "input",
        name: "BackgroundColor",
        message: "Enter the color keyword or hexadecimal code for your logo stamps's background \n NOTE:  use ''transparent'' for no background",
    },
])
    // take the user input data and ues it to generate the logo stamp
    // ...
.then((data) => {
    console.log(data);
    let ltrs = data.Characters; 
    let ltrColor = data.CharactersColor; 
    let shape = data.Shape; 
    let color = data.Color; 
    let bkColor = data.BackgroundColor; 
    let shapeKey;
    if (shape === "Triangle") {
        let newShape = new Triangle(color);
        shapeKey = newShape.render(color);
    } else if (shape === "Square") {
        let newShape = new Square(color);
        shapeKey = newShape.render(color);
    } else if (shape === "Circle") {
        let newShape = new Circle(color);
        shapeKey = newShape.render(color);
    };
    let logoStamp = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${bkColor}" />
        ` + shapeKey + `
        <text x="50%" y="60%" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="${ltrColor}">${ltrs}</text>
        </svg>
    `;
    fs.writeFile(`./examples/${shape}-logo-${ltrs}.svg`, logoStamp, (err) =>
        err ? console.log(err) : console.log("Your logo stamp has been generated and placed in the examples directory"))
});
