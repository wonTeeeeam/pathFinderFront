import {useState} from 'react';
import {Text, Button} from 'react-native-paper';
import {View, Alert} from 'react-native';

function RankingScreen({navigation}) {
  const items = useState([]);
  const fn1 = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text variant="headlineMedium">네비게이션1</Text>
      <Button mode="outlined" onPress={() => fn1}>
        hi
      </Button>
    </View>
  );
}

export default RankingScreen;
