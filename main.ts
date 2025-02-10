let isRunning = false

radio.setGroup(53)
basic.pause(100)
Sensors.SetLightLevel()

input.onButtonPressed(Button.A, function () {
    Sensors.SetLightLevel()
    isRunning = false
})

Sensors.OnLightDrop(function () {
    if(isRunning === false) {
        music.playTone(520, 400)
        radio.sendNumber(1)
        isRunning = true
    }
    
});

input.onButtonPressed(Button.AB, function () {
    if(isRunning === false) {
        radio.sendNumber(0)
        isRunning = true
    }
})

radio.onReceivedNumber(function (receivedNumber: number) {
    music.playTone(440, 400)
    basic.showNumber(receivedNumber)
})

input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    Sensors.SetLightLevel()
    isRunning = false
})
