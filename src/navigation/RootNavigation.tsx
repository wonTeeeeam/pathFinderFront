import * as React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';
// import RankingStack from '../navigation/RankingStack';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={MainStack} />
        {/* <Stack.Screen name="Ranking" component={RankingStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
