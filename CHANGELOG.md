# Change Log

All notable changes to the Merlin32 extension will be documented in this file.


###  0.2.0

- Add Workspace Symbols.  Type `#` in the VSCode search bar to display them.

###  0.1.2

- Add rename symbol functionality
- Add document link functionality for Merlin commands ASM, DSK, PUT, PUTBIN, SAV, USE
- Hover over mnemonics now shows supporting processors (6502/65C02/65816)
- bug fix: references in comments are now excluded
- bug fix: symbols like "a" where wrongly found in a value like $a
- bug fix: matching whitespace into comments

###  0.1.1

- Minor rendering change to hover

### 0.1.0

- Go to declaration (only works in current document)
- Find all references (only works in current document)
- Show symbols (only works in current document, press @ in search bar to show them)
- Hover over mnemonics shows some information about it (hover over an "LDA" for example)
- Add Format Document
- Add Format Selection
- Add configuration settings for format functions
- Small highlight fixes: `lda #<LOC`, logical operators [!, &, .], `asc 'blah'`,
- Add highlighting for Merlin directives (org, mx, dsk, put, putbin, etc.) 

### 0.0.2

- Recognize computed variables like `#this+that-2/20`
- Add variable support ` lda ]foo`
- Improved data literal capture ` dw 2,4,6,]foo,1+1`

### 0.0.1

- Initial release of the extension.
