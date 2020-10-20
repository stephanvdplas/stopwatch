input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
let elapsed = 0
let start = 0
start = 0
basic.forever(function () {
    if (start == 0) {
        basic.showIcon(IconNames.StickFigure)
    } else {
        elapsed = input.runningTime() - start
        basic.showNumber(Math.round(elapsed / 1000))
    }
})
