const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
//const diff = require('./htmldiff');

import diff from './lib/htmldiff;††'////////////////

// TODO: Clean start npm ausprobieren
// TODO: Wie ist das mit der Punkt syntax hier?
// TODO: Output muss noch sauuber
// TODO: html diff funktion will nicht 


var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('htmldiff', 'Diff two html files')
    .example('$0 -o "diff.html" "file1.html" "file2.html"', 'Create the diff of two html files and save the output in a third file')
    .alias('o', 'output')
    .nargs('o', 1)
    .describe('o', 'Save output to this file')
    .alias('f', 'force')
    .nargs('f', 1)
    .describe('f', 'Force overwrite output file if already existing')
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



// Getting the two files that shall be compared
var htmlFile1 = argv['_'][0];
var htmlFile2 = argv['_'][1];


//checking both files for existence
if (fs.existsSync(htmlFile1) == false) {
   console.log(htmlFile1 + " nicht gefunden.")
   return
}

if (fs.existsSync(htmlFile2) == false) {
   console.log(htmlFile2 + " nicht gefunden.")
   return
}

//read the content of the files
var html1 = fs.readFileSync(htmlFile1, 'utf8');
var html2 = fs.readFileSync(htmlFile2, 'utf8');


// // Diff HTML strings
let output =  diff(html1, html2);

// console.log(argv)
if ('o' in argv)
 { 

    if (fs.existsSync(argv['o']) == true){
        console.error("The output file already exists. Please provide another file or use the -f option to force overwriting.");
    }

     fs.writeFileSync(argv['o'], output);
 }

// console.log(output)

