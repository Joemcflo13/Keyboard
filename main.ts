
//%icon="\uf11c" color=#0344ab weight=95
//% groups='["keyboards", "Text Settings"]'
namespace Keyboard {
    /**
     * @param prompt this is my parameter, eg: "WHAT DO YOU WANT TO ASK?"
     * keyboard so you can write on screen with a prompt, when the letter pops up that you need to use, press a.
     */
    //% blockId=textkeyboard block="Keyboard with prompt: $prompt"
    //% group="keyboards"
    export function textkey(prompt: string): void {
        basic.showString(prompt)
        basic.showString("A")
        if (input.buttonIsPressed(Button.A)) {
            let Letter: string="A"
            return Letter;
        } else {
            let Letter: string="B"
            return Letter
        }
        
    }
    /**
     * keyboard so you can write on screen without a prompt
     */
    //% blockId=justkeyboard block="Keyboard"
    //% group="keyboards"
    export function justkey(): void {
        
    }
    /**
     * keyboard with slang, or phrase, to help you, so if you have radio on you could send a text with a phrase.
     */
    //% blockId=slang block="slang keyboard"
    //% group="keyboards"
    export function slang(slang: string): void {
        basic.showString("Sup")
    }
    /**
     * change how fast the string speed is
     * @param speed change the speed by negative and positive
     * 
     */
    //% blockId=setspeed block="set speed to $speed \\%"
    //% speed.shadow="speedPicker"
    //% group="Text Settings"
    export function textspeed(speed: number): void {
        textspeed(__internal.__speedPicker(speed))
    }
}
