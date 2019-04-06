# htmldiff
command line implementation of a html diff tool

## Usage
`htmldiff-<arch> <file1.html> <file2.html>`

- Windows: `htmldiff-win`
- Linux: `htmldiff-linux`
- MacOS: `htmldiff-macos`

## Develop

### Requirements
- node (^10.12.0)
- Run `npm install` to install the required dependencies

### Run script
`node index.js file1.html file2.html`
 
## Build

### Requirements
- zeit/pkg (^4.3.7)

### Build executable
`pkg package.json`