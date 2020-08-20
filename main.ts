
/**
 * keyboards and text settings, so you can do what you want with your text
 */
//%icon="\uf11c" color=#0344ab weight=95
//% groups='["keyboards", "Text Settings"]'
namespace Keyboard {
    /**
     * @param prompt this is my parameter, eg: "WHAT DO YOU WANT TO ASK?"
     * keyboard so you can write on screen with a prompt, when the letter pops up that you need to use, press a. Press b for the next letter.
     */
    //% blockId=textkeyboard block="Keyboard with prompt: $prompt"
    //% group="keyboards"
    export function textkey(prompt: string): string {
        basic.showString(prompt)
        basic.showString("A")
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                let Letter: string="A"
                return Letter;
                basic.clearScreen()
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString("B")
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        let Letter: string="B"
                        return Letter;
                        basic.clearScreen()
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.showString("C")
                        while (true) {
                            if (input.buttonIsPressed(Button.A)) {
                                let Letter: string="C"
                                return Letter;
                                basic.clearScreen()
                            } else if (input.buttonIsPressed(Button.B)) {
                                basic.showString("D")
                                
                            }
                        }
                    }

            }
            }
        }
    }
    /**
     * keyboard so you can write on screen without a prompt
     */
    //% blockId=justkeyboard block="Keyboard"
    //% group="keyboards"
    export function justkey(): string {
        basic.showString("A")
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                let Letter: string="A"
                return Letter;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString("B")
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        let Letter: string="B"
                        return Letter;
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.showString("C")
                        while (true) {
                            if (input.buttonIsPressed(Button.A)) {
                                let Letter: string="C"
                                return Letter;
                            } else if (input.buttonIsPressed(Button.B)) {
                                basic.showString("D")
                                while (true) {
                                    if (input.buttonIsPressed(Button.A)) {
                                        let Letter: string="D"
                                        return Letter;
                                    } else if (input.buttonIsPressed(Button.B)) {
                                        basic.showString("E")
                                        while (true) {
                                            if (input.buttonIsPressed(Button.A)) {
                                                let Letter: string="E"
                                                return Letter;
                                            } else if (input.buttonIsPressed(Button.B)) {
                                                basic.showString("F")
                                                while (true) {
                                                    if (input.buttonIsPressed(Button.A)) {
                                                        let Letter: string="F"
                                                        return Letter;
                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                        basic.showString("G")
                                                        while (true) {
                                                            if (input.buttonIsPressed(Button.A)) {
                                                                let Letter: string="G"
                                                                return Letter;
                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                basic.showString("H")
                                                                while (true) {
                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                        let Letter: string="H"
                                                                        return Letter;
                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                        basic.showString("I")
                                                                        while (true) {
                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                let Letter: string="I"
                                                                                return Letter;
                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                basic.showString("J")
                                                                                while (true) {
                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                        let Letter: string="J"
                                                                                        return Letter;
                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                        basic.showString("K")
                                                                                        while (true) {
                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                let Letter: string="K"
                                                                                                return Letter;
                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                basic.showString("L")
                                                                                                while (true) {
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                        let Letter: string="L"
                                                                                                        return Letter;
                                                                                                    } else if (input.buttonIsPressed(Button.B)) {
                                                                                                        basic.showString("M")
                                                                                                        while (true) {
                                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                                let Letter: string="M"
                                                                                                                return Letter;
                                                                                                            } else if (input.buttonIsPressed(Button.B)) {
                                                                                                                basic.showString("N")
                                                                                                                while (true) {
                                                                                                                    
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

            }
            }
        }
        basic.clearScreen()
    }
    /**
     * keyboard with slang, or phrase, to help you, so if you have radio on you could send a text with a phrase.
     */
    //% blockId=slang block="slang keyboard"
    //% group="keyboards"
    export function slang(slang: string): string {
        let List = ["SUP", "YEET", "YO", "COOL BEANS"]
        let Letter: string="A"
        return Letter;
    }
    /**
     * change how fast the string speed is
     * @param speed change the speed by negative and positive
     * 
     */
    //% blockId=setspeed block="set scroll speed to $speed \\%"
    //% speed.shadow="speedPicker"
    //% group="Text Settings"
    //% color=#3251a6
    export function textspeed(speed: number): void {
        
    }
}
