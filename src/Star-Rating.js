const { starRounder } = require("./helpers")

const Star = (props) => {
    return (
        <div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
            <div class="clip-star"></div>
        </div>
    )
}
// 4.9 should render up to 5.0
export default Star
