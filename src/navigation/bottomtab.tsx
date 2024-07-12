import React from "react";
import Home from "@screens/dashboard/home";
import { BottomTabStackParamList } from "../types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Text } from "react-native";
import { SVGIcon } from "src/shared/SVGIcon";
import theme from "src/themes";
import { hp, wp } from "@utils/responsive-design";
import Search from "@screens/dashboard/search";
import NewPost from "@screens/dashboard/newpost";
import VideoFeed from "@screens/dashboard/videofeed";
import Notifications from "@screens/dashboard/notifications";
import { isIos } from "@utils/platform";

const BottomTabNavigator = createBottomTabNavigator<BottomTabStackParamList>();

type TabIconProps = {
  name: string;
  focused: boolean;
  indexIcon?: boolean;
};

const TabBarIcon = ({ name, focused, indexIcon=false }: TabIconProps) => {
  const tabName = name.toLowerCase();
  return (
    <View style={indexIcon ? styles.indexIcon: styles.tabIcon}>
      <SVGIcon
        name={focused ? `active-${tabName}` : tabName}
        color={theme.colors.PRIMARY}
      />
    </View>
  );
};

const BottomTabNavigation = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.DEEP_BLUE_100,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: theme.colors.DEEP_BLUE_100,
          height: hp(60),
          width: wp(330),
          bottom: hp(20),
          alignSelf: "center",
          borderRadius: hp(100),
          marginLeft: wp(21),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        },
        tabBarLabelStyle: {
          fontSize: hp(10),
          fontFamily: theme.font.PROXIMANOVAREGULAR,
        },
      }}
    >
      <BottomTabNavigator.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="Home" />,
        }}
      />
      <BottomTabNavigator.Screen
        name={"Search"}
        component={Search}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="Search" />,
        }}
      />
      <BottomTabNavigator.Screen
        name={"NewPost"}
        component={NewPost}
        options={{
          tabBarIcon: (props) => (
              <TabBarIcon {...props} name="newpost" indexIcon/>
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name={"VideoFeed"}
        component={VideoFeed}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="videofeed" />,
        }}
      />
      <BottomTabNavigator.Screen
        name={"Notifications"}
        component={Notifications}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="notifications" />,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 8,
    top: isIos ? 16: 0,
  },
  indexIcon: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 8,
    top: isIos ? 16: 0,
    backgroundColor: theme.colors.PRIMARY,
    paddingHorizontal: 16,
    borderRadius: 16,
  }
});
