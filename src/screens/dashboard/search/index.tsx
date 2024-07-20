import Input from "@design-system/Input";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { Screen } from "src/shared/Screen";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  firstName: string;
  lastName: string;
}
const schema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
});
const Search = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: { firstName: "", lastName: "" },
    resolver: yupResolver(schema),
    mode: "all",
  });
  const { firstName, lastName } = watch();
  return (
    <Screen>
      <View style={{ gap: 16 }}>
        <Input
          control={control}
          label="First name"
          name="firstName"
          errorText={errors?.firstName?.message}
          placeholder="enter first name"
          value={firstName}
        />
        <Input
          control={control}
          name="lastName"
          errorText={errors?.lastName?.message}
          placeholder="enter last name"
          value={lastName}
        />
      </View>
    </Screen>
  );
};

export default Search;
