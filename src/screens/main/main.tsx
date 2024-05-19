import React, {useState} from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function MainScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Lorem Ipsum" />
        <Card.Cover
          source={{uri: 'https://picsum.photos/700'}}
          style={{
            marginLeft: 7,
            marginRight: 7,
          }}
        />
        <Card.Content>
          <Text variant="bodyMedium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button compact={true}>Cancel</Button>
          <Button compact={true} mode="contained-tonal">
            Ok
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default MainScreen;
