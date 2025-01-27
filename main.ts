radio.setGroup(53)
basic.pause(100)
Sensors.SetLightLevel()

input.onButtonPressed(Button.A, function () {
    Sensors.SetLightLevel()
})

Sensors.OnLightDrop(function () {
    music.playTone(520, 400)
    radio.sendNumber(1)
});

input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})

radio.onReceivedNumber(function (receivedNumber: number) {
    music.playTone(440, 400)
    basic.showNumber(receivedNumber)
})

input.onButtonPressed(Button.B, function() {
    control.reset()
})
