curr = 0

# Press A to add a 1 at the end of the binary number
# Press B to add a 0 at the end of the binary number
# Press AB to show and reset the decimal number


def on_button_pressed_a():
    global curr
    curr = (curr << 1) + 1
    show()

def on_button_pressed_b():
    global curr
    curr = (curr << 1)
    show()

def on_button_pressed_ab():
    global curr
    basic.clear_screen()
    basic.show_number(curr)
    curr = 0
    basic.clear_screen()

def show():
    global curr
    curr = curr % (2**25)
    for i in range(5):
        for j in range (5):
            if (curr >> (24 - (j*5+i))) % 2:
                led.plot(i,j)
            else:
                led.unplot(i,j)


input.on_button_pressed(Button.B, on_button_pressed_b)
input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.AB, on_button_pressed_ab)