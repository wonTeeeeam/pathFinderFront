import React from 'react';
import {Platform, useColorScheme} from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';

import customThemeDark from './src/assets/dark.json';
import customThemeLight from './src/assets/light.json';
import LoginStack from './src/navigation/LoginStack';
import useUserStore from './src/store/user';
import MainStack from './src/navigation/MainStack';
import {
  Camera,
  CameraDevice,
  useCameraDevice,
} from 'react-native-vision-camera';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const userInfo = useUserStore(state => state.userInfo);

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

  return (
    <PaperProvider theme={theme}>
      {userInfo ? <MainStack /> : <LoginStack />}
    </PaperProvider>
  );
}

export default App;
