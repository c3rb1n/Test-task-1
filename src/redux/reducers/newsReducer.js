import newsBackground1 from "../../assets/images/newsBackgrounds/newsBackground1.png";
import newsBackground2 from "../../assets/images/newsBackgrounds/newsBackground2.png";
import newsBackground3 from "../../assets/images/newsBackgrounds/newsBackground3.png";
import newsBackground4 from "../../assets/images/newsBackgrounds/newsBackground4.png";
import newsBackground5 from "../../assets/images/newsBackgrounds/newsBackground5.png";
import newsBackground6 from "../../assets/images/newsBackgrounds/newsBackground6.png";

const TOGGLE_LIKE = "TOGGLE_LIKE";

const initialState = {
    news: [
        {
            backgroundImg: newsBackground1,
            city: "Владимир",
            postTime: [2020, 9, 12, 2, 54, 12],
            newsText: "Выходные в Эко-Отеле за отличные результаты в чемпионате",
            likesCount: 14,
            commentsCount: 4,
            viewsCount: 512,
            liked: false
        },
        {
            backgroundImg: newsBackground2,
            city: "Иваново",
            postTime: [2020, 9, 12, 7, 11, 15],
            newsText: "Выходные в Эко-Отеле за отличные результаты в чемпионате",
            likesCount: 0,
            commentsCount: 0,
            viewsCount: 4,
            liked: false
        },
        {
            backgroundImg: newsBackground3,
            city: "Ярославль",
            postTime: [2019, 11, 22, 3, 15, 1],
            newsText: "Выходные в Эко-Отеле за отличные результаты в чемпионате",
            likesCount: 432,
            commentsCount: 312,
            viewsCount: 2546,
            liked: false
        },
        {
            backgroundImg: newsBackground4,
            city: "Нижний Новгород",
            postTime: [2015, 3, 2, 1, 12, 27],
            newsText: "Поздравляем Сергея Иванова с днем рождения!",
            likesCount: 543,
            commentsCount: 600,
            viewsCount: 4325,
            liked: false
        },
        {
            backgroundImg: newsBackground5,
            city: "Владимир",
            postTime: [2020, 7, 26, 3, 54, 11],
            newsText: "Открыли новый офис во Владимире",
            likesCount: 112,
            commentsCount: 94,
            viewsCount: 356,
            liked: false
        },
        {
            backgroundImg: newsBackground6,
            city: "Санкт-Петербург",
            postTime: [2020, 5, 6, 2, 23, 22],
            newsText: "Провели мастер-класс",
            likesCount: 294,
            commentsCount: 157,
            viewsCount: 1032,
            liked: false
        },
        {
            backgroundImg: newsBackground1,
            city: "Москва",
            postTime: [2020, 2, 3, 1, 54, 31],
            newsText: "Выходные в Эко-Отеле за отличные результаты в чемпионате",
            likesCount: 316,
            commentsCount: 253,
            viewsCount: 1973,
            liked: false
        },
        {
            backgroundImg: newsBackground2,
            city: "Вологда",
            postTime: [2020, 9, 12, 1, 54, 12],
            newsText: "Выходные в Эко-Отеле за отличные результаты в чемпионате",
            likesCount: 57,
            commentsCount: 32,
            viewsCount: 126,
            liked: false
        }
    ]
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LIKE:
            return {
                ...state,
                news: state.news.map((n, index) => {
                    if (index + 1 === action.id) {
                        if (n.liked) {
                            return {
                                ...n,
                                liked: false,
                                likesCount: --n.likesCount
                            }
                        } else {
                            return {
                                ...n,
                                liked: true,
                                likesCount: ++n.likesCount
                            }
                        }
                    } else {
                        return n;
                    }
                }),
            };
        default:
            return state;
    }
};

export const toggleLike = id => ({type: TOGGLE_LIKE, id});

export default newsReducer;