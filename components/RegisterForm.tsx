import { View } from "react-native";
import { Formik } from "formik";
import { TextInput, Text, Button } from "react-native-paper";
import { router } from "expo-router";
import * as yup from "yup";

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
});

const RegisterForm = () => {
  return (
    <View>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props) => (
          <>
            <View>
              <TextInput
                mode="outlined"
                label="First name"
                placeholder="Enter your first name"
                onChangeText={props.handleChange("firstname")}
                value={props.values.firstname}
              />
              <TextInput
                mode="outlined"
                label="Last name"
                placeholder="Enter your last name"
                onChangeText={props.handleChange("lastname")}
                value={props.values.lastname}
              />
              <TextInput
                mode="outlined"
                keyboardType="email-address"
                inputMode="email"
                label="Email"
                placeholder="Enter your email address"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <TextInput
                mode="outlined"
                placeholder="Enter your password"
                label="Password"
                secureTextEntry
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text variant="bodySmall">Already have an account ?</Text>
              <Button mode="text" onPress={() => router.back()}>
                Log in
              </Button>
            </View>
            <Button mode="contained" onPress={props.handleSubmit}>
              Sign up
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

export default RegisterForm;
