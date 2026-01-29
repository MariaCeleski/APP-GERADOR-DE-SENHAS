import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 30,
    backgroundColor: "#4D4D4D",
    borderRadius: 8,
  },

  inputContainer: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
  },

  sliderContainer: {
    width: "80%",
    marginVertical: 20,
  },

  sliderText: {
    color: "#E5BF3C",
    textAlign: "center",
    marginBottom: 8,
  },
});

export default styles;
