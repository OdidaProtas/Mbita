import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";

const ReviewsWidget = () => {
  return (
    <View style={styles.root}>
      <Caption style={styles.title}>This product has been rated </Caption>
      <View style={styles.ratingContainer}>
        <AirbnbRating
          count={5}
          reviews={["Bad", "OK", "Good", "Very Good", "Amazing"]}
          defaultRating={3}
          onSwipeRating={(ratin) => console.log(ratin)}
          size={20}
        />
      </View>
    </View>
  );
};

export default ReviewsWidget;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 18,
  },
  title: {
    alignSelf: "center",
  },
  ratingContainer: {
    marginBottom: 6,
  },
});
