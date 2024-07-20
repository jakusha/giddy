import { SVGIcon } from "@shared/SVGIcon";
import theme from "@themes/index";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const NotificationItem = ({ item }: any) => {
  return (
    <View style={styles.notiContainer}>
      <View style={{ position: "relative" }}>
        <Image source={item.notiImage} style={styles.notiImage} />
        <View style={styles.iconContainer}>
          <SVGIcon name={item.icontype} />
        </View>
      </View>
      <View>
        <Text style={styles.notiTxt}>{item.text}</Text>
        <Text style={styles.timeTxt}>{item.time}</Text>
        <Text></Text>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  notiContainer: {
    flexDirection: "row",
    gap: 16,
    borderWidth: 1,
    borderColor: theme.colors.GREY_600,
    padding: 16
  },
  notiImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: "cover",
  },
  notiTxt: {
    ...theme.typography.bodySemiBold,
  },
  timeTxt: {
    color: theme.colors.LIGHT_BLUE_300,
  },
  iconContainer: {
    backgroundColor: theme.colors.GREY_500,
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -10,
    right: -10,
  },
});
