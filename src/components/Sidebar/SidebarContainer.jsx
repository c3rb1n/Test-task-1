import {compose} from "redux";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/authReducer";
import Sidebar from "./Sidebar";

const mapStateToProps = state => {
    return {
        nav: state.sidebar.nav
    };
};

export default compose(
    connect(mapStateToProps, {logout})
)(Sidebar);
