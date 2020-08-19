
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
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showString("B")
                while (true) {
                    if (input.buttonIsPressed(Button.A)) {
                        let Letter: string="B"
                        return Letter
                    } else if (input.buttonIsPressed(Button.B)) {
                        basic.showString("C")
                        while (true) {
                            if (input.buttonIsPressed(Button.A)) {
                                let Letter: string="C"
                                return Letter
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
        let Letter: string="A"
        return Letter;
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
