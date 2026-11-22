namespace temp {
    export let curr = 0
    export function show() {
        
        basic.showNumber(curr)
    }
    
    export function on_button_pressed_ab() {
        
        basic.showNumber(curr)
    }
    
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        
        basic.pause(100)
        if (input.buttonIsPressed(Button.A)) {
            temp.on_button_pressed_ab()
        } else {
            curr = curr << 1
            temp.show()
        }
        
    })
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        
        basic.pause(100)
        if (input.buttonIsPressed(Button.B)) {
            temp.on_button_pressed_ab()
        } else {
            curr = (curr << 1) + 1
            temp.show()
        }
        
    })
}
