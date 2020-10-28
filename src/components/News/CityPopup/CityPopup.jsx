import React, {useEffect, useRef, useState} from "react";
import styles from "./CityPopup.module.scss";
import ArrowUpIcon from "../../common/Icons/ArrowIcons/ArrowUpIcon/ArrowUpIcon";
import ArrowDownIcon from "../../common/Icons/ArrowIcons/ArrowDownIcon/ArrowDownIcon";

const CityPopup = props => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const cityRef = useRef();
    const activeLabel = props.items[activeItem];

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = e => {
        if (!e.path.includes(cityRef.current)) {
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
        <div ref={cityRef} className={styles.city}>
            <span className={styles.city__label}>Город:</span>
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
                    {props.items && props.items.map((name, index) => (
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

export default CityPopup;
