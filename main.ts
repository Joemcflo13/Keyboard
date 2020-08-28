// please dont edit this. please.
/**
 * keyboards and text settings, so you can do what you want with your text
 */
//%icon="\uf11c" color=#0344ab weight=95
//% groups='["keyboards", "Text Settings"]'
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
     * This block is just for fun. Just like any other keyboard, A to choose, B to continue choosing.
     * @param l here. eg: "A"
     * @param le here. eg: "B"
     * @param lett here. eg: ""
     * @param lette here. eg: ""
     * @param letter here. eg: ""
     * @param letterr here. eg: ""
     * @param letterrr here. eg: ""
     */
    //% blockId=multilett block="multiple letters $l $le || $Lett || $lette || $letter || $letterr || $letterrr"
    //% group="keyboards" weight=94
    export function multilett(l: string, le: string, lett: string, lette: string, letter: string, letterr: string, letterrr: string,): string {
        if (l == "" && le == "") {
        basic.showString(l)
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                basic.clearScreen()
                return l;
            } else if (input.buttonIsPressed(Button.B)) {
               basic.showString(le)
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        basic.clearScreen()
                        return le;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.showString(le)
                        while (true) {
                            if (input.buttonIsPressed(Button.A)) {
                                basic.clearScreen()
                                return lett;
                            } else if (input.buttonIsPressed(Button.B)) {
                                basic.showString(lette)
                                while (true) {
                                    if (input.buttonIsPressed(Button.A)) {
                                        basic.clearScreen()
                                        return lette;
                                    } else if (input.buttonIsPressed(Button.B)) {
                                        basic.showString(letter)
                                        while (true) {
                                            if (input.buttonIsPressed(Button.A)) {
                                                basic.clearScreen()
                                                return letter;
                                            } else if (input.buttonIsPressed(Button.B)) {
                                                basic.showString(letterr)
                                                while (true) {
                                                    if (input.buttonIsPressed(Button.A)) {
                                                        basic.clearScreen()
                                                        return letterr;
                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                        basic.showString(letterrr)
                                                        while (true) {
                                                            if (input.buttonIsPressed(Button.A)) {
                                                                basic.clearScreen()
                                                                return letterrr;
                                                            } else {
                                                                basic.clearScreen()
                                                                return " ";
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
        } else if (!(l == "" && le == "")) {
            serial.writeString("Could not find any text on your Multiletter block. please add some text.")
            return " ";
        } else if (!(l == "" && le == "" && lett == "")) {
            serial.writeString("Could not find any text on your Multiletter block. please add some text.")
            return " ";
        } else if (!(l == "" && le == "" && lett == "" && lette == "")) {
            serial.writeString("Could not find any text on your Multiletter block. please add some text.")
            return " ";
        } else if (!(l == "" && le == "" && lett == "" && lette == "" && letter == "")) {
            serial.writeString("Could not find any text on your Multiletter block. please add some text.")
            return " ";
        } else if (!(l == "" && le == "" && lett == "" && lette == "" && letter == "" && letterr == "")) {
            serial.writeString("Could not find any text on your Multiletter block. please add some text.")
            return " ";
        } else if (!(l == "" && le == "" && lett == "" && lette == "" && letter == "" && letterr == "" && letterrr == "")) {
            serial.writeString("Could not find any text on your Multiletter block. please add some text.")
            return " "
        } else {
            return " ";
        }
    }

    /**
     * change how fast the string speed is
     * @param speed change the speed by negative and positive
     * @param speed change it by selcting it on the wheel. eg: 0
     */
    //% blockId=setspeed block="set scroll speed to $speed \\%"
    //% speed.shadow="speedPicker"
    //% speed.min=-50 speed.max=50
    //% group="Text Settings"
    //% color=#3251a6
    export function textspeed(speed: number): void {
        
    }
}
