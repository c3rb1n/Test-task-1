import React from "react";
import styles from "./ProgressBar.module.scss";
import styled from "styled-components";

const ProgressBar = props => {
    const Filler = styled.div`
        height: 100%;
        width: ${props.userScore <= props.maxScore 
                 ? Math.floor(props.userScore / props.maxScore * 100) : 0}%;
        background-color: #5BBE70;
        border-radius: inherit;
    `;

    if (props.userScore > props.maxScore) {
        props.zeroing();
    }

    return (
        <div className={styles.progressBar}>
            <div>
                <img src={props.rankIcon} alt="rank-icon"/>
            </div>
            <div className={styles.progressBar__barContainer}>
                <div className={styles.progressBar__label}>
                    <span>{props.rank}</span>
                    <span>{`${props.userScore}/${props.maxScore}`}</span>
                </div>
                <Filler/>
            </div>
        </div>
    );
};

export default ProgressBar;
