import LoginForm from "@/components/LoginForm";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Card } from "react-native-paper";

export default function Login() {
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("@/assets/app-images/loginImage.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <StatusBar hidden />
        <View style={styles.container}>
          <Card mode="elevated" style={styles.card}>
            <Card.Title
              title="Login"
              style={{ alignItems: "flex-start" }}
              titleVariant={"displaySmall"}
              titleStyle={{ textAlign: "center" }}
            />
            <Card.Content>
              <LoginForm />
            </Card.Content>
          </Card>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

function useStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      margin: moderateScale(10),
      width: scale(200),
      height: verticalScale(200),
      justifyContent: "center",
      backgroundColor: "white", // Couleur de fond opaque
      borderWidth: 1,
      borderColor: "white",
    },
  });
}
