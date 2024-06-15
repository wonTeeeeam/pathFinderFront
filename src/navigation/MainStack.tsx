import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from '../navigation/HomeStack';
import RankingScreen from '../screens/ranking/Ranking';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function MainStack(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          // component={HomeRoute} -> MainStack이 여기 들어가서 그 안에 홈스크린과 게임스크린을 넣어야 함.
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Rank"
          component={RankingScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="crown" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainStack;
