import React from "react";
import MainIcon from "../components/common/Icons/MainIcon/MainIcon";
import MyOfficeIcon from "../components/common/Icons/MyOfficeIcon/MyOfficeIcon";
import RatingsIcon from "../components/common/Icons/RatingsIcon/RatingsIcon";
import NewsIcon from "../components/common/Icons/NewsIcon/NewsIcon";
import BattlesIcon from "../components/common/Icons/BattlesIcon/BattlesIcon";
import ShopIcon from "../components/common/Icons/ShopIcon/ShopIcon";
import RulesIcon from "../components/common/Icons/RulesIcon/RulesIcon";
import HelpIcon from "../components/common/Icons/HelpIcon/HelpIcon";

export const getIcon = id => id === 0 ? <MainIcon/> :
                             id === 1 ? <MyOfficeIcon/> :
                             id === 2 ? <RatingsIcon/> :
                             id === 3 ? <NewsIcon/> :
                             id === 4 ? <BattlesIcon/> :
                             id === 5 ? <ShopIcon/> :
                             id === 6 ? <RulesIcon/> : <HelpIcon/>;