import * as React from "react";
import Svg, {Rect,Path} from "react-native-svg";
const MapIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="30"
    fill="none"
    viewBox="0 0 40 40"
  >
    <Rect width="40" height="30" fill="#FED9B3" rx="20"></Rect>
    <Path
      stroke="#111"
      strokeWidth="1.5"
      d="M23 17.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    ></Path>
    <Path
      stroke="#111"
      strokeWidth="1.5"
      d="M20 10c4.059 0 7.5 3.428 7.5 7.587 0 4.225-3.497 7.19-6.727 9.206a1.55 1.55 0 0 1-1.546 0c-3.224-2.036-6.727-4.966-6.727-9.206C12.5 13.428 15.941 10 20 10Z"
    ></Path>
    <Path
      stroke="#111"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M26 28c0 1.105-2.686 2-6 2s-6-.895-6-2"
    ></Path>
  </Svg>
);

export default MapIcon;
