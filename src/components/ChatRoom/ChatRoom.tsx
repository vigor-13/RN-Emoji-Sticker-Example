import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import DismissKeyboardView from '../DismissKeyboardView';
import ChatList from '../ChatList';
import ChatInput from '../ChatInput';
import {} from 'react-native-ui-lib';

const ChatRoom = () => {
  return (
    <DismissKeyboardView>
      <ImageBackground
        source={require('../../assets/images/chatroom-background.jpg')}
        style={styles.container}>
        <View style={styles.topArea}></View>
        <ChatList />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.bottomArea}>
            <ChatInput />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </DismissKeyboardView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topArea: {},
  bottomArea: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingBottom: 30,
  },
});

export default ChatRoom;
