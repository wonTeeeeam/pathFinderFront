import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, BottomNavigation} from 'react-native-paper';
import RankingScreen from '../screens/ranking/Ranking';
import MainScreen from '../screens/main/Main';

const Tab = createBottomTabNavigator();

function MainStack(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({navigation, state, descriptors, insets}) => (
          <BottomNavigation.Bar
            compact={true}
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({route, preventDefault}) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({route, focused, color}) => {
              const {options} = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({focused, color, size: 24});
              }

              return null;
            }}
            getLabelText={({route}) => {
              const {options} = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route?.title;

              return label;
            }}
          />
        )}>
        <Tab.Screen
          name="Home"
          component={MainScreen}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({color, size}) => {
              return <Icon name="home" size={20} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={RankingScreen}
          options={{
            tabBarLabel: '랭킹',
            tabBarIcon: ({color, size}) => {
              return <Icon name="crown" size={20} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainStack;
