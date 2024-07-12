import React from "react";
import {  Text, TextProps } from "react-native";
import theme from "@themes/index";

interface AppTextProps extends TextProps {
    variant: 'regular' | 'h1' | 'h2' | 'h3' | 'body';
    color: string;
}

const AppText = (props: AppTextProps)=> {
    return <Text style={{...theme.typography[variant], color, ...props}}></Text>
}

export default AppText;