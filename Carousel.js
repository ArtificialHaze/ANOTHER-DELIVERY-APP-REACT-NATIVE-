import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const slides = ["[IMAGE_01]", "[IMAGE_02]", "[IMAGE_03]"];

  return (
    <View style={styles.carouselContainer}>
      {/* <SliderBox
        images={slides}
        dotColor={"goldenrod"}
        inactiveDotColor={"lightblue"}
        imageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
        autoplay
        circleLoop
      /> */}
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
