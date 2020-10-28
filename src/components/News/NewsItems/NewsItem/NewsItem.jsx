import React from "react";
import moment from "moment";
import "moment/locale/ru";
import styles from "./NewsItem.module.scss";
import ClockIcon from "../../../common/Icons/ClockIcon/ClockIcon";
import LikeIconRed from "../../../common/Icons/LikeIcons/LikeIconRed/LikeIconRed";
import LikeIconWhite from "../../../common/Icons/LikeIcons/LikeIconWhite/LikeIconWhite";
import CommentsIcon from "../../../common/Icons/CommentsIcon/CommentsIcon";
import ViewsIcon from "../../../common/Icons/ViewsIcon/ViewsIcon";

const NewsItem = props => {
    const style = {
        background: `url(${props.backgroundImg}) no-repeat 50% 50%`,
        backgroundSize: "cover",
        borderRadius: "10px"
    }

    const postTime = moment(props.postTime).fromNow();

    return (
        <div style={style} className={`newsItem-${props.id}`}>
            <div className={styles.newsItem}>
                <div className={styles.newsItem__header}>
                    <span className={styles.newsItem__header_inner}>{props.city}</span>
                </div>
                <div>
                    <div className={styles.timer}>
                        <ClockIcon/>
                        <span className={styles.timer__timerText}>{postTime}</span>
                    </div>
                    <span className={styles.newsItem__newsText}>{props.newsText}</span>
                    <div className={styles.footer}>
                        <div className={styles.footer__interface}>
                            {props.liked ? <LikeIconRed toggleLike={props.toggleLike} id={props.id}/> :
                                           <LikeIconWhite toggleLike={props.toggleLike} id={props.id}/>}
                            <span className={styles.footer__likesCount}>{props.likesCount}</span>
                            <CommentsIcon/>
                            <span className={styles.footer__commentsCount}>{props.commentsCount}</span>
                        </div>
                        <div className={styles.footer__views}>
                            <ViewsIcon/>
                            <span className={styles.footer__viewsCount}>{props.viewsCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
