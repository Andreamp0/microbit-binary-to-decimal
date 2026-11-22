let curr = 0
//  Press A to add a 1 at the end of the binary number
//  Press B to add a 0 at the end of the binary number
//  Press AB to show and reset the decimal number
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

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    curr = curr << 1
    show()
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    curr = (curr << 1) + 1
    show()
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    basic.clearScreen()
    basic.showNumber(curr)
    curr = 0
    basic.clearScreen()
})
