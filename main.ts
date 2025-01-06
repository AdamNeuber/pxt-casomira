radio.setGroup(53)

Sensors.SetLightLevel()
input.onButtonPressed(Button.A, function() {
    Sensors.SetLightLevel()
})

Sensors.OnLightDrop(function() {
    input.onButtonPressed(Button.AB, function() {
        radio.sendNumber(0)
    })
    radio.sendNumber(1)
});

radio.onReceivedNumber(function(receivedNumber: number) {
    
})

