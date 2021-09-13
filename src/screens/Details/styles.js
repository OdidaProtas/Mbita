import { StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  carouselContainer: {
    minHeight: 400,
    marginTop:18
  },
  carousel: {
    paddingHorizontal:18,
    alignItems:"center"
  },

  image: {
    width: "100%",
    height: 400,
    borderRadius:4
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    width: 300,
    height: 400,
  },
  paginationContainer: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    paddingVertical: 8,
    marginTop: 200,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0,
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 10,
    color: "#2cd18a",
  },
  infoDescriptionRecipe: {
    textAlign: "left",
    fontSize: 16,
    marginTop: 30,
    margin: 15,
  },
  infoRecipeName: {
    margin: 10,
    color: "black",
    marginTop: 18,
    marginBottom: 18,
  },
});

export default styles;
