import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Hello World from Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
