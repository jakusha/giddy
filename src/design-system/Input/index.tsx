import React from "react";
import { Controller } from "react-hook-form";
import { View, TextInput, TextInputProps, Text } from "react-native";
import { BaseInput } from "./types";

interface InputProps extends TextInputProps, BaseInput {}
const Input = ({ control, label, errorText }: InputProps) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errorText && <Text>{errorText}</Text>}
    </View>
  );
};

export default Input;
