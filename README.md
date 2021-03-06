# htmldiff
command line implementation of a html diff tool

## Usage
`htmldiff-<platform> <file1.html> <file2.html>`

Available platforms:
- Windows: `htmldiff-win`
- Linux: `htmldiff-linux`
- MacOS: `htmldiff-macos`

## Develop

### Requirements
- node (^10.12.0)
- Run `npm install` to install the required dependencies

### Run script
`node index.js file1.html file2.html`

### Installation with brew
If you are under OSX, you should use [brew](brew.sh) to install htmldiff by 
```
brew tap nils-tekampe/homebrew-tap
brew install htmldiff
```

### Build executables
`pkg package.json`
