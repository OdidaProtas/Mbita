import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoriesItemContainer: {
    margin: 20,
  },
  categoriesPhoto: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  categoriesName: {
    flex: 1,
    textAlign: "center",
    color: "#333333",
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5,
  },
});

export default styles;
