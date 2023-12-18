import { Dimensions, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";

import RecipeCard from "./RecipeCard";

const SLIDER_WIDTH = Dimensions.get("window").width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_WIDTH = Math.round(Dimensions.get("window").width);

const RecipesCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        data={[1, 2, 3, 4, 5]}
        layout="default"
        // layoutCardOffset={9}
        renderItem={RecipeCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        // inactiveSlideShift={0}
        // useScrollView={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "steelblue",
  },
});

export default RecipesCarousel;
