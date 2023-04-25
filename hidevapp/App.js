import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './config/theme';
import Navigation from './Navigation';

export default function App() {
  return (
    <PaperProvider theme={theme}>
        <StatusBar
          animated
          translucent
          backgroundColor="transparent"
          style="auto" />
        <Navigation />
    </PaperProvider>

  );
}
