import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashBoardStackParamList } from "../types/navigation";
import BottomTabNavigation from "./bottomtab";

const DashboardNavigator = createStackNavigator<DashBoardStackParamList>();

const DashboardNavigation = () => {
  return (
    <DashboardNavigator.Navigator
      initialRouteName="BottomTab"
      screenOptions={{ headerShown: false }}
    >
        <DashboardNavigator.Screen name="BottomTab" component={BottomTabNavigation}/>
    </DashboardNavigator.Navigator>
  );
};

export default DashboardNavigation;
