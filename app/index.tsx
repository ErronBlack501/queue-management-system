import LoginForm from "@/components/LoginForm";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  useWindowDimensions,
} from "react-native";
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
              titleVariant={"titleLarge"}
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
  const { width, height } = useWindowDimensions();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      flex: 0,
      margin: 10,
      width: width * 0.8,
      height: height * 0.4,
      justifyContent: "center",
      backgroundColor: "white", // Couleur de fond opaque
      borderWidth: 1,
      borderColor: "white",
    },
  });
}
