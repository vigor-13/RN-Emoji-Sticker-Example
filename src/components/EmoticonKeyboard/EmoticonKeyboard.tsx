import React from 'react';
import ReactNative from 'react-native';
import {decode, encode} from 'html-entities';

const EmoticonKeyboard = () => {
  return (
    <ReactNative.View style={styles.container}>
      <ReactNative.Text style={styles.textArea}>
        🙂 😀 😃 😄 😁 😅 😆 🤣 😂 🙃 😉 😊 😇 😎 🤓 🧐 🥳
      </ReactNative.Text>
      <ReactNative.Text>
        🙂 😀 😃 😄 😁 😅 😆 🤣 😂 🙃 😉 😊 😇 😎 🤓 🧐 🥳
      </ReactNative.Text>
    </ReactNative.View>
  );
};

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textArea: {
    fontFamily: 'NotoColorEmoji',
    fontSize: 20,
    color: '#fff',
  },
});

export default EmoticonKeyboard;
