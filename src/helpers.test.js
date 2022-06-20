const { starRounder } = require("./helpers")

describe("round to nearest half star", () => {
    test("3.74 rounds down to 3.5", () => {
        expect(starRounder(3.74)).toEqual(3.5)
    })
    test("3.75 rounds up to 4", () => {
        expect(starRounder(3.75)).toEqual(4)
    })
    test("0.8 rounds up to 1", () => {
        expect(starRounder(0.8)).toEqual(1)
    })
})

// The component should take an inputted rating of between 0-5
// and display a star rating rounded to the nearest half star
// (e.g. a rating of 3.74 would show up as 3½ stars while 3.75 would round up to 4 stars)
