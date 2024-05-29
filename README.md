# Merlin32 VSCode Language Extension (65816 Assembly)

This provides syntax highlighting for Assembly Language written in the Merlin8/16+/32 format for 6502, 65C02, and 65816 CPUs.

## Installation

You should be able to install from the VS Marketplace.  

Otherwise follow standard instructions to download and install this file in VSCode. 


## 
## Known Issues

Doesn't recognize macros.

Doesn't recognize "force Absolute" syntax like ` lda: ]var`.



## Release Notes

### 0.1.0 
- go to declaration (only works in current document)
- find all references (only works in current document)
- show symbols (only works in current document, press @ in search bar to show them)
- hover over mnemonics shows some information about it (hover over an "LDA" for example)
- format document
- format selection
- added configuration settings for format functions
- small highlight fixes: `lda #<LOC`, logical operators [!, &, .], `asc 'blah'`,
- began adding highlighting for Merlin directives (org, mx, dsk, put, putbin, etxc.) 


### 0.0.2

Recognize computed variables like `#this+that-2/20`
Add variable support ` lda ]foo`
Improved data literal capture ` dw 2,4,6,]foo,1+1`

### 0.0.1

Initial release of the extension.
-----------------------------------------------------------------------------------------------------------


## Developer Notes

If you'd like to contribute, here are tips on getting started:

- fork/clone the source as normal
- make changes to the `syntaxes/65816.tmLanguage` file and save
- hit F5 to open an extension host running the highlighter to test your changes on some real source code
- commit, push, PR

Publishing notes at https://code.visualstudio.com/api/working-with-extensions/publishing-extension
