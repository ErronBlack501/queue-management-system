import RegisterForm from "@/components/RegisterForm";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { Card } from "react-native-paper";
import { ms, s, vs } from "react-native-size-matters";

export default function Register() {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("@/assets/app-images/registerImage.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <StatusBar hidden />
        <View style={styles.container}>
          <Card mode="elevated" style={styles.card}>
            <Card.Title
              title="Register"
              titleVariant={"displaySmall"}
              titleStyle={{ textAlign: "center" }}
            />
            <Card.Content>
              <RegisterForm />
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
      margin: ms(10),
      width: s(300),
      height: vs(250),
      justifyContent: "center",
      backgroundColor: "white", // Couleur de fond opaque
      borderWidth: 1,
      borderColor: "white",
    },
  });
}
