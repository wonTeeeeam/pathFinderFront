import React, {useState} from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {View} from 'react-native';

function MainScreen() {
  return (
    <View>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
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
