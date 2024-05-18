import React from 'react';
import {useColorScheme} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import {
  configureFonts,
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider,
} from 'react-native-paper';
import useUserStore from './src/store/user';
import customThemeLight from './src/assets/light.json';
import customThemeDark from './src/assets/dark.json';
import {Platform} from 'react-native';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme !== 'dark'
      ? {
          ...MD3LightTheme,
          colors: customThemeLight.colors,
          fonts: configureFonts({
            config: {
              fontFamily: Platform.select({
                web: '"Inter", sans-serif',
                ios: 'System',
                default: '"Inter", sans-serif',
              }),
              fontWeight: '200',
              letterSpacing: 0.5,
              lineHeight: 20,
              fontSize: 10,
            },
          }),
        }
      : {
          ...MD3DarkTheme,
          colors: customThemeDark.colors,
          fonts: configureFonts({
            config: {
              config: {
                fontFamily: Platform.select({
                  web: '"Inter", sans-serif',
                  ios: 'System',
                  default: '"Inter", sans-serif',
                }),
                fontWeight: '200',
                letterSpacing: 0.5,
                lineHeight: 20,
                fontSize: 10,
              },
            },
          }),
        };
  const {name, age, getUserInfo} = useUserStore(state => state);

  return (
    <PaperProvider theme={theme}>
      {name === null ? <RootNavigation /> : <RootNavigation />}
    </PaperProvider>
  );
}

export default App;
