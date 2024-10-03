import { useRouter } from "expo-router";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
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
        <View style={styles.container}>
          <Card mode="elevated" style={styles.card}>
            <Card.Title
              title="Register"
              titleVariant={"titleLarge"}
              titleStyle={{ textAlign: "center" }}
            />
            <Card.Content>
              <TextInput mode="outlined" label="Username" />
              <TextInput mode="outlined" label="Password" secureTextEntry />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text variant="bodySmall">already have an account ?</Text>
                <Button mode="text" onPress={() => router.back()}>Log in</Button>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => console.log("Pressed")}>
                Sign up
              </Button>
            </Card.Actions>
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
