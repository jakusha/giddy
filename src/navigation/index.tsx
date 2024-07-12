import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import React from "react";
import AuthNavigation from "./auth";
import DashboardNavigation from "./dashboard";

const MainNavigator = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const isSignedIn = false;

  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        {!isSignedIn ? (
          <MainNavigator.Screen name="Auth" component={AuthNavigation} />
        ) : (
          <MainNavigator.Screen name="DashBoard" component={DashboardNavigation} />
        )}
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
