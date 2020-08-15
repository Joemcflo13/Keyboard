
//%icon="\f07b" color=#0344ab weight=2
namespace Keyboard {
    /**
     * @param prompt this is my parameter, eg: "What do you want to ask?"
     * keyboard so you can write on screen with a prompt
     */
    //% blockId=textkeyboard block="Keyboard with prompt: $prompt"
    export function textkey(prompt: string) : void {
        basic.showString(prompt)
    }
    /**
     * keyboard so you can write on screen without a prompt
     */
    //% blockId=justkeyboard block="Keyboard"
    export function justkey() : void {
        
    }
}
