import LoginForm from "@/components/LoginForm";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

export default function Login() {
  const router = useRouter();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    height: 300,
    margin: 10,
    backgroundColor: "white", // Couleur de fond opaque
    borderWidth: 1,
    borderColor: "white",
  },
});
