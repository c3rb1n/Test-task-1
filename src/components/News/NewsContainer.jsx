import {compose} from "redux";
import {connect} from "react-redux";
import {toggleLike} from "../../redux/reducers/newsReducer";
import News from "./News";

const mapStateToProps = state => {
    return {
        news: state.news
    }
}

export default compose(
    connect(mapStateToProps, {toggleLike})
)(News);

