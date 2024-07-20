import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { Screen } from "src/shared/Screen";
import HomeHeader from "./components/HomeHeader";
import { Feed, stories } from "@data/index";
import theme from "@themes/index";
import StoriesCard from "./components/StoriesCard";
import FeedCard from "./components/FeedCard";

const Home = () => {
  return (
    <Screen>
      <HomeHeader />
      <ScrollView style={{ flex: 1, marginHorizontal: -16}} showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 8, marginTop: 8, paddingHorizontal: 16 }}>
          <Text
            style={[
              { ...theme.typography.bodySemiBold },
              { color: theme.colors.BLACK },
            ]}
          >
            Streamings
          </Text>
        </View>
        <View style={{paddingHorizontal: 16}}>
          <FlatList
            horizontal
            data={stories}
            renderItem={({ item }) => <StoriesCard item={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <FlatList
          data={Feed}
          renderItem={({ item }) => <FeedCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </Screen>
  );
};

export default Home;
