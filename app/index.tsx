import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Card, Text, TextInput, Title } from "react-native-paper";

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("@/assets/app-images/loginImage.jpg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.container}>
          <Card mode="elevated" style={styles.card}>
            <Card.Title
              title="Login"
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
                <Text variant="bodySmall">don't have an account yet ?</Text>
                <Button mode="text">Register</Button>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => console.log("Pressed")}>
                Log in
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
