import { Platform, View } from "react-native";
import { Formik } from "formik";
import { TextInput, Text, Button } from "react-native-paper";
import { router } from "expo-router";
import * as yup from "yup";
import { ms } from "react-native-size-matters";

const RegisterSchema = yup.object({
  firstname: yup
    .string()
    .min(2, "First name must be at least 2 characters long")
    .required("First name is required"),
  lastname: yup
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Les mots de passe doivent correspondre")
    .required("Password confirmation is required"),
});

const RegisterForm = () => {
  return (
    <View>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log({
            ...values,
            device_name: Platform.OS + Platform.Version,
          });
        }}
      >
        {(props) => (
          <>
            <View>
              <TextInput
                mode="outlined"
                style={{ fontSize: ms(10) }}
                label="First name"
                placeholder="Enter your first name"
                onChangeText={props.handleChange("firstname")}
                value={props.values.firstname}
              />
              <TextInput
                mode="outlined"
                style={{ fontSize: ms(10) }}
                label="Last name"
                placeholder="Enter your last name"
                onChangeText={props.handleChange("lastname")}
                value={props.values.lastname}
              />
              <TextInput
                mode="outlined"
                style={{ fontSize: ms(10) }}
                keyboardType="email-address"
                inputMode="email"
                label="Email"
                placeholder="Enter your email address"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <TextInput
                mode="outlined"
                style={{ fontSize: ms(10) }}
                placeholder="Enter your password"
                label="Password"
                secureTextEntry
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <TextInput
                mode="outlined"
                style={{ fontSize: ms(10) }}
                placeholder="Confirm your password"
                label="Password confirmation"
                secureTextEntry
                onChangeText={props.handleChange("password_confirmation")}
                value={props.values.password_confirmation}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text variant="bodySmall" style={{ fontSize: ms(10) }}>
                Already have an account ?
              </Text>
              <Button
                mode="text"
                labelStyle={{ fontSize: ms(10) }}
                onPress={() => router.back()}
              >
                Log in
              </Button>
            </View>
            <Button
              mode="contained"
              labelStyle={{ fontSize: ms(10) }}
              onPress={props.handleSubmit}
            >
              Sign up
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

export default RegisterForm;
