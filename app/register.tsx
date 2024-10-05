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
import { Button, Card, Text, TextInput } from "react-native-paper";

export default function Register() {
  const router = useRouter();
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
              titleVariant={"titleLarge"}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    height: "auto",
    margin: 10,
    backgroundColor: "white", // Couleur de fond opaque
    borderWidth: 1,
    borderColor: "white",
  },
});
