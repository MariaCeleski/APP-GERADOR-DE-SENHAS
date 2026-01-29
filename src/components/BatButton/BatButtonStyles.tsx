import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: "black",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E5BF3C",
  },

  toast: {
    marginTop: 14,
    alignSelf: "center",
    backgroundColor: "#2e2e2e",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  toastText: {
    color: "#E5BF3C",
    fontSize: 14,
    fontWeight: "600",
  },

  strengthContainer: {
    width: "100%",
    height: 10,
    backgroundColor: "#444",
    borderRadius: 5,
    marginTop: 10,
    overflow: "hidden",
  },

  strengthBar: {
    height: "100%",
    borderRadius: 5,
  },

  strengthText: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});
