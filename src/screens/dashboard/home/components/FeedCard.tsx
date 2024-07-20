import Input from "@design-system/Input";
import { SVGIcon } from "@shared/SVGIcon";
import theme from "@themes/index";
import { hp } from "@utils/responsive-design";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";

interface FormData {
  comment: string;
}

const FeedCard = ({ item }: any) => {
  const { control } = useForm<FormData>({
    defaultValues: {
      comment: "",
    },
    mode: "all",
  });
  return (
    <View style={{ marginBottom: 24 }}>
      <View style={styles.feedCardHeader}>
        <Image source={item.opAvatar} style={styles.cardAvatar} />

        <View style={{ marginLeft: 16 }}>
          <Text style={[styles.txtUsername]}>{item.opUsername}</Text>
          <Text style={[styles.txtHandle]}>{item.opHandle}</Text>
        </View>

        <Pressable style={{ marginLeft: "auto" }}>
          <SVGIcon name="moreOption" />
        </Pressable>
      </View>

      <View style={styles.feedImageCont}>
        <Image source={item.opContentImage} style={styles.feedImage} />
      </View>

      <View style={{ paddingHorizontal: 12 }}>
        <View style={styles.feedCardActions}>
          <View style={{ flexDirection: "row", gap: 16, marginTop: 16 }}>
            <Pressable style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <SVGIcon name="heart" />
              <Text style={{color: theme.colors.GREY_400}}>100</Text>
            </Pressable>

            <Pressable style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <SVGIcon name="comment" />
              <Text style={{color: theme.colors.GREY_400}}>100</Text>
            </Pressable>
          </View>

          <View></View>

          <View>
            <SVGIcon name="copyOption" />
          </View>
        </View>

        <View style={{ marginTop: 12 }}>
          <Text>{item.txtContent}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 8 }}>
          <Image
            source={item.userAvatar}
            style={[styles.cardAvatar, { marginRight: 4, padding: 8 }]}
          />
          <Input
            placeholder="add a comment"
            control={control}
            inputBodycontainer={{ padding: 0, paddingTop: 0, borderWidth: 0 }}
            textInputStyle={{ padding: 8 }}
          />
        </View>

        <Text style={{ marginTop: 2, color: theme.colors.GREY_400 }}>
          {item.opPostTime}
        </Text>
      </View>
    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  feedCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  cardAvatar: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    borderRadius: 100,
  },
  feedImageCont: {
    height: hp(400),
  },
  feedImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  feedCardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtUsername: {
    ...theme.typography.bodySemiBold
  },
  txtHandle: {
    color: theme.colors.GREY_400
  }
});
