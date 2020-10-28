import avatar from "../../assets/images/avatar.jpg";
import rankIcon from "../../assets/images/rankIcon.png";

const LOGOUT = "LOGOUT";
const SET_WORK_TIME = "SET_WORK_TIME";
const ZEROING = "ZEROING";
const NOTIFICATION_INDICATOR_OFF = "NOTIFICATION_INDICATOR_OFF";

const initialState = {
    authorizedUser: {
        userId: 1,
        userAvatar: avatar,
        firstName: "Илья",
        lastName: "Прудников",
        progressBar: {
            rankIcon: rankIcon,
            rank: "Стажер, 1 месяц",
            userScore: 565,
            maxScore: 1100
        },
        balance: "5 300",
        workTime: {
            days: 129,
            hours: 9,
            minutes: 1,
            seconds: 44,
        },
        hasNotifications: true,
        isLogin: true
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                authorizedUser: {
                    ...state.authorizedUser,
                    isLogin: false
                }
            };
        case SET_WORK_TIME:
            return {
                ...state,
                authorizedUser: {
                    ...state.authorizedUser,
                    workTime: {
                        ...state.authorizedUser.workTime,
                        days: action.days,
                        hours: action.hours,
                        minutes: action.minutes,
                        seconds: action.seconds,
                    }
                }
            };
        case ZEROING:
            return {
                ...state,
                authorizedUser: {
                    ...state.authorizedUser,
                    progressBar: {
                        ...state.authorizedUser.progressBar,
                        userScore: 0
                    }
                }
            };
        case NOTIFICATION_INDICATOR_OFF:
            return {
                ...state,
                authorizedUser: {
                    ...state.authorizedUser,
                    hasNotifications: false
                }
            };
        default:
            return state;
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};
export const setWorkTime = (days, hours, minutes, seconds) => {
    return {
        type: SET_WORK_TIME,
        days,
        hours,
        minutes,
        seconds,
    };
};
export const zeroing = () => {
    return {
        type: ZEROING,
    };
};
export const notificationsIndicatorOff = () => {
    return {
        type: NOTIFICATION_INDICATOR_OFF,
    };
};

export default authReducer;