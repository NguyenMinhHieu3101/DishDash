import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import RecipeCard from "../components/RecipeCard";
import RecipesCarousel from "../components/RecipesCarousel";
// import Carousel from "react-native-snap-carousel";
import Carousel from "react-native-reanimated-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_WIDTH = Math.round(Dimensions.get("window").width);

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Inspiration</Text>
      {/* <RecipeCard style={styles.card} /> */}
      {/* <Carousel
        data={[1, 2, 3, 4, 5]}
        layout="stack"
        // layoutCardOffset={9}
        renderItem={RecipeCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        // inactiveSlideShift={0}
        useScrollView={true}
      /> */}
      <Carousel
        loop
        width={SLIDER_WIDTH}
        height={SLIDER_WIDTH / 2}
        autoPlay={true}
        data={[1, 2, 3, 4, 5]}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={RecipeCard}
        onConfigurePanGesture={(gestureChain) =>
          gestureChain.activeOffsetX([-10, 10])
        }
      />
      <View style={styles.subTitleRow}>
        <Text style={styles.subTitle}>Trending Now</Text>
        <TouchableOpacity>
          <Text style={styles.viewButton}>View all</Text>
        </TouchableOpacity>
      </View>
      <RecipeCard />
      <View style={styles.subTitleRow}>
        <Text style={styles.subTitle}>New Releases</Text>
        <TouchableOpacity>
          <Text style={styles.viewButton}>View all</Text>
        </TouchableOpacity>
      </View>
      <RecipeCard />
      <View style={styles.subTitleRow}>
        <Text style={styles.subTitle}>New Everyday Dishes</Text>
        <TouchableOpacity>
          <Text style={styles.viewButton}>View all</Text>
        </TouchableOpacity>
      </View>
      <RecipeCard />

      <RecipesCarousel style={styles.carousel} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    marginBottom: 30,
  },
  subTitleRow: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  subTitle: {
    flex: 0.9,
    fontSize: 20,
    fontWeight: "bold",
  },
  viewButton: {
    textTransform: "uppercase",
    textDecorationLine: "underline",
  },
  carousel: {},
});

export default HomeScreen;
