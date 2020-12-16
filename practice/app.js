// ! Node Module System
// ? 3 types of Modules
// ? 1. Core modules - pre-installed with Node.
// ? 2. Local Modules - User Made.
// ? 3. npm Modules - 3rd Party Modules.


// ? Installing Core Modules
// const fs = require('fs')

// fs.writeFileSync('test.txt', 'This is data')
// const data = fs.readFileSync('test.txt').toString()
// console.log(data)
// fs.appendFileSync('test.txt', '\nThis data is being append!')

// ? Importing Local Modules
// console.log('This is app.js')
// const { name, add } = require('./test.js')
// console.log(name)
// console.log(add(2, 5))

// const sum = add(2, 5)
// console.log(sum)

// ? npm Modules

// const validator = require('validator')

// console.log(validator.isEmail('trehan@docogen.com'))
// console.log(validator.isURL('https://docogen.com'))

// const chalk = require('chalk');

// if (validator.isEmail('trehan@docogen.com')) {
//     console.log(chalk.blue.inverse('Email is Valid'))
// }
// else {
//     console.log(chalk.red('Email is invalid'))
// }