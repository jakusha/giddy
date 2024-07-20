import { SVGIcon } from "@shared/SVGIcon";
import theme from "@themes/index";
import { wp, hp } from "@utils/responsive-design";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const StoriesCard = ({ item }: { item: any }) => {
  return (
    <View style={styles.storiesCard}>
      <Image source={item.image} style={styles.storiesImage} />
      <View style={styles.storiesProfileCont}>
        {item.id === 0 ? (
          <SVGIcon name="addIcon" color={theme.colors.BLACK} />
        ) : (
          <Image source={item.avatar} style={styles.storiesImage} />
        )}
      </View>

      <Text style={[styles.storiesText, styles.storiesText2]}>
        {item.title}
      </Text>
      <Text style={styles.storiesText}>
        <View style={styles.redCirle}></View>
        {item.noOfStreams}
      </Text>
    </View>
  );
};

export default StoriesCard;

const styles = StyleSheet.create({
  storiesCard: {
    width: wp(120),
    height: hp(180),
    marginRight: 12,
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  storiesImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  storiesProfileCont: {
    borderRadius: 100,
    width: wp(35),
    height: hp(35),
    borderWidth: 2,
    borderColor: theme.colors.PRIMARY,
    backgroundColor: theme.colors.WHITE,
    position: "absolute",
    top: 8,
    left: 8,
    overflow: "hidden",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  storiesText: {
    position: "absolute",
    bottom: 8,
    left: 8,
    color: theme.colors.WHITE,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...theme.typography.bodySemiBold,
  },
  storiesText2: {
    bottom: 28,
  },
  redCirle: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.RED_100,
    borderRadius: 100,
    marginRight: 4,
  },
});
