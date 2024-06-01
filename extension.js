// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

var asmlookups = {
    "adc": {
        "text": "Add With Carry",
        "flags": "[Flags affected: n,v,z,c]",
        "modes": [
            {
                "mode": "(dp,X)",
                "hex": "61",
                "info": "DP Indexed Indirect,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2,4<\/sup>"
            },
            {
                "mode": "sr,S",
                "hex": "63",
                "info": "Stack Relative",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,4<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "65",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2,4<\/sup>"
            },
            {
                "mode": "[dp]",
                "hex": "67",
                "info": "DP Indirect Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2,4<\/sup>"
            },
            {
                "mode": "#const",
                "hex": "69",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>17<\/sup>",
                "cycles": "2<sup>1,4<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "6D",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,4<\/sup>"
            },
            {
                "mode": "long",
                "hex": "6F",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1,4<\/sup>"
            },
            {
                "mode": "( dp),Y",
                "hex": "71",
                "info": "DP Indirect Indexed, Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2,3,4<\/sup>"
            },
            {
                "mode": "(dp)",
                "hex": "72",
                "info": "DP Indirect",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2,4<\/sup>"
            },
            {
                "mode": "(sr,S),Y",
                "hex": "73",
                "info": "SR Indirect Indexed,Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "7<sup>1,4<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "75",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2,4<\/sup>"
            },
            {
                "mode": "[dp],Y",
                "hex": "77",
                "info": "DP Indirect Long Indexed, Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2,4<\/sup>"
            },
            {
                "mode": "addr,Y",
                "hex": "79",
                "info": "Absolute Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3,4<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "7D",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3,4<\/sup>"
            },
            {
                "mode": "long,X",
                "hex": "7F",
                "info": "Absolute Long Indexed,X",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1,4<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2",
            "3",
            "4",
            "17"
        ]
    },
    "and": {
        "text": "AND Accumulator With Memory",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "(dp,X)",
                "hex": "21",
                "info": "DP Indexed Indirect,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "sr,S",
                "hex": "23",
                "info": "Stack Relative",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "25",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp]",
                "hex": "27",
                "info": "DP Indirect Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "#const",
                "hex": "29",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>17<\/sup>",
                "cycles": "2<sup>1<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "2D",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "long",
                "hex": "2F",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            },
            {
                "mode": "(dp),Y",
                "hex": "31",
                "info": "DP Indirect Indexed, Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2,3<\/sup>"
            },
            {
                "mode": "(dp)",
                "hex": "32",
                "info": "DP Indirect",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2<\/sup>"
            },
            {
                "mode": "(sr,S),Y",
                "hex": "33",
                "info": "SR Indirect Indexed,Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "7<sup>1<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "35",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp],Y",
                "hex": "37",
                "info": "DP Indirect Long Indexed, Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "addr,Y",
                "hex": "39",
                "info": "Absolute Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "3D",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "long,X",
                "hex": "3F",
                "info": "Absolute Long Indexed,X",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2",
            "3",
            "17"
        ]
    },
    "asl": {
        "text": "Accumulator or Memory Shift Left",
        "flags": "[Flags affected: n,z,c]",
        "modes": [
            {
                "mode": "dp",
                "hex": "06",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>2,5<\/sup>"
            },
            {
                "mode": "A",
                "hex": "0A",
                "info": "Accumulator",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            },
            {
                "mode": "addr",
                "hex": "0E",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6<sup>5<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "16",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>2,5<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "1E",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "7<sup>5,6<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "5",
            "6"
        ]
    },
    "bcc": {
        "text": "Branch if Carry Clear",
        "flags": "[Flags affected: none][Alias: BLT]",
        "modes": [
            {
                "mode": "nearlabel",
                "hex": "90",
                "info": "Program Counter Relative",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "2<sup>7,8<\/sup>"
            }
        ],
        "footnotes": [
            "7",
            "8"
        ]
    },
    "bcs": {
        "text": "Branch if Carry Set",
        "flags": "[Flags affected: none][Alias: BGE]",
        "modes": [
            {
                "mode": "nearlabel",
                "hex": "B0",
                "info": "Program Counter Relative",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "2<sup>7,8<\/sup>"
            }
        ],
        "footnotes": [
            "7",
            "8"
        ]
    },
    "beq": {
        "text": "Branch if Equal",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "nearlabel",
                "hex": "F0",
                "info": "Program Counter Relative",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "2<sup>7,8<\/sup>"
            }
        ],
        "footnotes": [
            "7",
            "8"
        ]
    },
    "bit": {
        "text": "Test Bits",
        "flags": "[Flags affected: z (immediate mode) n,v,z (non-immediate modes)]",
        "modes": [
            {
                "mode": "dp",
                "hex": "24",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "2C",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "34",
                "info": "DP Indexed,X",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "3C",
                "info": "Absolute Indexed,X",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "#const",
                "hex": "89",
                "info": "Immediate",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>17<\/sup>",
                "cycles": "2<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2",
            "3",
            "17"
        ]
    },
    "bmi": {
        "text": "Branch if Minus",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "nearlabel",
                "hex": "30",
                "info": "Program Counter Relative",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "2<sup>7,8<\/sup>"
            }
        ],
        "footnotes": [
            "7",
            "8"
        ]
    },
    "bne": {
        "text": "Branch if Not Equal",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "nearlabel",
                "hex": "D0",
                "info": "Program Counter Relative",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "2<sup>7,8<\/sup>"
            }
        ],
        "footnotes": [
            "7",
            "8"
        ]
    },
    "bpl": {
        "text": "Branch if Plus",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "nearlabel",
                "hex": "10",
                "info": "Program Counter Relative",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "2<sup>7,8<\/sup>"
            }
        ],
        "footnotes": [
            "7",
            "8"
        ]
    },
    "bra": {
        "text": "Branch Always",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "nearlabel",
                "hex": "80",
                "info": "Program Counter Relative",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>8<\/sup>"
            }
        ],
        "footnotes": [
            "8"
        ]
    },
    "brk": {
        "text": "Break",
        "flags": "[Flags affected: b,i (6502) b,d,i (65C02\/65816 Emulation) d,i (65816 Native)]",
        "modes": [
            {
                "mode": "",
                "hex": "00",
                "info": "Stack\/Interrupt",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2 <sup>18<\/sup>",
                "cycles": "7<sup>9<\/sup>"
            }
        ],
        "footnotes": [
            "9",
            "18"
        ]
    },
    "brl": {
        "text": "Branch Long Always",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "label",
                "hex": "82",
                "info": "Program Counter Relative Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "3",
                "cycles": "4"
            }
        ],
        "footnotes": []
    },
    "bvc": {
        "text": "Branch if Overflow Clear",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "nearlabel",
                "hex": "50",
                "info": "Program Counter Relative",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "2<sup>7,8<\/sup>"
            }
        ],
        "footnotes": [
            "7",
            "8"
        ]
    },
    "bvs": {
        "text": "Branch if Overflow Set",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "nearlabel",
                "hex": "70",
                "info": "Program Counter Relative",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "2<sup>7,8<\/sup>"
            }
        ],
        "footnotes": [
            "7",
            "8"
        ]
    },
    "clc": {
        "text": "Clear Carry",
        "flags": "[Flags affected: c]",
        "modes": [
            {
                "mode": "",
                "hex": "18",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "cld": {
        "text": "Clear Decimal Mode Flag",
        "flags": "[Flags affected: d]",
        "modes": [
            {
                "mode": "",
                "hex": "D8",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "cli": {
        "text": "Clear Interrupt Disable Flag",
        "flags": "[Flags affected: i]",
        "modes": [
            {
                "mode": "",
                "hex": "58",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "clv": {
        "text": "Clear Overflow Flag",
        "flags": "[Flags affected: v]",
        "modes": [
            {
                "mode": "",
                "hex": "B8",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "cmp": {
        "text": "Compare Accumulator With Memory",
        "flags": "[Flags affected: n,z,c]",
        "modes": [
            {
                "mode": "(dp,X)",
                "hex": "C1",
                "info": "DP Indexed Indirect,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "sr,S",
                "hex": "C3",
                "info": "Stack Relative",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "C5",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp]",
                "hex": "C7",
                "info": "DP Indirect Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "#const",
                "hex": "C9",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>17<\/sup>",
                "cycles": "2<sup>1<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "CD",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "long",
                "hex": "CF",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            },
            {
                "mode": "(dp),Y",
                "hex": "D1",
                "info": "DP Indirect Indexed, Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2,3<\/sup>"
            },
            {
                "mode": "(dp)",
                "hex": "D2",
                "info": "DP Indirect",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2<\/sup>"
            },
            {
                "mode": "(sr,S),Y",
                "hex": "D3",
                "info": "SR Indirect Indexed,Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "7<sup>1<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "D5",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp],Y",
                "hex": "D7",
                "info": "DP Indirect Long Indexed, Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "addr,Y",
                "hex": "D9",
                "info": "Absolute Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "DD",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "long,X",
                "hex": "DF",
                "info": "Absolute Long Indexed,X",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2",
            "3",
            "17"
        ]
    },
    "cop": {
        "text": "Co-Processor Enable",
        "flags": "[Flags affected: d,i]",
        "modes": [
            {
                "mode": "const",
                "hex": "02",
                "info": "Stack\/Interrupt",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2<sup>18<\/sup>",
                "cycles": "7<sup>9<\/sup>"
            }
        ],
        "footnotes": [
            "9",
            "18"
        ]
    },
    "cpx": {
        "text": "Compare Index Register X with Memory",
        "flags": "[Flags affected: n,z,c]",
        "modes": [
            {
                "mode": "#const",
                "hex": "E0",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>19<\/sup>",
                "cycles": "2<sup>10<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "E4",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>2,10<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "EC",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>10<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "10",
            "19"
        ]
    },
    "cpy": {
        "text": "Compare Index Register Y with Memory",
        "flags": "[Flags affected: n,z,c]",
        "modes": [
            {
                "mode": "#const",
                "hex": "C0",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>19<\/sup>",
                "cycles": "2<sup>10<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "C4",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>2,10<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "CC",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>10<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "10",
            "19"
        ]
    },
    "dec": {
        "text": "Decrement",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "A",
                "hex": "3A",
                "info": "Accumulator",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            },
            {
                "mode": "dp",
                "hex": "C6",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>2,5<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "CE",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6<sup>5<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "D6",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>2,5<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "DE",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "7<sup>5,6<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "5",
            "6"
        ]
    },
    "dex": {
        "text": "Decrement Index Register X",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "CA",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "dey": {
        "text": "Decrement Index Register Y",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "88",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "eor": {
        "text": "Exclusive-OR Accumulator with Memory",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "(dp,X)",
                "hex": "41",
                "info": "DP Indexed Indirect,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "sr,S",
                "hex": "43",
                "info": "Stack Relative",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "45",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp]",
                "hex": "47",
                "info": "DP Indirect Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "#const",
                "hex": "49",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>17<\/sup>",
                "cycles": "2<sup>1<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "4D",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "long",
                "hex": "4F",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            },
            {
                "mode": "(dp),Y",
                "hex": "51",
                "info": "DP Indirect Indexed, Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2,3<\/sup>"
            },
            {
                "mode": "(dp)",
                "hex": "52",
                "info": "DP Indirect",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2<\/sup>"
            },
            {
                "mode": "(sr,S),Y",
                "hex": "53",
                "info": "SR Indirect Indexed,Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "7<sup>1<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "55",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp],Y",
                "hex": "57",
                "info": "DP Indirect Long Indexed, Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "addr,Y",
                "hex": "59",
                "info": "Absolute Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "5D",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "long,X",
                "hex": "5F",
                "info": "Absolute Long Indexed,X",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2",
            "3",
            "17"
        ]
    },
    "inc": {
        "text": "Increment",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "A",
                "hex": "1A",
                "info": "Accumulator",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            },
            {
                "mode": "dp",
                "hex": "E6",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>2,5<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "EE",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6<sup>5<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "F6",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>2,5<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "FE",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "7<sup>5,6<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "5",
            "6"
        ]
    },
    "inx": {
        "text": "Increment Index Register X",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "E8",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "iny": {
        "text": "Increment Index Register Y",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "C8",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "jmp": {
        "text": "Jump",
        "flags": "[Flags affected: none][Alias: JML for all Long addressing modes]",
        "modes": [
            {
                "mode": "addr",
                "hex": "4C",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "3"
            },
            {
                "mode": "long",
                "hex": "5C",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "4"
            },
            {
                "mode": "(addr)",
                "hex": "6C",
                "info": "Absolute Indirect",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "5<sup>11,12<\/sup>"
            },
            {
                "mode": "(addr,X)",
                "hex": "7C",
                "info": "Absolute Indexed Indirect",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6"
            },
            {
                "mode": "[addr]",
                "hex": "DC",
                "info": "Absolute Indirect Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "3",
                "cycles": "6"
            }
        ],
        "footnotes": [
            "11",
            "12"
        ]
    },
    "jsr": {
        "text": "Jump to Subroutine",
        "flags": "[Flags affected: none][Alias: JSL for Absolute Long]",
        "modes": [
            {
                "mode": "addr",
                "hex": "20",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6"
            },
            {
                "mode": "long",
                "hex": "22",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "8"
            },
            {
                "mode": "(addr,X)",
                "hex": "FC",
                "info": "Absolute Indexed Indirect",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "3",
                "cycles": "8"
            }
        ],
        "footnotes": []
    },
    "lda": {
        "text": "Load Accumulator from Memory",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "(dp,X)",
                "hex": "A1",
                "info": "DP Indexed Indirect,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "sr,S",
                "hex": "A3",
                "info": "Stack Relative",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "A5",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp]",
                "hex": "A7",
                "info": "DP Indirect Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "#const",
                "hex": "A9",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>17<\/sup>",
                "cycles": "2<sup>1<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "AD",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "long",
                "hex": "AF",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            },
            {
                "mode": "(dp),Y",
                "hex": "B1",
                "info": "DP Indirect Indexed, Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2,3<\/sup>"
            },
            {
                "mode": "(dp)",
                "hex": "B2",
                "info": "DP Indirect",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2<\/sup>"
            },
            {
                "mode": "(sr,S),Y",
                "hex": "B3",
                "info": "SR Indirect Indexed,Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "7<sup>1<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "B5",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp],Y",
                "hex": "B7",
                "info": "DP Indirect Long Indexed, Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "addr,Y",
                "hex": "B9",
                "info": "Absolute Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "BD",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "long,X",
                "hex": "BF",
                "info": "Absolute Long Indexed,X",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2",
            "3",
            "17"
        ]
    },
    "ldx": {
        "text": "Load Index Register X from Memory",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "#const",
                "hex": "A2",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2 <sup>19<\/sup>",
                "cycles": "2<sup>10<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "A6",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>2,10<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "AE",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>10<\/sup>"
            },
            {
                "mode": "dp,Y",
                "hex": "B6",
                "info": "DP Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>2,10<\/sup>"
            },
            {
                "mode": "addr,Y",
                "hex": "BE",
                "info": "Absolute Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>3,10<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "3",
            "10"
        ]
    },
    "ldy": {
        "text": "Load Index Register Y from Memory",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "#const",
                "hex": "A0",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2 <sup>19<\/sup>",
                "cycles": "2<sup>10<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "A4",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>2,10<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "AC",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>10<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "B4",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>2,10<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "BC",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>3,10<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "3",
            "10"
        ]
    },
    "lsr": {
        "text": "Logical Shift Memory or Accumulator Right",
        "flags": "[Flags affected: n,z,c]",
        "modes": [
            {
                "mode": "dp",
                "hex": "46",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>2,5<\/sup>"
            },
            {
                "mode": "A",
                "hex": "4A",
                "info": "Accumulator",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            },
            {
                "mode": "addr",
                "hex": "4E",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6<sup>5<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "56",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>2,5<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "5E",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "7<sup>5,6<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "5",
            "6"
        ]
    },
    "mvn": {
        "text": "Block Move Negative",
        "flags": "[Flags affected: none][Registers: X,Y,C]",
        "modes": [
            {
                "mode": "srcbk,destbk",
                "hex": "54",
                "info": "Block Move",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "3",
                "cycles": "1<sup>3<\/sup>"
            },
            {
                "mode": "srcbk,destbk",
                "hex": "44",
                "info": "Block Move",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "3",
                "cycles": "1<sup>3<\/sup>"
            }
        ],
        "footnotes": [
            "3"
        ]
    },
    "mvp": {
        "text": "Block Move Positive",
        "flags": "[Flags affected: none][Registers: X,Y,C]",
        "modes": [],
        "footnotes": []
    },
    "nop": {
        "text": "No Operation",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "EA",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "ora": {
        "text": "OR Accumulator with Memory",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "(dp,X)",
                "hex": "01",
                "info": "DP Indexed Indirect,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "sr,S",
                "hex": "03",
                "info": "Stack Relative",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "05",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp]",
                "hex": "07",
                "info": "DP Indirect Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "#const",
                "hex": "09",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>17<\/sup>",
                "cycles": "2<sup>1<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "0D",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "long",
                "hex": "0F",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            },
            {
                "mode": "(dp),Y",
                "hex": "11",
                "info": "DP Indirect Indexed, Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2,3<\/sup>"
            },
            {
                "mode": "(dp)",
                "hex": "12",
                "info": "DP Indirect",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2<\/sup>"
            },
            {
                "mode": "(sr,S),Y",
                "hex": "13",
                "info": "SR Indirect Indexed,Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "7<sup>1<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "15",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp],Y",
                "hex": "17",
                "info": "DP Indirect Long Indexed, Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "addr,Y",
                "hex": "19",
                "info": "Absolute Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "1D",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3<\/sup>"
            },
            {
                "mode": "long,X",
                "hex": "1F",
                "info": "Absolute Long Indexed,X",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2",
            "3",
            "17"
        ]
    },
    "pea": {
        "text": "Push Effective Absolute Address",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "addr",
                "hex": "F4",
                "info": "Stack (Absolute)",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "3",
                "cycles": "5"
            }
        ],
        "footnotes": []
    },
    "pei": {
        "text": "Push Effective Indirect Address",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "(dp)",
                "hex": "D4",
                "info": "Stack (DP Indirect)",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>2<\/sup>"
            }
        ],
        "footnotes": [
            "2"
        ]
    },
    "per": {
        "text": "Push Effective PC Relative Indirect Address",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "label",
                "hex": "62",
                "info": "Stack (PC Relative Long)",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "3",
                "cycles": "6"
            }
        ],
        "footnotes": []
    },
    "pha": {
        "text": "Push Accumulator",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "48",
                "info": "Stack (Push)",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "3<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1"
        ]
    },
    "phb": {
        "text": "Push Data Bank Register",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "8B",
                "info": "Stack (Push)",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "3"
            }
        ],
        "footnotes": []
    },
    "phd": {
        "text": "Push Direct Page Register",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "0B",
                "info": "Stack (Push)",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "4"
            }
        ],
        "footnotes": []
    },
    "phk": {
        "text": "Push Program Bank Register",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "4B",
                "info": "Stack (Push)",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "3"
            }
        ],
        "footnotes": []
    },
    "php": {
        "text": "Push Processor Status Register",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "08",
                "info": "Stack (Push)",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "3"
            }
        ],
        "footnotes": []
    },
    "phx": {
        "text": "Push Index Register X",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "DA",
                "info": "Stack (Push)",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "3<sup>10<\/sup>"
            }
        ],
        "footnotes": [
            "10"
        ]
    },
    "phy": {
        "text": "Push Index Register Y",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "5A",
                "info": "Stack (Push)",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "3<sup>10<\/sup>"
            }
        ],
        "footnotes": [
            "10"
        ]
    },
    "pla": {
        "text": "Pull Accumulator",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "68",
                "info": "Stack (Pull)",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "4<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1"
        ]
    },
    "plb": {
        "text": "Pull Data Bank Register",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "AB",
                "info": "Stack (Pull)",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "4"
            }
        ],
        "footnotes": []
    },
    "pld": {
        "text": "Pull Direct Page Register",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "2B",
                "info": "Stack (Pull)",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "5"
            }
        ],
        "footnotes": []
    },
    "plp": {
        "text": "Pull Processor Status Register",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "28",
                "info": "Stack (Pull)",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "4"
            }
        ],
        "footnotes": []
    },
    "plx": {
        "text": "Pull Index Register X",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "FA",
                "info": "Stack (Pull)",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "4<sup>10<\/sup>"
            }
        ],
        "footnotes": [
            "10"
        ]
    },
    "ply": {
        "text": "Pull Index Register Y",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "7A",
                "info": "Stack (Pull)",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "4<sup>10<\/sup>"
            }
        ],
        "footnotes": [
            "10"
        ]
    },
    "rep": {
        "text": "Reset Processor Status Bits",
        "flags": "[Flags affected: all except b per operand]",
        "modes": [
            {
                "mode": "#const",
                "hex": "C2",
                "info": "Immediate",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "3"
            }
        ],
        "footnotes": []
    },
    "rol": {
        "text": "Rotate Memory or Accumulator Left",
        "flags": "[Flags affected: n,z,c]",
        "modes": [
            {
                "mode": "dp",
                "hex": "26",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>2,5<\/sup>"
            },
            {
                "mode": "A",
                "hex": "2A",
                "info": "Accumulator",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            },
            {
                "mode": "addr",
                "hex": "2E",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6<sup>5<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "36",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>2,5<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "3E",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "7<sup>5,6<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "5",
            "6"
        ]
    },
    "ror": {
        "text": "Rotate Memory or Accumulator Right",
        "flags": "[Flags affected: n,z,c]",
        "modes": [
            {
                "mode": "dp",
                "hex": "66",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>2,5<\/sup>"
            },
            {
                "mode": "A",
                "hex": "6A",
                "info": "Accumulator",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            },
            {
                "mode": "addr",
                "hex": "6E",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6<sup>5<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "76",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>2,5<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "7E",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "7<sup>5,6<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "5",
            "6"
        ]
    },
    "rti": {
        "text": "Return from Interrupt",
        "flags": "[Flags affected: all except b]",
        "modes": [
            {
                "mode": "",
                "hex": "40",
                "info": "Stack (RTI)",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "6<sup>9<\/sup>"
            }
        ],
        "footnotes": [
            "9"
        ]
    },
    "rtl": {
        "text": "Return from Subroutine Long",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "6B",
                "info": "Stack (RTL)",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "6"
            }
        ],
        "footnotes": []
    },
    "rts": {
        "text": "Return from Subroutine",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "60",
                "info": "Stack (RTS)",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "6"
            }
        ],
        "footnotes": []
    },
    "sbc": {
        "text": "Subtract with Borrow from Accumulator",
        "flags": "[Flags affected: n,v,z,c]",
        "modes": [
            {
                "mode": "(dp,X)",
                "hex": "E1",
                "info": "DP Indexed Indirect,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2,4<\/sup>"
            },
            {
                "mode": "sr,S",
                "hex": "E3",
                "info": "Stack Relative",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,4<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "E5",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2,4<\/sup>"
            },
            {
                "mode": "[dp]",
                "hex": "E7",
                "info": "DP Indirect Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2,4<\/sup>"
            },
            {
                "mode": "#const",
                "hex": "E9",
                "info": "Immediate",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2<sup>17<\/sup>",
                "cycles": "2<sup>1,4<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "ED",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,4<\/sup>"
            },
            {
                "mode": "long",
                "hex": "EF",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1,4<\/sup>"
            },
            {
                "mode": "(dp),Y",
                "hex": "F1",
                "info": "DP Indirect Indexed, Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2,3,4<\/sup>"
            },
            {
                "mode": "(dp)",
                "hex": "F2",
                "info": "DP Indirect",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2,4<\/sup>"
            },
            {
                "mode": "(sr,S),Y",
                "hex": "F3",
                "info": "SR Indirect Indexed,Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "7<sup>1,4<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "F5",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2,4<\/sup>"
            },
            {
                "mode": "[dp],Y",
                "hex": "F7",
                "info": "DP Indirect Long Indexed, Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2,4<\/sup>"
            },
            {
                "mode": "addr,Y",
                "hex": "F9",
                "info": "Absolute Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3,4<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "FD",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1,3,4<\/sup>"
            },
            {
                "mode": "long,X",
                "hex": "FF",
                "info": "Absolute Long Indexed,X",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1,4<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2",
            "3",
            "4",
            "17"
        ]
    },
    "sec": {
        "text": "Set Carry Flag",
        "flags": "[Flags affected: c]",
        "modes": [
            {
                "mode": "",
                "hex": "38",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "sed": {
        "text": "Set Decimal Flag",
        "flags": "[Flags affected: d]",
        "modes": [
            {
                "mode": "",
                "hex": "F8",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "sei": {
        "text": "Set Interrupt Disable Flag",
        "flags": "[Flags affected: i]",
        "modes": [
            {
                "mode": "",
                "hex": "78",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "sep": {
        "text": "Set Processor Status Bits",
        "flags": "[Flags affected: all except b per operand]",
        "modes": [
            {
                "mode": "",
                "hex": "E2",
                "info": "Immediate",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "3"
            }
        ],
        "footnotes": []
    },
    "sta": {
        "text": "Store Accumulator to Memory",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "(dp,X)",
                "hex": "81",
                "info": "DP Indexed Indirect,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "sr,S",
                "hex": "83",
                "info": "Stack Relative",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "dp",
                "hex": "85",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp]",
                "hex": "87",
                "info": "DP Indirect Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "8D",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "long",
                "hex": "8F",
                "info": "Absolute Long",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            },
            {
                "mode": "(dp),Y",
                "hex": "91",
                "info": "DP Indirect Indexed, Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "(dp)",
                "hex": "92",
                "info": "DP Indirect",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>1,2<\/sup>"
            },
            {
                "mode": "(sr,S),Y",
                "hex": "93",
                "info": "SR Indirect Indexed,Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "7<sup>1<\/sup>"
            },
            {
                "mode": "dpX",
                "hex": "95",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2<\/sup>"
            },
            {
                "mode": "[dp],Y",
                "hex": "97",
                "info": "DP Indirect Long Indexed, Y",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2",
                "cycles": "6<sup>1,2<\/sup>"
            },
            {
                "mode": "addr,Y",
                "hex": "99",
                "info": "Absolute Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "5<sup>1<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "9D",
                "info": "Absolute Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "5<sup>1<\/sup>"
            },
            {
                "mode": "long,X",
                "hex": "9F",
                "info": "Absolute Long Indexed,X",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "4",
                "cycles": "5<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2"
        ]
    },
    "stp": {
        "text": "Stop Processor",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "DB",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "3<sup>14<\/sup>"
            }
        ],
        "footnotes": [
            "14"
        ]
    },
    "stx": {
        "text": "Store Index Register X to Memory",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "dp",
                "hex": "86",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>2,10<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "8E",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>10<\/sup>"
            },
            {
                "mode": "dp,Y",
                "hex": "96",
                "info": "DP Indexed,Y",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>2,10<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "10"
        ]
    },
    "sty": {
        "text": "Store Index Register Y to Memory",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "dp",
                "hex": "84",
                "info": "Direct Page",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>2,10<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "8C",
                "info": "Absolute",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>10<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "94",
                "info": "DP Indexed,X",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>2,10<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "10"
        ]
    },
    "stz": {
        "text": "Store Zero to Memory",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "dp",
                "hex": "64",
                "info": "Direct Page",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "3<sup>1,2<\/sup>"
            },
            {
                "mode": "dp,X",
                "hex": "74",
                "info": "DP Indexed,X",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "4<sup>1,2<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "9C",
                "info": "Absolute",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "4<sup>1<\/sup>"
            },
            {
                "mode": "addr,X",
                "hex": "9E",
                "info": "Absolute Indexed,X",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "5<sup>1<\/sup>"
            }
        ],
        "footnotes": [
            "1",
            "2"
        ]
    },
    "tax": {
        "text": "Transfer Accumulator to Index Register X",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "AA",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "tay": {
        "text": "Transfer Accumulator to Index Register Y",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "A8",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "tcd": {
        "text": "Transfer 16-bit Accumulator to Direct Page Register",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "5B",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "tcs": {
        "text": "Transfer 16-bit Accumulator to Stack Pointer",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "1B",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "tdc": {
        "text": "Transfer Direct Page Register to 16-bit Accumulator",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "7B",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "trb": {
        "text": "Test and Reset Memory Bits Against Accumulator",
        "flags": "[Flags affected: z]",
        "modes": [
            {
                "mode": "dp",
                "hex": "14",
                "info": "Direct Page",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>2,5<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "1C",
                "info": "Absolute",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6<sup>3<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "3",
            "5"
        ]
    },
    "tsb": {
        "text": "Test and Set Memory Bits Against Accumulator",
        "flags": "[Flags affected: z]",
        "modes": [
            {
                "mode": "dp",
                "hex": "04",
                "info": "Direct Page",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "2",
                "cycles": "5<sup>2,5<\/sup>"
            },
            {
                "mode": "addr",
                "hex": "0C",
                "info": "Absolute",
                "c1": false,
                "c2": true,
                "c3": true,
                "bytes": "3",
                "cycles": "6<sup>5<\/sup>"
            }
        ],
        "footnotes": [
            "2",
            "5"
        ]
    },
    "tsc": {
        "text": "Transfer Stack Pointer to 16-bit Accumulator",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "3B",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "tsx": {
        "text": "Transfer Stack Pointer to Index Register X",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "BA",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "txa": {
        "text": "Transfer Index Register X to Accumulator",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "8A",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "txs": {
        "text": "Transfer Index Register X to Stack Pointer",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "9A",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "txy": {
        "text": "Transfer Index Register X to Index Register Y",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "9B",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "tya": {
        "text": "Transfer Index Register Y to Accumulator",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "98",
                "info": "Implied",
                "c1": true,
                "c2": true,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "tyx": {
        "text": "Transfer Index Register Y to Index Register X",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "BB",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    },
    "wai": {
        "text": "Wait for Interrupt",
        "flags": "[Flags affected: none]",
        "modes": [
            {
                "mode": "",
                "hex": "CB",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "3<sup>15<\/sup>"
            }
        ],
        "footnotes": [
            "15"
        ]
    },
    "wdm": {
        "text": "Reserved for Future Expansion",
        "flags": "[Flags affected: none (subject to change)]",
        "modes": [
            {
                "mode": "",
                "hex": "42",
                "info": "n\/a",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "2 <sup>16<\/sup>",
                "cycles": "n\/a<sup>16<\/sup>"
            }
        ],
        "footnotes": [
            "16"
        ]
    },
    "xba": {
        "text": "Exchange B and A 8-bit Accumulators",
        "flags": "[Flags affected: n,z]",
        "modes": [
            {
                "mode": "",
                "hex": "EB",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "3"
            }
        ],
        "footnotes": []
    },
    "xce": {
        "text": "Exchange Carry and Emulation Flags",
        "flags": "[Flags affected: m,b\/x,c,e]",
        "modes": [
            {
                "mode": "",
                "hex": "FB",
                "info": "Implied",
                "c1": false,
                "c2": false,
                "c3": true,
                "bytes": "1",
                "cycles": "2"
            }
        ],
        "footnotes": []
    }
};

var footnotes = {
    "1": "Add 1 cycle if m=0 (16-bit memory/accumulator)",
    "2": "Add 1 cycle if low byte of Direct Page Register is non-zero",
    "3": "Add 1 cycle if adding index crosses a page boundary",
    "4": "Add 1 cycle if 65C02 and d=1 (65C02 in decimal mode)",
    "5": "Add 2 cycles if m=0 (16-bit memory/accumulator)",
    "6": "Subtract 1 cycle if 65C02 and no page boundary crossed",
    "7": "Add 1 cycle if branch is taken",
    "8": "Add 1 cycle if branch taken crosses page boundary on 6502, 65C02, or 65816's 6502 emulation mode (e=1)",
    "9": "Add 1 cycle for 65816 native mode (e=0)",
    "10": "Add 1 cycle if x=0 (16-bit index registers)",
    "11": "Add 1 cycle if 65C02",
    "12": "6502: Yields incorrect results if low byte of operand is $FF (i.e., operand is $xxFF)",
    "13": "7 cycles per byte moved",
    "14": "Uses 3 cycles to shut the processor down: additional cycles are required by reset to restart it",
    "15": "Uses 3 cycles to shut the processor down: additional cycles are required by interrupt to restart it",
    "16": "Byte and cycle counts subject to change in future processors which expand WDM into 2-byte opcode portions of instructions of varying lengths",
    "17": "Add 1 byte if m=0 (16-bit memory/accumulator)",
    "18": "Opcode is 1 byte, but program counter value pushed onto stack is incremented by 2 allowing for optional signature byte",
    "19": "Add 1 byte if x=0 (16-bit index registers) "
};

var aliases = {
    'adcl': 'adc',
    'andl': 'and',
    'blt': 'bcc',
    'bgt': 'bcs',
    'bge': 'bcs',
    'cmpl': 'cmp',
    'eorl': 'eor',
    'jmpl': 'jmp',
    'jsl': 'jsr',
    'ldal': 'lda',
    'oral': 'ora',
    'sbcl': 'sbc',
    'stal': 'sta'
};

var linkcommands = [
    'asm', 'dsk', 'put', 'putbin', 'sav', 'use'
];

vscode.languages.registerHoverProvider('asm', {
    provideHover(document, position, token) {
        var range = document.getWordRangeAtPosition(position);
        var word = document.getText(range).toLocaleLowerCase();

        if (aliases[word]) {
            word = aliases[word];
        }

        var hint = '';
        var spcsm = '&nbsp;&nbsp;'
        var spc = spcsm + spcsm;
        if (asmlookups[word]) {

            //title
            hint = '### ' + word.toUpperCase() + ' *' + asmlookups[word].text + '*';

            //flags
            hint += "\n" + asmlookups[word].flags;

            //adressing modes table
            hint += "\n"
                + '|Assembler Example ' + spc
                + '|' + spcsm + 'HEX' + spcsm
                + '|' + spcsm + 'Addressing Mode ' + spc
                + '|' + spcsm + '6502' + spcsm
                + '|' + spcsm + '65C02' + spcsm
                + '|' + spcsm + '65816' + spcsm
                + '|Bytes ' + spc
                + '|Cycles ' + spc
                + '|';
            hint += "\n" + '|:----------------|:---:|:--------------|:---:|:---:|:---:|:----------|:--------|';
            var x;
            if (asmlookups[word].modes) {
                for (var i in asmlookups[word].modes) {
                    x = asmlookups[word].modes[i];
                    hint += "\n" + '|\`\`\`' + word.toUpperCase() + ' ' + x['mode'] + '\`\`\`';
                    hint += '|\`\`\`' + x['hex'] + '\`\`\`';
                    hint += '|' + spcsm + x['info'];
                    hint += '|' + (x['c1'] ? '&check;' : '');
                    hint += '|' + (x['c2'] ? '&check;' : '');
                    hint += '|' + (x['c3'] ? '&check;' : '');
                    hint += '|' + x['bytes']
                    hint += '|' + x['cycles'] + '|';
                }
            }

            //footnotes
            if (asmlookups[word].footnotes.length > 0) {
                hint += "\n" + '<br/>';
                hint += "\n" + '### *NOTES*<br/>';
                var fn;
                for (var i in asmlookups[word].footnotes) {
                    fn = asmlookups[word].footnotes[i];
                    if (footnotes[fn]) {
                        hint += "\n" + '<sup>' + fn + '</sup> <small>' + footnotes[fn] + '</small><br/>';
                    }
                }
            }
        }

        const markdown = new vscode.MarkdownString(`${hint}`, true);
        markdown.isTrusted = true;
        markdown.supportHtml = true;

        return new vscode.Hover(markdown);
    }
});

vscode.languages.registerDeclarationProvider('asm', {
    provideDeclaration(document, position, token) {
        var range = document.getWordRangeAtPosition(position);
        var word = document.getText(range);

        var labels = getAllLabelDefinitions(document);

        if (labels[word]) {
            var position = labels[word].start;
            var location = new vscode.Location(document.uri, position);
            return location;
        }

        return null;
    }
});

vscode.languages.registerReferenceProvider('asm', {
    provideReferences(document, position, context, token) {

        var range = document.getWordRangeAtPosition(position);
        var word = document.getText(range);

        var references = getAllLabelReferences(document, context.includeDeclaration);

        if (references[word]) {
            var res = [];
            for (var i in references[word]) {
                res.push(new vscode.Location(document.uri, references[word][i].start));
            }
            return res;
        }

        return null;
    }
});

vscode.languages.registerDocumentSymbolProvider('asm', {
    provideDocumentSymbols(document, token) {

        var labels = getAllLabelDefinitions(document);

        var res = [];
        for (var label in labels) {
            var r = labels[label];
            res.push(new vscode.DocumentSymbol(label, 'label', vscode.SymbolKind.Constant, r, r));
        }

        return res;
    }
});

vscode.languages.registerDocumentLinkProvider('asm', {
    provideDocumentLinks(document, token) {

        if (document.uri.scheme !== 'file') {
            return null;
        }

        var res = [];
        for (var i = 0; i < document.lineCount; i++) {
            var line = document.lineAt(i);

            var splitted = splitAsmLine(line);

            if (splitted === null) {
                continue;
            }

            var lowercmd = splitted.parts[1].toLowerCase();
            if (linkcommands.includes(lowercmd) && splitted.parts[2] !== '') {
                var dir = document.uri.path.substring(0, document.uri.path.lastIndexOf('/') + 1);

                var uri = vscode.Uri.file(dir + splitted.parts[2]);
                res.push(new vscode.DocumentLink(
                    new vscode.Range(
                        new vscode.Position(i, splitted.startpos[2]),
                        new vscode.Position(i, splitted.startpos[2] + splitted.parts[2].length)
                    ),
                    uri
                ));
            }
        }
        return res;
    }
});

vscode.languages.registerRenameProvider('asm', {
    provideRenameEdits(document, position, newName, token) {

        var range = document.getWordRangeAtPosition(position);
        var word = document.getText(range);

        var references = getAllLabelReferences(document, true);

        if (references[word]) {
            var edits = new vscode.WorkspaceEdit();
            for (var i in references[word]) {
                var r = references[word][i];
                edits.replace(document.uri, r, newName);
            }
            return edits;
        }

        return null;
    }
});

/* append a space if the string does not end with one */
var checkAppendSpace = function (str) {
    if (str.substring(str.length - 1, str.length) !== ' ') {
        str += ' ';
    }
    return str;
}

/* returns array with [label, command, operand, comment] or null if empty line or comment line */
var splitAsmLine = function (line) {

    if (line.text.trim() === '' || line.text[0] === '*' || line.text[0] === ';') {
        //empty line or comment, ignore
        return null;
    }

    var parts = ['', '', '', '']; //0=label, 1=cmd, 2=operand, 3=comment
    var startpos = [-1, -1, -1, -1];
    var w = 0;
    var in_word = null;
    for (var i = 0; i < line.text.length; i++) {

        c = line.text[i];

        if (w >= 3 && in_word == true) {
            parts[w] += c;
            continue;
        }

        if (c == ' ' || c == "\t") {
            if (in_word !== false) {
                in_word = false;
                w++;
            }
        } else {
            if (in_word !== true) {
                if (c === ';') {
                    //comments are always the 4th column
                    w = 3;
                }
                in_word = true;
                startpos[w] = i;
            }
            parts[w] += c;
        }
    }

    return { "parts": parts, "startpos": startpos };
}

var getAllLabelDefinitions = function (document) {

    var labels = {};
    for (var i = 0; i < document.lineCount; i++) {
        var line = document.lineAt(i);
        var c = line.text.substring(0, 1);
        if (c === '*' || c === ';' || c === ' ' || c === "\t") {
            continue;
        }
        var symbol = '';
        for (var j = 0; j < line.text.length; j++) {
            c = line.text.substring(j, j + 1);
            if (c === ' ' || c === "\t") {
                break;
            }
            symbol += c;
        }
        if (symbol.length > 0) {
            var r = new vscode.Range(new vscode.Position(i, 0), new vscode.Position(i, symbol.length));
            labels[symbol] = r;
        }
    }

    return labels;
};

var getAllLabelReferences = function (document, includedef) {
    var labels = getAllLabelDefinitions(document);
    var references = {};
    for (var i in labels) {
        var label = i;

        var refs = [];

        if (includedef) {
            refs.push(labels[i]);
        }

        for (var i = 0; i < document.lineCount; i++) {
            var line = document.lineAt(i);
            var splitted = splitAsmLine(line);
            if (splitted === null) {
                continue;
            }

            if (splitted.parts[1] === label) {
                //the label is the command (which means it's a macro)
                var position = new vscode.Position(i, splitted.startpos[1]);
                var range = document.getWordRangeAtPosition(position);
                refs.push(range);
            }

            var lastindex = 0;
            var pos;
            while (true) {
                pos = splitted.parts[2].indexOf(label, lastindex);
                if (pos === -1) break;

                lastindex = pos + label.length;

                if (line.text[splitted.startpos[2] + pos - 1] === '$') {
                    //edge case: when the label is "a" and there is a dfb $a make sure it doesn't count as a reference
                    continue;
                }

                var position = new vscode.Position(i, splitted.startpos[2] + pos);
                var range = document.getWordRangeAtPosition(position);
                var word = document.getText(range);
                if (word === label) {
                    refs.push(range);
                }
            }
        }

        if (refs.length > 0) {
            references[label] = refs;
        }
    }

    return references;
}

vscode.languages.registerDocumentRangeFormattingEditProvider('asm', {
    provideDocumentRangeFormattingEdits(document, range, options, token) {
        var from = range.start.line;
        var to = range.end.line;
        var res = [];
        var cfg = [];

        cfg.push(vscode.workspace.getConfiguration().get('conf.merlin32.format.offsets.command'));
        cfg.push(vscode.workspace.getConfiguration().get('conf.merlin32.format.offsets.operand'));
        cfg.push(vscode.workspace.getConfiguration().get('conf.merlin32.format.offsets.comment'));

        for (var i = from; i <= to; i++) {
            var line = document.lineAt(i);

            var newt = '';
            var splitted = splitAsmLine(line);

            if (splitted === null) {
                //trim trailing spaces on comment/empty lines
                newt = line.text.trimEnd();
            } else {
                for (var j in cfg) {
                    newt += splitted.parts[j];
                    newt = checkAppendSpace(newt.padEnd(cfg[j], ' '));
                }
                newt += splitted.parts[3];
                newt = newt.trimEnd();
            }

            if (newt != line.text) {
                var r = new vscode.Range(new vscode.Position(i, 0), new vscode.Position(i, line.text.length));
                res.push(new vscode.TextEdit(r, newt));
            }
        }
        return res;
    }
});
