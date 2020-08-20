
> Open this page at [https://joemcflo13.github.io/extention-again/](https://joemcflo13.github.io/extention-again/)

## Usage (how to use)

### keyboard

Put this block in a string statement and you can write directly from the microbit. Press A to say that this is your letter. Press B to say that this is not, and continue the keyboard.
It is a lot of work, but you can get there.

``` blocks
serial.writeString(Keyboard.textkey("what is your favorite color?"))
basic.showString(Keyboard.textkey("say something"))

basic.showString(Keyboard.justkey())

basic.showString(Keyboard.textkey(Keyboard.justkey()))
```

### Slang keyboard

this is if you need to type fast but you cant type fast. if you need to say something "cool". Or even if you need to say something "cool" fast.\

``` blocks
basic.showString(Keyboard.slang())
```

### Set Speed

Don't like the scroll speed of the strings? well you can change that now.

``` blocks
Keyboard.textspeed(__internal.__speedPicker(50))
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/joemcflo13/extention-again** and import

## Edit this project ![Build status badge](https://github.com/joemcflo13/extention-again/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/joemcflo13/extention-again** and click import


#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
