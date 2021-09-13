let Reading = 0
led.setBrightness(64)
radio.setTransmitSerialNumber(true)
radio.setGroup(4)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    Reading = pins.analogReadPin(AnalogPin.P0)
    radio.sendNumber(Reading / 4)
    pins.analogWritePin(AnalogPin.P0, 0)
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P0),
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (Reading))
    }
})
