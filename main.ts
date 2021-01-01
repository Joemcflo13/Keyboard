// Auto generated. please dont edit this. please.
/**
 * keyboards and text settings, so you can do what you want with your text
 */
//%icon="\uf11c" color=#0344ab weight=95
//% groups='["keyboards", "Number keyboards", "Text Settings"]'
namespace Keyboard {
    /**
     * @param prompt type what you want to get prompted, eg: "WHAT DO YOU WANT TO ASK?"
     * keyboard so you can write on screen with a prompt, when the letter pops up that you need to use, press a. Press b for the next letter.
     */
    //% blockId=textkeyboard block="Keyboard with prompt: $prompt" weight=100
    //% group="keyboards"
    export function textkey(prompt: string): string {
        basic.showString(prompt)
        basic.showString("A")
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                let Letter: string="A"
                return Letter;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString("B")
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        let Letter: string="B"
                        return Letter;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.showString("C")
                        while (true) {
                            if (input.buttonIsPressed(Button.A)) {
                                basic.clearScreen()
                                let Letter: string="C"
                                return Letter;
                            } else if (input.buttonIsPressed(Button.B)) {
                                basic.showString("D")
                                while (true) {
                                    if (input.buttonIsPressed(Button.A)) {
                                        basic.clearScreen()
                                        let Letter: string="D"
                                        return Letter;
                                    } else if (input.buttonIsPressed(Button.B)) {
                                        basic.showString("E")
                                        while (true) {
                                            if (input.buttonIsPressed(Button.A)) {
                                                basic.clearScreen()
                                                let Letter: string="E"
                                                return Letter;
                                            } else if (input.buttonIsPressed(Button.B)) {
                                                basic.showString("F")
                                                while (true) {
                                                    if (input.buttonIsPressed(Button.A)) {
                                                        basic.clearScreen()
                                                        let Letter: string="F"
                                                        return Letter;
                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                        basic.showString("G")
                                                        while (true) {
                                                            if (input.buttonIsPressed(Button.A)) {
                                                                basic.clearScreen()
                                                                let Letter: string="G"
                                                                return Letter;
                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                basic.showString("H")
                                                                while (true) {
                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                        basic.clearScreen()
                                                                        let Letter: string="H"
                                                                        return Letter;
                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                        basic.showString("I")
                                                                        while (true) {
                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                basic.clearScreen()
                                                                                let Letter: string="I"
                                                                                return Letter;
                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                basic.showString("J")
                                                                                while (true) {
                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                        basic.clearScreen()
                                                                                        let Letter: string="J"
                                                                                        return Letter;
                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                        basic.showString("K")
                                                                                        while (true) {
                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                basic.clearScreen()
                                                                                                let Letter: string="K"
                                                                                                return Letter;
                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                basic.showString("L")
                                                                                                while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                        basic.clearScreen()
                                                                                                        let Letter: string="L"
                                                                                                        return Letter;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                        basic.showString("M")
                                                                                                        while (true) {
                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                basic.clearScreen()
                                                                                                                let Letter: string="M"
                                                                                                                return Letter;
                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                basic.showString("N")
                                                                                                                while (true) {
                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                        basic.clearScreen()
                                                                                                                        let Letter: string="N"
                                                                                                                        return Letter;
                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                        basic.showString("O")
                                                                                                                        while (true) {
                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                basic.clearScreen()
                                                                                                                                let Letter: string="O"
                                                                                                                                return Letter;
                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                basic.showString("P")
                                                                                                                                while (true) {
                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                        basic.clearScreen()
                                                                                                                                        let Letter: string="P"
                                                                                                                                        return Letter;
                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                        basic.showString("Q")
                                                                                                                                        while (true) {
                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                basic.clearScreen()
                                                                                                                                                let Letter: string="Q"
                                                                                                                                                return Letter;
                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                basic.showString("R")
                                                                                                                                                while (true) {
                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                        basic.clearScreen()
                                                                                                                                                        let Letter: string="R"
                                                                                                                                                        return Letter;
                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                        basic.showString("S")
                                                                                                                                                        while (true) {
                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                let Letter: string="S"
                                                                                                                                                                return Letter;
                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                basic.showString("T")
                                                                                                                                                                while (true) {
                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                        let Letter: string="T"
                                                                                                                                                                        return Letter;
                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                        basic.showString("U")
                                                                                                                                                                        while (true) {
                                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                                let Letter: string="U"
                                                                                                                                                                                return Letter;
                                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                basic.showString("V")
                                                                                                                                                                                while (true) {
                                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                        let Letter: string="V"
                                                                                                                                                                                        return Letter;
                                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                        basic.showString("W")
                                                                                                                                                                                        while (true) {
                                                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                                                let Letter: string="W"
                                                                                                                                                                                                return Letter;
                                                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                                basic.showString("X")
                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                                        let Letter: string="X"
                                                                                                                                                                                                        return Letter;
                                                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                                        basic.showString("Y")
                                                                                                                                                                                                        while (true) {
                                                                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                                                                let Letter: string="Y"
                                                                                                                                                                                                                return Letter;
                                                                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                                                basic.showString("Z")
                                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                                                        let Letter: string="Z"
                                                                                                                                                                                                                        return Letter;
                                                                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                                                        basic.showString("THERE ARE NO MORE LETTERS")
                                                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

            }
            }
        }
    }
    /**
     * @param just this is just a plain keyboard with no prompt or anything, just a sad keyboard.
     * keyboard so you can write on screen without a prompt. when the letter pops up that you need to use, press a. Press b for the next letter.
     */
    //% blockId=justkeyboard block="Keyboard" weight=99
    //% group="keyboards"
    export function justkey(): string {
        basic.showString("A")
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                let Letter: string="A"
                return Letter;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString("B")
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        let Letter: string="B"
                        return Letter;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.showString("C")
                        while (true) {
                            if (input.buttonIsPressed(Button.A)) {
                                basic.clearScreen()
                                let Letter: string="C"
                                return Letter;
                            } else if (input.buttonIsPressed(Button.B)) {
                                basic.showString("D")
                                while (true) {
                                    if (input.buttonIsPressed(Button.A)) {
                                        basic.clearScreen()
                                        let Letter: string="D"
                                        return Letter;
                                    } else if (input.buttonIsPressed(Button.B)) {
                                        basic.showString("E")
                                        while (true) {
                                            if (input.buttonIsPressed(Button.A)) {
                                                basic.clearScreen()
                                                let Letter: string="E"
                                                return Letter;
                                            } else if (input.buttonIsPressed(Button.B)) {
                                                basic.showString("F")
                                                while (true) {
                                                    if (input.buttonIsPressed(Button.A)) {
                                                        basic.clearScreen()
                                                        let Letter: string="F"
                                                        return Letter;
                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                        basic.showString("G")
                                                        while (true) {
                                                            if (input.buttonIsPressed(Button.A)) {
                                                                basic.clearScreen()
                                                                let Letter: string="G"
                                                                return Letter;
                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                basic.showString("H")
                                                                while (true) {
                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                        basic.clearScreen()
                                                                        let Letter: string="H"
                                                                        return Letter;
                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                        basic.showString("I")
                                                                        while (true) {
                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                basic.clearScreen()
                                                                                let Letter: string="I"
                                                                                return Letter;
                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                basic.showString("J")
                                                                                while (true) {
                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                        basic.clearScreen()
                                                                                        let Letter: string="J"
                                                                                        return Letter;
                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                        basic.showString("K")
                                                                                        while (true) {
                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                basic.clearScreen()
                                                                                                let Letter: string="K"
                                                                                                return Letter;
                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                basic.showString("L")
                                                                                                while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                        basic.clearScreen()
                                                                                                        let Letter: string="L"
                                                                                                        return Letter;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                        basic.showString("M")
                                                                                                        while (true) {
                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                basic.clearScreen()
                                                                                                                let Letter: string="M"
                                                                                                                return Letter;
                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                basic.showString("N")
                                                                                                                while (true) {
                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                        basic.clearScreen()
                                                                                                                        let Letter: string="N"
                                                                                                                        return Letter;
                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                        basic.showString("O")
                                                                                                                        while (true) {
                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                basic.clearScreen()
                                                                                                                                let Letter: string="O"
                                                                                                                                return Letter;
                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                basic.showString("P")
                                                                                                                                while (true) {
                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                        basic.clearScreen()
                                                                                                                                        let Letter: string="P"
                                                                                                                                        return Letter;
                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                        basic.showString("Q")
                                                                                                                                        while (true) {
                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                basic.clearScreen()
                                                                                                                                                let Letter: string="Q"
                                                                                                                                                return Letter;
                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                basic.showString("R")
                                                                                                                                                while (true) {
                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                        basic.clearScreen()
                                                                                                                                                        let Letter: string="R"
                                                                                                                                                        return Letter;
                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                        basic.showString("S")
                                                                                                                                                        while (true) {
                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                let Letter: string="S"
                                                                                                                                                                return Letter;
                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                basic.showString("T")
                                                                                                                                                                while (true) {
                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                        let Letter: string="T"
                                                                                                                                                                        return Letter;
                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                        basic.showString("U")
                                                                                                                                                                        while (true) {
                                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                                let Letter: string="U"
                                                                                                                                                                                return Letter;
                                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                basic.showString("V")
                                                                                                                                                                                while (true) {
                                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                        let Letter: string="V"
                                                                                                                                                                                        return Letter;
                                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                        basic.showString("W")
                                                                                                                                                                                        while (true) {
                                                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                                                let Letter: string="W"
                                                                                                                                                                                                return Letter;
                                                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                                basic.showString("X")
                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                                        let Letter: string="X"
                                                                                                                                                                                                        return Letter;
                                                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                                        basic.showString("Y")
                                                                                                                                                                                                        while (true) {
                                                                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                                                                let Letter: string="Y"
                                                                                                                                                                                                                return Letter;
                                                                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                                                basic.showString("Z")
                                                                                                                                                                                                                while (true) {
                                                                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                                                        let Letter: string="Z"
                                                                                                                                                                                                                        return Letter;
                                                                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                                                        basic.showString("THERE ARE NO MORE LETTERS")
                                                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

            }
            }
        }
    }
    /**
     * @param slang this is soooo slanging!
     * keyboard with slang, or phrase, to help you, so if you have radio on you could send a text with a phrase so you can type faster. Press A to choose, press B to continue.
     */
    //% blockId=slang block="slang keyboard" weight=98
    //% group="keyboards"
    export function slang(): string {
        basic.showString("Yo!")
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                let Slang: string="Yo!"
                return Slang;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString("Sup.")
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        let Slang: string="Sup."
                        return Slang;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.showString("Can you hang?")
                        while (true) {
                            
                        }
                    }
                }
            }
        }
    }
    
    /**
     * @param prom you can ask a prompt so they know what you want. eg: "WHAT DO YOU WANT TO ASK?"
     * just Y or N same with the other keyboards, A for Select, B for continue, this block has a prompt.
     */
    //% blockId=boolprompt block="Yes no prompt $prom" weight=97
    //% group="keyboards"
    export function boolprompt(prom: string): boolean {
        basic.showString(prom)
        basic.showString("Y")
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                return true;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString("N")
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        return false;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.clearScreen()
                        return false;
                    }
                }
            }
        }
    }

    /**
     * just Y or N same with the other keyboards, A for Select, B for continue, this block has no prompt. 
     */
    //% blockId=bool block="Yes no boolean" weight=96
    //% group="keyboards"
    export function bool(): boolean {
        basic.showString("Y")
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                return true;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString("N")
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        return false;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.clearScreen()
                        return false;
                    }
                }
            }
        }
    }

    /**
     * asks for two letters, you get to choose, and it will display them in the microbit. One the first letter has to be true, and the second has to be false. same with other keyboards, A to select, B to continue.
     * @param lett this is the lett for the true statement. eg: "Y"
     * @param lette this is the lette for the false statement. eg: "N"
     */
    //% blockId=twolett block="Ask for two letters: $lett | $lette" weight=95
    //% group="keyboards"
    export function twolett(lett: string, lette: string): boolean {
        basic.showString(lett)
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                return true;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString(lette)
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        return false;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.clearScreen()
                        return false;
                    }
                }
            }
        }
    }

    /**
     * this block is just like the block befor it, but you can have a promt to it. and like every keyboard, you press a to select, and b to continue.
     * @param lett1 this is the true statement. eg: "Y"
     * @param lett2 this is the false statement. eg: "N"
     * @param prompt this is what ever you want to ask the user. eg: "ARE YOU SURE?"
     */
    //% blockId=twolettprompt block="ask for two letters: $lett1 | $lett2 with prompt: $prompt"
    //% group="keyboards" weight=94
    export function twolettprompt(lett1: string, lett2: string, prompt: string): boolean {
        basic.showString(prompt)
        basic.showString(lett1)
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                return true;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString(lett2)
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        return false;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.clearScreen()
                        return false;
                    }
                }
            }
        }
    }

    /**
     * like a keyboard, but with numbers
     * @param prompt you can ask what you want but here is the example. eg: "WHAT DO YOU WANT TO ASK?"
     */
    //% blockId=numkeyboardprompt block="Number keyboard with prompt: $prompt"
    //% group="Number Keyboards"
    export function numberkeyboard(prompt: string): number {
        basic.showString(prompt)
        basic.showNumber(0)
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                return 0;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showNumber(1)
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        return 1;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.showNumber(2)
                        while (true) {
                            if (input.buttonIsPressed(Button.A)) {
                                basic.clearScreen()
                                return 2;
                            } else if (input.buttonIsPressed(Button.B)) {
                                basic.showNumber(3)
                                while (true) {
                                    if (input.buttonIsPressed(Button.A)) {
                                        basic.clearScreen()
                                        return 3;
                                    } else if (input.buttonIsPressed(Button.B)) {
                                        basic.showNumber(4)
                                        while (true) {
                                            if (input.buttonIsPressed(Button.A)) {
                                                basic.clearScreen()
                                                return 4;
                                            } else if (input.buttonIsPressed(Button.B)) {
                                                basic.showNumber(5)
                                                while (true) {
                                                    if (input.buttonIsPressed(Button.A)) {
                                                        basic.clearScreen()
                                                        return 5;
                                                    }  else if (input.buttonIsPressed(Button.B)) {
                                                        basic.showNumber(6)
                                                        while (true) {
                                                            if (input.buttonIsPressed(Button.A)) {
                                                                basic.clearScreen()
                                                                return 6;
                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                basic.showNumber(7)
                                                                while (true) {
                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                        basic.clearScreen()
                                                                        return 7;
                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                        basic.showNumber(8)
                                                                        while (true) {
                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                basic.clearScreen()
                                                                                return 8;
                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                basic.showNumber(9)
                                                                                while (true) {
                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                        basic.clearScreen()
                                                                                        return 9;
                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                        basic.showNumber(10)
                                                                                        while (true) {
                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                basic.clearScreen()
                                                                                                return 10;
                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                basic.showNumber(11)
                                                                                                while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                        basic.clearScreen()
                                                                                                        return 11;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                        basic.showNumber(12)
                                                                                                        while (true) {
                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                basic.clearScreen()
                                                                                                                return 12;
                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                basic.showNumber(13)
                                                                                                                while (true) {
                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                        basic.clearScreen()
                                                                                                                        return 13;
                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                        basic.showNumber(14)
                                                                                                                        while (true) {
                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                basic.clearScreen()
                                                                                                                                return 14;
                                                                                                                                } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                    basic.showNumber(15)
                                                                                                                                    while (true) {
                                                                                                                                        if (input.buttonIsPressed(Button.A)) {
                                                                                                                                            basic.clearScreen()
                                                                                                                                            return 15;
                                                                                                                                            }  else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                basic.showNumber(16)
                                                                                                                                                while (true) {
                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                      basic.clearScreen()
                                                                                                                                                      return 16;
                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                        basic.showNumber(17)
                                                                                                                                                        while (true) {
                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                return 17;
                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                basic.showNumber(18)
                                                                                                                                                                while (true) {
                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                        return 18;
                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                        basic.showNumber(19)
                                                                                                                                                                        while (true) {
                                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                                return 19;
                                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                basic.showNumber(20)
                                                                                                                                                                                while (true) {
                                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                        return 20;
                                                                                                                                                                                    }  else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                        basic.showNumber(21)
                                                                                                                                                                                        while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 21;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(22)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 22;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(23)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                      basic.clearScreen()
                                                                                                    return 23;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(24)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 24;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(25)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 25;
                                                                                                    }  else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(26)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 26;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                basic.showNumber(27)
                                                                while (true) {
                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                        basic.clearScreen()
                                                                        return 27;
                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                        basic.showNumber(28)
                                                                        while (true) {
                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                basic.clearScreen()
                                                                                return 28;
                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                basic.showNumber(29)
                                                                                while (true) {
                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                        basic.clearScreen()
                                                                                        return 29;
                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                        basic.showNumber(30)
                                                                                        while (true) {
                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                basic.clearScreen()
                                                                                                return 30;
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }    
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } 
                }
            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }    
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } 
                }
            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }    
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } 
                }
            }
        }
    }

    /**
     * like a keyboard, but with numbers, and with no prompt
     */
    //% blockId=numkeyboard block="Number keyboard"
    //% group="Number Keyboards"
    export function numberkeyboardnotprompt(): number {
        basic.showNumber(0)
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                return 0;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showNumber(1)
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        return 1;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.showNumber(2)
                        while (true) {
                            if (input.buttonIsPressed(Button.A)) {
                                basic.clearScreen()
                                return 2;
                            } else if (input.buttonIsPressed(Button.B)) {
                                basic.showNumber(3)
                                while (true) {
                                    if (input.buttonIsPressed(Button.A)) {
                                        basic.clearScreen()
                                        return 3;
                                    } else if (input.buttonIsPressed(Button.B)) {
                                        basic.showNumber(4)
                                        while (true) {
                                            if (input.buttonIsPressed(Button.A)) {
                                                basic.clearScreen()
                                                return 4;
                                            } else if (input.buttonIsPressed(Button.B)) {
                                                basic.showNumber(5)
                                                while (true) {
                                                    if (input.buttonIsPressed(Button.A)) {
                                                        basic.clearScreen()
                                                        return 5;
                                                    }  else if (input.buttonIsPressed(Button.B)) {
                                                        basic.showNumber(6)
                                                        while (true) {
                                                            if (input.buttonIsPressed(Button.A)) {
                                                                basic.clearScreen()
                                                                return 6;
                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                basic.showNumber(7)
                                                                while (true) {
                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                        basic.clearScreen()
                                                                        return 7;
                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                        basic.showNumber(8)
                                                                        while (true) {
                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                basic.clearScreen()
                                                                                return 8;
                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                basic.showNumber(9)
                                                                                while (true) {
                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                        basic.clearScreen()
                                                                                        return 9;
                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                        basic.showNumber(10)
                                                                                        while (true) {
                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                basic.clearScreen()
                                                                                                return 10;
                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                basic.showNumber(11)
                                                                                                while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                        basic.clearScreen()
                                                                                                        return 11;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                        basic.showNumber(12)
                                                                                                        while (true) {
                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                basic.clearScreen()
                                                                                                                return 12;
                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                basic.showNumber(13)
                                                                                                                while (true) {
                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                        basic.clearScreen()
                                                                                                                        return 13;
                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                        basic.showNumber(14)
                                                                                                                        while (true) {
                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                basic.clearScreen()
                                                                                                                                return 14;
                                                                                                                                } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                    basic.showNumber(15)
                                                                                                                                    while (true) {
                                                                                                                                        if (input.buttonIsPressed(Button.A)) {
                                                                                                                                            basic.clearScreen()
                                                                                                                                            return 15;
                                                                                                                                            }  else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                basic.showNumber(16)
                                                                                                                                                while (true) {
                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                      basic.clearScreen()
                                                                                                                                                      return 16;
                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                        basic.showNumber(17)
                                                                                                                                                        while (true) {
                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                return 17;
                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                basic.showNumber(18)
                                                                                                                                                                while (true) {
                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                        return 18;
                                                                                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                        basic.showNumber(19)
                                                                                                                                                                        while (true) {
                                                                                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                basic.clearScreen()
                                                                                                                                                                                return 19;
                                                                                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                basic.showNumber(20)
                                                                                                                                                                                while (true) {
                                                                                                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                                                                                                        basic.clearScreen()
                                                                                                                                                                                        return 20;
                                                                                                                                                                                    }  else if (input.buttonIsPressed(Button.B)) {
                                                                                                                                                                                        basic.showNumber(21)
                                                                                                                                                                                        while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 21;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(22)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 22;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(23)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                      basic.clearScreen()
                                                                                                    return 23;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(24)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 24;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(25)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 25;
                                                                                                    }  else if (input.buttonIsPressed(Button.B)) {
                                                                                                    basic.showNumber(26)
                                                                                                    while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                    basic.clearScreen()
                                                                                                    return 26;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                basic.showNumber(27)
                                                                while (true) {
                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                        basic.clearScreen()
                                                                        return 27;
                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                        basic.showNumber(28)
                                                                        while (true) {
                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                basic.clearScreen()
                                                                                return 28;
                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                basic.showNumber(29)
                                                                                while (true) {
                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                        basic.clearScreen()
                                                                                        return 29;
                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                        basic.showNumber(30)
                                                                                        while (true) {
                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                basic.clearScreen()
                                                                                                return 30;
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }    
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } 
                }
            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }    
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } 
                }
            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }    
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } 
                }
            }
        }
    }

    /**
     * change how fast the string speed is for one string. the higher it is, the slower it will get.
     * @param speed change the speed by negative and positive
     * @param speed change it by selcting it on the wheel. eg: 100
     */
    //% blockId=setspeed block="scroll speed $speed \\% string $prompt"
    //% speed.min=0 speed.max=900
    //% group="Text Settings"
    //% color=#3251a6
    export function textspeed(speed: number, prompt: string): void {  
        basic.showString(prompt, speed)
    }

    /**
     * change how fast the string speed is for one string. the higher it is, the slower it will get. but this one is in a string form
     * @param speed change the speed by negative and positive
     * @param speed change it by selcting it on the wheel. eg: 100
     */
    //% blockId=setspeedstring block="scroll speed $speed \\% string $prompt"
    //% speed.min=0 speed.max=900
    //% group="Text Settings" weight=40
    //% color=#3251a6
    export function textspeedstring(speed: number, prompt: string): string {  
        basic.showString(prompt, speed)
        return "";
    }

    /**
     * takes all the strings in the block and makes them faster
     */
    //% blockId=scrollspeed block="text speed everything to %speed \\% speed"
    //% speed.min=0 speed.max=900
    //% group="Text Settings" color=#3251a6
    export function scrollspeed(speed: number, handler: () => void): void {
        
    }
    
    /**
     * A two option choice that is based off of the buttons
     */
    //% blockId=button_assign block="Button options A & B"
    //% group="keyboards" weight=93
    export function button_assign(): void {

    }
    /**
     * A three option choice that is based off of the buttons, like the button assign but with one more...
     */
    //% blockId=three_button_assign block="Button options A & B & A&B"
    //% group="keyboards" weight=92
    export function three_button_assign(): void {

    }

}