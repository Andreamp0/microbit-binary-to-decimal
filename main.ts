let curr = 0
//  Press A to add a 1 at the end of the binary number
//  Press B to add a 0 at the end of the binary number
//  Press AB to show and reset the decimal number
function btn(obtn: number, add: number) {
    
    basic.pause(100)
    if (input.buttonIsPressed(obtn)) {
        on_button_pressed_ab()
    } else {
        curr = (curr << 1) + add
        show()
    }
    
}

function show() {
    
    curr = curr % 2 ** 25
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if ((curr >> 24 - (j * 5 + i)) % 2) {
                led.plot(i, j)
            } else {
                led.unplot(i, j)
            }
            
        }
    }
}

function on_button_pressed_ab() {
    
    basic.clearScreen()
    basic.showNumber(curr)
    curr = 0
    basic.clearScreen()
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    btn(Button.A, 0)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    btn(Button.B, 1)
})
