import React, {useState, useEffect} from 'react';
import {DataTable} from 'react-native-paper';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function RankingScreen() {
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);

  const [items] = useState([
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: 'Gingerbread',
      calories: 305,
      fat: 3.7,
    },
    {
      name: 'Gingerbread',
    },
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <ScrollView>
      <Text
        variant="displayLarge"
        style={{
          marginLeft: 2,
          marginBottom: 3,
          marginTop: 5,
        }}>
        <Image
          source={require('../../assets/images/crown_icon.png')}
          style={{
            width: 15,
            height: 15,
            marginRight: 2,
          }}
        />
        랭킹 순위
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>순위</DataTable.Title>
          <DataTable.Title>아이디</DataTable.Title>
          <DataTable.Title numeric>점수</DataTable.Title>
        </DataTable.Header>

        {items.map((item, i) => (
          <DataTable.Row key={i}>
            <DataTable.Cell>
              <Text
                style={{
                  color:
                    i + 1 === 1
                      ? '#ffd700'
                      : i + 1 === 2
                      ? '#c0c0c0'
                      : i + 1 === 3
                      ? '#bf9000'
                      : null,
                }}>
                {i + 1}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
          </DataTable.Row>
        ))}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000000',
              margin: 'auto 0',
            }}>
            &#8942;
          </Text>
          <DataTable.Row>
            <DataTable.Cell>123</DataTable.Cell>
            <DataTable.Cell>반원재</DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
          </DataTable.Row>
        </View>
      </DataTable>
    </ScrollView>
  );
}

export default RankingScreen;
