import * as React from "react";
import Svg, { Path, G, Ellipse } from "react-native-svg";
const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
  >
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m14.5 14 2.5 2.5"
    ></Path>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M16.933 18.525a1.48 1.48 0 1 1 2.092-2.092l3.042 3.042a1.48 1.48 0 1 1-2.092 2.092z"
    ></Path>
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M16.5 9a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z"
    ></Path>
  </Svg>
);

export default SearchIcon;
