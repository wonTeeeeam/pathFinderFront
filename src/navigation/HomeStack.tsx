import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/main/main';
import GameScreen from '../screens/game/Game';

const Stack = createNativeStackNavigator();

function HomeStack(): React.JSX.Element {
  const [tabBarVisible, setTabBarVisible] = useState(true);
  return (
    <>
      {
      tabBarVisible ?
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      ) : (
        <></>
      )}
    </>
  );
}
export default HomeStack;
