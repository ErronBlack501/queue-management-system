import { TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import { TextInput, Text, Button } from "react-native-paper";
import { router } from "expo-router";
import * as yup from "yup";
import { s, vs, ms } from "react-native-size-matters";
const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const LoginForm = () => {
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
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
                keyboardType="email-address"
                inputMode="email"
                label="Email"
                placeholder="Enter your email address"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />

              <TouchableOpacity onPress={() => router.push("/reset")}>
                <Text
                  variant="bodySmall"
                  style={{
                    textAlign: "right",
                    color: "blue",
                    paddingTop: ms(4),
                  }}
                >
                  Forgot password ?
                </Text>
              </TouchableOpacity>

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
              <Text variant="bodySmall" style={{ fontSize: ms(10) }}>
                Don't have an account yet ?
              </Text>
              <Button
                mode="text"
                labelStyle={{ fontSize: ms(10) }}
                onPress={() => router.push("/register")}
              >
                Register
              </Button>
            </View>
            <Button
              mode="contained"
              labelStyle={{ fontSize: ms(10) }}
              onPress={props.handleSubmit}
            >
              Log in
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
