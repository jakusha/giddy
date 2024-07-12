import { NavigatorScreenParams } from "@react-navigation/native"

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    DashBoard: NavigatorScreenParams<DashBoardStackParamList>;
}

export type AuthStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    Signup: undefined;
    Register: undefined;
}

export type DashBoardStackParamList = {
    BottomTab: BottomTabStackParamList;
}

export type BottomTabStackParamList = {
    Home: undefined;
    Search: undefined;
    NewPost: undefined;
    VideoFeed: undefined;
    Notifications: undefined;
}