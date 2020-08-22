> Open this page at [https://joemcflo13.github.io/Keyboard/](https://joemcflo13.github.io/Keyboard/)

# blocks by JoemcFlo13

## Usage (how to use)

### keyboard #keyboardtextkey

Put this block in a string statement and you can write directly from the microbit. Press A to say that this is your letter. Press B to say that this is not, and continue the keyboard.
It is a lot of work, but you can get there. with most of these keyboards its best if you put a basic.clearScreen() after it. but the text will go away if you leave it.

``` blocks
serial.writeString(Keyboard.textkey("what is your favorite color?"))
basic.showString(Keyboard.textkey("say something"))

basic.showString(Keyboard.textkey(Keyboard.justkey()))
```

### Just the keyboard #keyboardjustkey

this block is just a keyboard. no prompt. you can type with it. Press A to select a letter, and press B to choose the next one. it is good to use the clear screen after this one.

``` blocks
basic.showString(Keyboard.justkey())
```

### Slang keyboard #keyboardslang

this is if you need to type fast but you cant type fast. if you need to say something "cool". Or even if you need to say something "cool" fast. it is good to use the clear screen after this one also.

``` blocks
basic.showString(Keyboard.slang())
```

## y and n prompt #keyboardboolprompt

this block is meant for second chances, if you acesdentaly clicked on something, then maybe you want to make sure you really want to continue.

``` blocks
input.onButtonPressed(Button.AB, function () {
    if (Keyboard.boolprompt("DO YOU WANT TO CONTINUE?")) {
        basic.showString(Keyboard.justkey())
    }
})
```

## y and n no prompt #keyboardbool

this is jus the same block as before, but with no prompt, if you just want them to make sure of something, with out them being aware of what they are doing.

``` blocks
input.onButtonPressed(Button.AB, function () {
    if (Keyboard.bool()) {
        basic.showString(Keyboard.justkey())
    }
})
```


## Set Speed #keyboardtextspeed

Don't like the scroll speed of the strings? well you can change that now.

``` blocks
Keyboard.textspeed(__internal.__speedPicker(50))
```

## Use as Extension ![Build status badge](https://github.com/joemcflo13/extention-again/workflows/MakeCode/badge.svg)

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/joemcflo13/keyboard** and import


#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
