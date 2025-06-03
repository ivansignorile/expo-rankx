import * as React from "react";
import Svg, {Path, Rect} from "react-native-svg";

const SvgIcon = (props) => (
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
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M11.778 19.942c-.948-1.653-1.406-3.003-1.682-4.37-.408-2.024.526-4.001 2.073-5.262.654-.534 1.404-.351 1.791.342l.873 1.567c.692 1.242 1.038 1.862.97 2.52-.069.659-.536 1.195-1.469 2.267zm0 0c1.918 3.346 4.93 6.36 8.28 8.28m0 0c1.653.948 3.003 1.406 4.37 1.682 2.024.408 4.001-.526 5.262-2.073.534-.654.351-1.404-.342-1.791l-1.567-.873c-1.242-.692-1.862-1.038-2.52-.97-.659.069-1.195.536-2.267 1.469z"
    ></Path>
  </Svg>
);

export default SvgIcon;
