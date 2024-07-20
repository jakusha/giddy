import React, { Dispatch, SetStateAction, createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./auth";
import DashboardNavigation from "./dashboard";
import { RootStackParamList } from "../types/navigation";

export interface LoginTypes {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
}

export const LoginInfo = createContext<LoginTypes | null>(null)

const MainNavigator = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

  return (
    <LoginInfo.Provider value={{isSignedIn, setIsSignedIn}}>
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
    </LoginInfo.Provider>
  );
};

export default RootNavigation;
