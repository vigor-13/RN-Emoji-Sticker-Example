import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import {Keyboard as UILibKeyboard} from 'react-native-ui-lib';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import useKeyboardAccessory from './useKeybardAccessory';

const ChatInput = () => {
  const {inputRef, keyboardComponent, onPressToggleKeyboardView} =
    useKeyboardAccessory();

  const _renderContent = () => {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.container}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="알리기"
            placeholderTextColor="#333"
            multiline
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={onPressToggleKeyboardView}>
            <MaterialIcon
              name={
                keyboardComponent.component === 'emoticon.keyboard'
                  ? 'keyboard'
                  : 'insert-emoticon'
              }
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <UILibKeyboard.KeyboardAccessoryView
      renderContent={_renderContent}
      kbComponent={keyboardComponent.component}
      requiresSameParentToManageScrollView
      kbInputRef={inputRef}
    />
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    minHeight: 80,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingBottom: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container: {
    width: '100%',
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
    paddingRight: 45,
  },
  icon: {
    position: 'absolute',
    right: 20,
    bottom: 13,
  },
});

export default ChatInput;
