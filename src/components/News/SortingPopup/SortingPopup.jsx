import React, {useEffect, useRef, useState} from "react";
import styles from "./SortingPopup.module.scss";
import ArrowUpIcon from "../../common/Icons/ArrowIcons/ArrowUpIcon/ArrowUpIcon";
import ArrowDownIcon from "../../common/Icons/ArrowIcons/ArrowDownIcon/ArrowDownIcon";

const SortingPopup = ({items}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const sortingRef = useRef();
    const activeLabel = items[activeItem];

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = e => {
        if (!e.path.includes(sortingRef.current)) {
            setVisiblePopup(false);
        }
    };

    const onSelectItem = index => {
        setActiveItem(index);
        setVisiblePopup(false);
    }

    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div ref={sortingRef} className={styles.sorting}>
            <span className={styles.sorting__label}>Сортировка:</span>
            <div onClick={toggleVisiblePopup}
                 className={`${styles.popup} ${visiblePopup && styles.popup__active}`}>
                <div className={styles.popup__activeLabel}>
                    <span>{activeLabel}</span>
                    <div className={styles.popup__img}>
                        {visiblePopup ? <ArrowUpIcon/> : <ArrowDownIcon/>}
                    </div>
                </div>
                {visiblePopup &&
                <ul className={styles.popup__list}>
                    {items && items.map((name, index) => (
                        !name.includes(activeLabel) &&
                        <li className={styles.popup__item}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    );
};

export default SortingPopup;
