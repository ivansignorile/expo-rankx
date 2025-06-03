import * as React from "react";
import { Image } from "react-native";
import Svg, { Path, G, Ellipse } from "react-native-svg";

const Logo = ({ width = 381.402, height = 176.414 }) => (
  <Image
    source={{
      uri: 'https://www.rankx.it/wp-content/uploads/2024/05/white-logo-rankx.png'
    }}
    style={{
      width: width,
      height: height,
      resizeMode: "contain",
    }}
    alt="Logo"
  />
);

export default Logo;
