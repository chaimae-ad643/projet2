function A () {
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    A()
    B()
})
function B () {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(4, 1)
    led.plot(4, 2)
    led.plot(4, 3)
    led.plot(4, 4)
    led.plot(3, 4)
    led.plot(2, 4)
    led.plot(1, 4)
    led.plot(0, 4)
    led.plot(0, 4)
    led.plot(0, 3)
    led.plot(0, 2)
    led.plot(0, 1)
}
input.onButtonPressed(Button.AB, function () {
    A()
    B()
    C()
})
input.onButtonPressed(Button.B, function () {
    A()
    C()
})
function C () {
    led.plot(1, 2)
    led.plot(2, 1)
    led.plot(3, 2)
    led.plot(2, 3)
    led.plot(2, 2)
}
