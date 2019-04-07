const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');


const files = require('./lib/files');


var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('count', 'Count the lines in a file')
    .example('$0 count -f foo.js', 'count the lines in the given file')
    .alias('o', 'output')
    .nargs('o', 1)
    .describe('o', 'Save output to this file')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2019')
    .argv;

clear();
console.log(
    chalk.yellow(
        figlet.textSync('htmldiff', { horizontalLayout: 'full' })
    )
);



var numberOfArguments = argv["_"].length;

if (numberOfArguments != 2) {
    console.log("Please provide exactly two arguments that stand for the html files to be compared.")
    return;
}


var htmlFile1 = argv['_'][0];
var htmlFile2 = argv['_'][1];


if (fs.existsSync(htmlFile1) == false) {
   console.log(htmlFile1 + " nicht gefunden")
}

if (fs.existsSync(htmlFile2) == false) {
   console.log(htmlFile2 + " nicht gefunden")
}

//console.dir(args);
//console.log(args["_"][1]);
//console.log(args["_"].length);



// fs.readFileSync("./test1.html")


// fetch('file:///.//file1.html')
//   .then(response => response.text())
//   .then(text => console.log(text))

  // outputs the content of the text file
// // Diff HTML strings
// let output = htmldiff(originalHTML, newHTML);

// // Show HTML diff output as HTML (crazy right?)!
// document.getElementById("output").innerHTML = output;
