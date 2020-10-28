import React from "react";
import "./NewsItems.scss";
import NewsItem from "./NewsItem/NewsItem";

const NewsItems = props => {
    const newsElements = props.news.map((n, index) => <NewsItem key={index}
                                                                id={index + 1}
                                                                backgroundImg={n.backgroundImg}
                                                                city={n.city}
                                                                postTime={n.postTime}
                                                                newsText={n.newsText}
                                                                likesCount={n.likesCount}
                                                                commentsCount={n.commentsCount}
                                                                viewsCount={n.viewsCount}
                                                                liked={n.liked}
                                                                toggleLike={props.toggleLike}/>);
    let newsElementsChecked = [];

    for (let i = 0; i < 8; i++) {
        newsElementsChecked.push(newsElements[i]);
    }

    return (
        <div className="newsItems">
            {newsElementsChecked}
        </div>
    );
};

export default NewsItems;