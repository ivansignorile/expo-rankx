import { Colors } from "@/constants/Colors";
import { Dimensions, Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  pagerViewPage: {
    justifyContent: "space-around",
    alignItems: "center",
    height: Dimensions.get("window").height,
    paddingVertical: 50,
  },
  white: {
    color: "white",
  },
  black: {
    color: "black",
  },
  block: {
    width: "100%",
  },
  primaryInvert: {
    color: Colors.primaryInvert,
    borderColor: Colors.primaryInvert,
  },
  primaryColor: {
    color: Colors.primary,
    borderColor: Colors.primary,
  },
  Heading1: {
    fontSize: 42,
    fontFamily: "Archivo-Bold",
    textTransform: "uppercase",
  },
  Heading2: {
    fontSize: 30,
    fontFamily: "Archivo-Bold",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  Heading: {
    fontSize: 26,
    lineHeight: 30.5,
    fontFamily: "Archivo-Bold",
  },
  Heading3: {
    fontSize: 21,
    lineHeight: 23.5,
    fontFamily: "Archivo-Regular",
  },
  textCenter: {
    textAlign: "center",
  },
  w100: {
    width: "100%",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  BodyXS: {
    fontSize: 7,
    fontFamily: "Archivo-Regular",
  },
  BodyS: {
    fontSize: 12,
    fontFamily: "Archivo-Regular",
  },
  BodyM: {
    fontSize: 14,
    fontFamily: "Archivo-Regular",
  },
  BodyL: {
    fontSize: 18,
    fontFamily: "Archivo-Regular",
  },
  BodyXL: {
    fontSize: 22,
    lineHeight: 27,
    fontFamily: "Archivo-Regular",
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  m10h: {
    marginVertical: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  p20: {
    padding: 20,
  },
  p20w: {
    paddingHorizontal: 20,
  },
  p10: {
    padding: 10,
  },
  p10h: {
    paddingVertical: 10,
  },
  p10w: {
    paddingHorizontal: 10,
  },
  p5w: {
    paddingHorizontal: 5,
  },
  p5h: {
    paddingVertical: 5,
  },
  p20h: {
    paddingVertical: 20,
  },
  plainButton: {
    color: "#fff",
    fontSize: 12,
  },
  inlineFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  roundedButton: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "transparent",
  },
  secondary: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
  },
  secondaryText: {
    color: Colors.secondary,
  },
  primary: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "Archivo-Bold",
  },
  semiBold: {
    fontWeight: "600",
  },
  light: {
    color: "#666",
  },
  input: {
    height: 60,
    margin: 0,
    borderWidth: 1,
    padding: 20,
    width: "100%",
    marginBottom: 40,
    borderRadius: 2.5,
    fontSize: 18,
    borderColor: "#666",
    backgroundColor: "#fff",
    fontFamily: "Archivo-Regular",
  },
  error: {
    color: "#EF4444",
  },
  errorDark: {
    color: "#B91C1C",
    textDecorationLine: "underline",
  },
  underline: {
    textDecorationLine: "underline",
  },
  errorCode: {
    backgroundColor: "#B91C1C",
    padding: 20,
    borderRadius: 10,
  },
  actionBox: {
    width: "90%",
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 10,
    left: "5%",
  },
  backdrop: {
    backgroundColor: "rgba(241, 232, 223, 0.75)",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "absolute",
    zIndex: 100,
    top: 0,
    left: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    paddingBottom: 70,
  },
  subtitle: {
    color: "#818181",
  },
  camera: {
    width: "100%",
    height: 300,
  },
  cameraButtonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  cameraButton: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  hr: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: Colors.primary,
    marginTop: 10,
    opacity: 0.5,
  },
  reaction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5",
  },
  fab: {
    position: "absolute",
    bottom: 150,
    left: Dimensions.get("window").width - 100,
    width: 90,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#444",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
  },
  fabText: {
    backgroundColor: Colors.secondary,
    width: 30,
    height: 30,
    borderRadius: 40,
    paddingTop: 5,
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    top: -10,
    right: 5,
  },
  hcard: {
    width: 312,
    minHeight: 400,
    marginRight: 10,
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
  },
  hcardImage: {
    width: "100%",
    height: 168,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  hcardOPEN: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  hcardCLOSED: {
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  distance: {
    padding: 10,
    backgroundColor: Colors.primaryLight,
    width: 81,
    color: Colors.primary,
    borderRadius: 40,
    marginTop: 10,
  },
  distanceFound: {
    backgroundColor: Colors.secondaryLight,
  },
  horizontalItem: {
    width: 200,
    height: 70,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginVertical: 10,
  },
  HeadingContainer: {
    backgroundColor: Colors.third,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  third: {
    backgroundColor: Colors.third,
  },
  cyan: {
    backgroundColor: Colors.cyan,
  },
  bgWhite: {
    backgroundColor: "white",
  },
  half: {
    flex: 0.5,
    maxWidth: "50%",
  },
  twothird: {
    flex: 0.75,
    maxWidth: "75%",
  },
  bgTransparent: {
    backgroundColor: "transparent",
  },
  vcard: {
    width: (Dimensions.get("window").width * 80) / 100,
    height: Dimensions.get("window").width,
    marginRight: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "#fbfbfb",
  },
  vcardImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
});

export default styles;
