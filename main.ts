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
     * 
     */
    //% blockId=scrollspeed block="text speed everything to %speed \\% speed"
    //% speed.min=0 speed.max=900
    //% group="Text Settings" color=#3251a6
    export function scrollspeed(speed: number, handler: () => void): void {
        
    }
    
}