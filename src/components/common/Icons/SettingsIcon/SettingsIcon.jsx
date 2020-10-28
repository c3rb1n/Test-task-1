import React from "react";
import styles from "./SettingsIcon.module.scss";

const SettingsIcon = () => {
    return (
        <div>
            <svg display="none">
                <symbol id="settings-icon" viewBox="0 0 22 22">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M17.6562 19.897L19.8733 17.6798L19.0925 14.843L19.4327 14.0305L22 12.5818V9.44645L19.44 7.99173L19.1055 7.18067L19.8961 4.34235L17.6774 2.12683L14.8403 2.90748L14.0296 2.56758L12.5808 0H9.44544L7.99072 2.56004L7.17985 2.89446L4.34198 2.10281L2.1267 4.31809L2.90748 7.15567L2.56758 7.96634L0 9.41514V12.5496L2.55774 14.0076L2.89252 14.8193L2.10197 17.6572L4.31809 19.8733L7.15567 19.0925L7.96644 19.4325L9.41527 21.999H12.5498L14.0067 19.4412L14.8183 19.1065L17.6562 19.897ZM17.8527 12.6256L16.9809 14.7078L17.6362 17.0886L17.0678 17.657L14.692 16.9951L12.609 17.8542L11.3873 19.999H10.5829L9.37141 17.8529L7.29155 16.9808L4.90947 17.6362L4.34203 17.0688L5.00385 14.693L4.14482 12.6101L2 11.3876V10.583L4.1471 9.3715L5.0192 7.29155L4.36375 4.90947L4.93001 4.34321L7.30576 5.00595L9.38955 4.14655L10.6093 2H11.4129L12.6245 4.1471L14.7044 5.0192L17.087 4.36362L17.6558 4.93166L16.9941 7.30696L17.8534 9.39056L20 10.6103V11.4139L17.8527 12.6256ZM11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C13.2091 7 15 8.79086 15 11C15 13.2091 13.2091 15 11 15ZM13 11C13 12.1046 12.1046 13 11 13C9.89543 13 9 12.1046 9 11C9 9.89543 9.89543 9 11 9C12.1046 9 13 9.89543 13 11Z"/>
                </symbol>
            </svg>
            <svg className={styles.settingsIcon}>
                <use href="#settings-icon"/>
            </svg>
        </div>
    );
};

export default SettingsIcon;