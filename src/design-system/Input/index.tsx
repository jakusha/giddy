import React from "react";
import { Controller } from "react-hook-form";
import {
  View,
  TextInput,
  TextInputProps,
  Text,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { BaseInput } from "./types";
import theme from "@themes/index";
import { hp } from "@utils/responsive-design";

interface InputProps extends TextInputProps, BaseInput {
  inputBodycontainer?: ViewStyle;
  textInputStyle?: ViewStyle;
}

const Input = ({
  control,
  label,
  errorText,
  placeholder,
  name = "",
  inputBodycontainer,
  textInputStyle,
}: InputProps) => {
  return (
    <View>
      <View style={[styles.inputBodycontainer, inputBodycontainer]}>
        {label && <Text style={[styles.label]}>{label}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={[styles.textInput, textInputStyle]}
              />
          )}
          name={name}
        />
      </View>
      {errorText && <Text style={styles.errorTxt}>{errorText}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBodycontainer: {
    borderWidth: 1,
    borderColor: theme.colors.GREY_300,
    position: "relative",
    borderRadius: 8,
    padding: 8,
  },
  textInput: {
    padding: 4,
    color: theme.colors.GREY_300,
  },
  label: {
    position: "absolute",
    top: -8,
    left: 16,
    backgroundColor: theme.colors.WHITE,
  },
  errorTxt: {
    color: theme.colors.RED_100,
    fontSize: hp(12),
  },
});
