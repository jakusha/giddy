import { persolnalize } from "@data/index";
import theme from "@themes/index";
import { hp } from "@utils/responsive-design";
import React, { useContext, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "@design-system/Button";
import { Screen } from "src/shared/Screen";

import ProfileItem from "./components/ProfileItem";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "src/types";
import { LoginInfo } from "@navigation/index";

type ScreenProps = StackScreenProps<AuthStackParamList, "Onboarding">;

const Onboarding = ({ navigation }: ScreenProps) => {
  const [selectedInterest, setSelectedInterest] = useState<any>({});
  const { setIsSignedIn } = useContext<any>(LoginInfo);

  function toggleProfile(id: number) {
    if (selectedInterest[id]) {
      const interests = { ...selectedInterest };
      interests[id] = false;
      setSelectedInterest(interests);
    } else {
      const interests = { ...selectedInterest };
      interests[id] = true;
      setSelectedInterest(interests);
    }
  }

  function handleSignIn() {
    setIsSignedIn(true);
  }

  return (
    <Screen>
      <View style={{ marginTop: hp(30), flex: 1 }}>
        <Image source={theme.images.appLogo} style={styles.logo} />

        <Text style={styles.header1}>What do you want to see with Giddy?</Text>
        <Text style={styles.header2}>
          Interests are used to personalize and enhance your experience and will
          be visible on your profile.
        </Text>

        <FlatList
          style={{ flex: 1, marginVertical: 32 }}
          keyExtractor={(item) => item.name}
          data={persolnalize}
          numColumns={2}
          renderItem={({ item }) => (
            <ProfileItem
              selected={selectedInterest[item.id] === true}
              item={item}
              toggleProfile={toggleProfile}
            />
          )}
        />
        <View style={{ gap: 8, marginBottom: hp(24) }}>
          <Button
            title="Next"
            isBottom={false}
            disabled={false}
            backgroundColor={theme.colors.RED_100}
            textColor={theme.colors.WHITE}
            onPress={handleSignIn}
          />
          <Button
            title="Skip"
            isBottom={false}
            disabled={false}
            backgroundColor={theme.colors.WHITE}
            textColor={theme.colors.BLACK}
            buttonContainerStyle={{ borderWidth: 1 }}
          />
        </View>
      </View>
    </Screen>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 32,
    alignSelf: "center",
  },
  header1: {
    textAlign: "center",
    marginTop: 12,
    ...theme.typography.h3,
  },
  header2: {
    ...theme.typography.body,
    textAlign: "center",
    color: theme.colors.GREY_200,
    marginTop: 4,
  },
  checkMark: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.WHITE,
    borderRadius: 100,
  },
});
