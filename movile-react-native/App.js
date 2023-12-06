import { PaperProvider, MD3LightTheme as Theme } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Profile from "./src/Profile";

const theme = {
  ...Theme,
  colors: {
    ...Theme.colors,
    primary: "#fcaf43",
    secondary: "#fcaf43",
  },
};

export default function Index() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Profile />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
