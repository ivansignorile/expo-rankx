
import React from "react";
import HomeIcon from "../assets/icons/Home";
import SearchIcon from "../assets/icons/Search";
import OtherIcon from "../assets/icons/Other";
import WalletIcon from "../assets/icons/Wallet";
import ExploreIcon from "../assets/icons/Explore";
export default function SVG({
    icon,
    size,
    color,
    style = {}
}: {
    icon: any;
    size: number;
    color?: string;
    style?: any;
}){
    const mapping : any = {
        home: HomeIcon,
        search: SearchIcon,
        other: OtherIcon,
        wallet: WalletIcon,
        explore: ExploreIcon
    }

    return React.createElement(mapping[icon], {
        width: size,
        height: size,
        color,
        style
    });
}