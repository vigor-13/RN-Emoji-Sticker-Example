import React from 'react';
import {StyleSheet, ImageBackground, SafeAreaView, View} from 'react-native';
import DismissKeyboardView from '../DismissKeyboardView';
import ChatList from '../ChatList';
import ChatInput from '../ChatInput';

const ChatRoom = () => {
  return (
    <DismissKeyboardView>
      <ImageBackground
        source={require('../../assets/images/chatroom-background.jpg')}
        style={styles.container}>
        <ChatList />
        <View style={styles.inputContainer}>
          <ChatInput />
        </View>
      </ImageBackground>
    </DismissKeyboardView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 'auto',
  },
});

export default ChatRoom;
