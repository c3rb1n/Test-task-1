import React from "react";
import styles from "./Header.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import ProgressBar from "./ProgressBar/ProgressBar";
import Balance from "./Balance/Balance";
import TimeCounterContainer from "./TimeCounter/TimeCounterContainer";
import HeaderIcons from "./HeaderIcons/HeaderIcons";

const Header = props => {
    return (
        <header className={styles.header}>
            <div className={styles.header1}>
            <UserInfo userAvatar={props.authorizedUser.userAvatar}
                      firstName={props.authorizedUser.firstName}
                      lastName={props.authorizedUser.lastName}/>
            <ProgressBar rankIcon={props.authorizedUser.progressBar.rankIcon}
                         rank={props.authorizedUser.progressBar.rank}
                         userScore={props.authorizedUser.progressBar.userScore}
                         maxScore={props.authorizedUser.progressBar.maxScore}
                         zeroing={props.zeroing}/>
            </div>
            <div className={styles.header2}>
                <Balance balance={props.authorizedUser.balance}/>
                <TimeCounterContainer isLogin={props.authorizedUser.isLogin}
                                      days={props.authorizedUser.workTime.days}
                                      hours={props.authorizedUser.workTime.hours}
                                      minutes={props.authorizedUser.workTime.minutes}
                                      seconds={props.authorizedUser.workTime.seconds}
                                      setWorkTime={props.setWorkTime}/>
                <HeaderIcons hasNotifications={props.authorizedUser.hasNotifications}
                             notificationsIndicatorOff={props.notificationsIndicatorOff}/>
            </div>
        </header>
    );
};

export default Header;
