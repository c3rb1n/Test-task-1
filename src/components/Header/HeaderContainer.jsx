import {compose} from "redux";
import {connect} from "react-redux";
import {notificationsIndicatorOff, setWorkTime, zeroing} from "../../redux/reducers/authReducer";
import Header from "./Header";

const mapStateToProps = state => {
    return {
        authorizedUser: state.auth.authorizedUser,
    };
};

export default compose(
    connect(mapStateToProps, {setWorkTime, zeroing, notificationsIndicatorOff})
)(Header)