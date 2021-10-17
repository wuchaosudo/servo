input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P3, 0)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P3, 180)
    basic.pause(1000)
})
pins.servoWritePin(AnalogPin.P3, 90)
pins.servoSetPulse(AnalogPin.P3, 1500)
