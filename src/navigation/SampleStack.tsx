import * as React from 'react';
import {View, StyleSheet, Alert} from 'react-native';

// import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, BottomNavigation, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function SampleStack(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  const fn1 = () => {
    Alert.alert('ddddddddddd');
  };
  return (
    <View>
      <Text variant="headlineMedium">Home! 핫 리로드 테스트</Text>
      <Button mode="outlined" onPress={() => fn1}>
        hi
      </Button>
    </View>
  );
}
export default SampleStack;
