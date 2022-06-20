module.exports = {
    starRounder: starRounder,
}

function starRounder(starStateData) {
    return Math.round(starStateData * 2, 0) * 0.5
}
