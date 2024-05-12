import * as React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SampleStack from '../navigation/SampleStack';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sample">
        <Stack.Screen name="Sample" component={SampleStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
