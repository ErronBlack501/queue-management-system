import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

const AuthLayout = () => {
  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
};

export default AuthLayout;
