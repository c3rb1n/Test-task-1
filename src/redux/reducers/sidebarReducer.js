const initialState = {
    nav: [
        {path: "/main", text: "Главная"},
        {path: "/myOffice", text: "Мой офис"},
        {path: "/ratings", text: "Рейтинги"},
        {path: "/news", text: "Новости"},
        {path: "/battles", text: "Баттлы"},
        {path: "/shop", text: "Магазин"},
        {path: "/rules", text: "Правила"},
        {path: "/help", text: "Помощь"}
    ]
};

const sidebarReducer = (state = initialState) => {
    return state;
};

export default sidebarReducer;