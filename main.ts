let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (degrees < 67.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (degrees < 112.5) {
        basic.showArrow(ArrowNames.West)
    } else if (degrees < 157.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (degrees < 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (degrees < 247.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (degrees < 292.5) {
        basic.showArrow(ArrowNames.East)
    } else if (degrees < 337.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
