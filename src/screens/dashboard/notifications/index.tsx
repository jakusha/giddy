import React from "react";
import { Screen } from "src/shared/Screen";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { NotificationList } from "@data/index";
import NotificationItem from "./components/NotificationItem";
import theme from "@themes/index";

const Notifications = () => {
  return (
    <Screen>
      <Text style={[styles.header]}>Notifications</Text>
      <View
        style={{
          marginHorizontal: -16,
        }}
      >
        <FlatList
          data={NotificationList}
          renderItem={({ item }) => <NotificationItem item={item} />}
        />
      </View>
    </Screen>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  header: {
    ...theme.typography.h3,
    textAlign: "center",
    marginVertical: 16,
  },
});
