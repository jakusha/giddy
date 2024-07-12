import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Screen } from "src/shared/Screen";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "src/types";
import theme from "@themes/index";
import { hp, wp } from "@utils/responsive-design";

type RegisterScreenProps = StackScreenProps<AuthStackParamList, "Register">;

const Register = ({}: RegisterScreenProps) => {
  return (
    <Screen backgroundColor={theme.colors.OFF_WHITE_100}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>
          Gi<Text style={styles.headerTxtSub}>ddy</Text>
        </Text>
        <Image source={theme.images.appLogo} style={styles.logoImg} />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description1}>The New Network Bestowed</Text>
        <Text style={styles.description2}>Join Gi<Text style={styles.headerTxtSub}>ddy</Text> today</Text>
      </View>
    </Screen>
  );
};

export default Register;

const styles = StyleSheet.create({
  headerTxt: {
    color: theme.colors.DEEP_BLUE_200,
    ...theme.typography.h1,
    fontWeight: "700",
  },
  headerTxtSub: {
    color: theme.colors.PRIMARY,
  },
  logoImg: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 100,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(34),
  },
  descriptionContainer: {
    marginTop: hp(40),
    gap: 8
  },
  description1: {
    color: theme.colors.GREY_100,
   fontSize: wp(35),
    fontWeight: "600",
    letterSpacing: 1.2,
    lineHeight: 35,
    textAlign: 'center'
  },
  description2: {
    color: theme.colors.DEEP_BLUE_300,
    ...theme.typography.h3,
    fontWeight: "700",
    letterSpacing: 1.1,
    textAlign: 'center' 
  }
});
