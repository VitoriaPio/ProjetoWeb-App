import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 20,
    backgroundColor: "#1e1e1e",
  },

  scrollView: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  imageView: {
    display: "flex",
    alignItems: "center",
    borderRadius: 12,
    justifyContent: "center",
  },

  input: {
    width: "80%",
    height: 50,
    color: "black",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
  },
});

export default styles;
