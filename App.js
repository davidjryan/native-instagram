import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Constants } from 'expo';

import Feed from './screens/Feed';

const items = [
  { id: 0, author: 'Bob Ross'},
  { id: 1, author: 'Chuck Norris'},
]

export default class App extends Component {
  state = {
    commentsForItems: {},
    showModal: false,
    selectedItemId: null,
  };

  openCommentsScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id,
    });
  };

  closeCommentScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null,
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Feed style={styles.feed} />
      </View>
    )
  }
}

const platformVersion = Platform.OS === 'ios' 
                        ? parseInt(Platform.Version, 10) 
                        : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop:
    Platform.OS === 'android' || platformVersion < 11
      ? Constants.statusBarHeight
      : 0,
  },
});
