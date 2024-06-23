import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Permission(): React.JSX.Element {
  return <Text>해당 기능을 이용할 권한이 없습니다.</Text>;
}
