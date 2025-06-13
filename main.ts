/**
 * Code was built off of the code at Science Buddies: Micro:bit Solar Tracker on YouTube @ https://www.youtube.com/watch?v=oPuld-ki4lw and alterned for the SolarBit product.
 */
// This sets the starting position of the motor and creates a list of angles to check for optimal light sensor reading.
let best_angle = 0
let Amount_of_light = 0
let max_light = 0
let list_of_angles: number[] = []
let angle = 0
pins.servoWritePin(AnalogPin.P0, 0)
while (angle <= 180) {
    list_of_angles.push(angle)
    angle += 15
}
// The servo will move every 15 degrees. 
// 
// With each movement it will record the amount of light read by the light sensor. 
// 
// It will pick its final position based on the highest light sensor reading.
// 
// A questions mark appears when it is moving and a check mark when it has reached its optimal position.
basic.forever(function () {
    max_light = 0
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . # . .
        . . # . .
        `)
    for (let angle_value of list_of_angles) {
        pins.servoWritePin(AnalogPin.P0, angle_value)
        basic.pause(1000)
        Amount_of_light = input.lightLevel()
        if (Amount_of_light > max_light) {
            max_light = Amount_of_light
            best_angle = angle_value
        }
    }
    pins.servoWritePin(AnalogPin.P0, best_angle)
    basic.showIcon(IconNames.Yes)
    basic.pause(10000)
})
