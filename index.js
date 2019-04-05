const chalk = require('chalk');
const clear = require('clear');
const figlet= require('figlet');
const fs = require('fs');


const files = require('./lib/files');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('htmldiff', { horizontalLayout: 'full' })
  )
);

var minimist = require('minimist')

var args = minimist(process.argv.slice(2), {
    alias: { h: 'help', v: 'version', o: 'output' },
    stopEarly: true, /* populate _ with first non-option */
    unknown: function () { 
        console.log("nicht gut")

    } /* invoked on unknown param */
  })



var numberOfArguments=args["_"].length;

if (numberOfArguments != 2) {

  console.log("Please provide exactly two arguments that stand for the html files to be compared.")
  return;

}

var htmlFile1=args["_"][0];
var htmlFile2=args["_"][1];


if (fs.existsSync(htmlFile1) == false) {
  console.log(htmlFile1 + " nicht gefunden")

}


// var argv = require('minimist')(process.argv.slice(2));
console.dir(args);

console.log(args["_"][1]);

console.log(args["_"].length);



// fs.readFileSync("./test1.html")


// fetch('file:///.//file1.html')
//   .then(response => response.text())
//   .then(text => console.log(text))

  // outputs the content of the text file
// // Diff HTML strings
// let output = htmldiff(originalHTML, newHTML);

// // Show HTML diff output as HTML (crazy right?)!
// document.getElementById("output").innerHTML = output;
