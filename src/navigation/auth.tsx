import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "../types/navigation";
import Register from "@screens/auth/register";
import Onboarding from "@screens/auth/onboarding";

const AuthNavigator = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthNavigator.Navigator
      initialRouteName="Register"
      screenOptions={{ headerShown: false }}
    >
      <AuthNavigator.Screen name="Register" component={Register} />
      <AuthNavigator.Screen name="Onboarding" component={Onboarding} />
    </AuthNavigator.Navigator>
  );
};

export default AuthNavigation;
