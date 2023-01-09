import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="알리기"
        placeholderTextColor="#333"
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    minHeight: 30,
    maxHeight: 100,
    backgroundColor: 'black',
    borderRadius: 30,
    paddingHorizontal: 10,
    color: '#fff',
  },
});

export default ChatInput;
