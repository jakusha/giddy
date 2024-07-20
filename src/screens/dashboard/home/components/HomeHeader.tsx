import React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import theme from "@themes/index";
import { SVGIcon } from "@shared/SVGIcon";

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Pressable>
        <Image source={theme.images.avatar} style={styles.headerImage} />
      </Pressable>
      <Text style={styles.description2}>
        Gi<Text style={styles.headerTxtSub}>ddy</Text>
      </Text>

      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        <Image source={theme.images.crypto} style={styles.headerCrypto} />
        <Pressable>
          <SVGIcon name="mail" />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8
  },
  headerImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 100,
  },
  description2: {
    color: theme.colors.DEEP_BLUE_300,
    ...theme.typography.h3,
    fontWeight: "700",
    letterSpacing: 1.1,
    textAlign: "center",
  },
  headerTxtSub: {
    color: theme.colors.PRIMARY,
  },
  headerCrypto: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    borderRadius: 100,
  },
});
