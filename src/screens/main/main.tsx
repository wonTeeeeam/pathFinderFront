import React, {useState} from 'react';
import {
  Card,
  Appbar,
  Divider,
  FAB,
  Text,
  Avatar,
  Title,
  Banner,
} from 'react-native-paper';
import {ScrollView, StyleSheet, SafeAreaView, Image} from 'react-native';
import {LineChartComponent} from '../../components/charts/LineChartComponent';
import {hs} from '../../utils/scale';
import padIcon from '../../assets/images/gamepad.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 15,
    elevation: 15,
  },
  divider: {
    marginHorizontal: 20,
    marginTop: -10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  animationContainer: {
    width: 30,
    height: 30,
  },
  title: {
    marginLeft: 20,
    marginTop: 2,
  },
  banner: {},
  header: {
    height: hs(40),
  },
});

function MainScreen({navigation}) {
  const handleStartGame = () => {
    navigation.navigate('Game');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Appbar.Header style={styles.header}>
          <Appbar.Content title="PathFinder" />
          <Appbar.Action icon="calendar" onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header> */}

        <Card style={styles.cardStyle} mode="elevated">
          <Card.Title title="일주일 치 이동거리" style={styles.title} />
          <Divider style={styles.divider} />
          <Card.Content>
            <LineChartComponent />
          </Card.Content>
        </Card>

        <Card style={styles.cardStyle} mode="elevated">
          <Card.Title title="이번 주 소비한 칼로리" style={styles.title} />
          <Divider style={styles.divider} />
          <Card.Content>
            <LineChartComponent />
          </Card.Content>
        </Card>

        <Card style={styles.cardStyle} mode="elevated">
          <Card.Title title="상위 몇 퍼센트?" style={styles.title} />
          <Divider style={styles.divider} />
          <Card.Content>
            <LineChartComponent />
          </Card.Content>
        </Card>
      </ScrollView>
      <FAB
        style={styles.fab}
        icon={padIcon}
        onPress={() => handleStartGame()}
      />
    </SafeAreaView>
  );
}

export default MainScreen;
