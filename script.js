console.log ("hello");
const fs = require('fs');

const directory = fs.readdirSync(__dirname);

console.log(directory)