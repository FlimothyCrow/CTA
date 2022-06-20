import "./StarRating.scss"
const { starRounder } = require("./helpers")

const StarRating = (props) => {
    console.log(props.starCount)
    let starCountToRender = starRounder(props.starCount)
    console.log(starCountToRender)
    return (
        <div>
            <div
                className="Stars"
                style={{ "--rating": starCountToRender }}
                aria-label={`This contractor rates at ${props.starCount} stars`}
            />
            <span className="bodytext starCountNumber">{props.starCount}</span>
            <span className="bodytext reviewCount">{props.reviewCount}</span>
            <div className="ratingstext">Ratings based on all services performed nationwide.</div>
        </div>
    )
}

export default StarRating
