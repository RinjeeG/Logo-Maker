const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function getLogoDetails() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:',
      validate: input => input.length <= 3 ? true : 'Text must be up to 3 characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex):'
    }
  ]);

  return answers;
}

async function generateLogo() {
  const { text, textColor, shape, shapeColor } = await getLogoDetails();
  let shapeObj;

  switch (shape) {
    case 'Circle':
      shapeObj = new Circle(shapeColor);
      break;
    case 'Triangle':
      shapeObj = new Triangle(shapeColor);
      break;
    case 'Square':
      shapeObj = new Square(shapeColor);
      break;
  }

  const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeObj.render()}
    <text x="150" y="125" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

generateLogo();
