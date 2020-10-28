import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import "./App.scss";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Main from "./components/Main/Main";
import MyOffice from "./components/MyOffice/MyOffice";
import Ratings from "./components/Ratings/Ratings";
import NewsContainer from "./components/News/NewsContainer";
import Battles from "./components/Battles/Battles";
import Shop from "./components/Shop/Shop";
import Rules from "./components/Rules/Rules";
import Help from "./components/Help/Help";
import Login from "./components/Login/Login";
import Notifications from "./components/Notifications/Notifications";
import Settings from "./components/Settings/Settings";

const App = props => {
    return (
        <Switch>
            <Route path="/login" render={() => <Login/>}/>
            <div className="app">
                <HeaderContainer/>
                <SidebarContainer/>
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/news"/>}/>
                        <Route path="/main" render={() => <Main/>}/>
                        <Route path="/myOffice" render={() => <MyOffice/>}/>
                        <Route path="/ratings" render={() => <Ratings/>}/>
                        <Route path="/news" render={() => <NewsContainer/>}/>
                        <Route path="/battles" render={() => <Battles/>}/>
                        <Route path="/shop" render={() => <Shop/>}/>
                        <Route path="/rules" render={() => <Rules/>}/>
                        <Route path="/help" render={() => <Help/>}/>
                        <Route path="/notifications" render={() => <Notifications/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </Switch>
                </div>
            </div>
        </Switch>
    );
};

export default App;
