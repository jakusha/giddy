import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import theme from "@themes/index";
import { SVGIcon } from "@shared/SVGIcon";

interface ProfileItemProps {
  toggleProfile: (id: number) => void;
  selected: boolean;
  item: { name: string; id: number };
}

const ProfileItem = ({ toggleProfile, selected, item }: ProfileItemProps) => {
  return (
    <Pressable
      onPress={() => toggleProfile(item.id)}
      style={{
        position: "relative",
        borderWidth: 2,
        flex: 1,
        height: 80,
        margin: 4,
        borderRadius: 8,
        borderColor: theme.colors.LIGHT_BLUE_200,
        justifyContent: "flex-end",
        padding: 8,
        backgroundColor: selected === true ? theme.colors.RED_100 : "white",
      }}
    >
      <Text
        style={{
          color: selected === true ? theme.colors.WHITE : theme.colors.BLACK,
        }}
      >
        {item.name}
      </Text>
      {selected && (
        <View style={styles.checkMark}>
          <SVGIcon name="checkMark" color={theme.colors.RED_100} />
        </View>
      )}
    </Pressable>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
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
