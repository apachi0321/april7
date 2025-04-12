input.onPinPressed(TouchPin.P0, function () {
	
})
function doSomething () {
	
}
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 50; index++) {
        music.ringTone(494)
        continue;
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.showNumber(1000)
basic.showLeds(`
    . # . # .
    # # . # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showString("hello smarty")
basic.showIcon(IconNames.Heart)
music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
})
