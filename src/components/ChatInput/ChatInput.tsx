import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Keyboard as UILibKeyboard} from 'react-native-ui-lib';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import useKeyboardAccessory from './useKeybardAccessory';

const ChatInput = () => {
  const {
    inputRef,
    keyboardComponent,
    onPressToggleKeyboardView,
    inputValue,
    onChangeInputValue,
    onChangeInputSelection,
    resetKeyboardView,
    inputSelection,
  } = useKeyboardAccessory();

  const _renderContent = () => {
    return (
      <SafeAreaView style={styles.backgroundContainer}>
        <View style={styles.container}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="알리기"
            placeholderTextColor="#333"
            multiline
            value={inputValue}
            onChangeText={onChangeInputValue}
            onSelectionChange={onChangeInputSelection}
            onFocus={resetKeyboardView}
          />
          <View style={styles.iconContainer}>
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
      </SafeAreaView>
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
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: '#fff',
    flex: 1,
    minHeight: 30,
    maxHeight: 200,
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 0,
    fontFamily: 'NotoColorEmoji',
  },
  iconContainer: {
    width: 50,
    height: '100%',
    backgroundColor: 'black',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    bottom: 3,
  },
});

export default ChatInput;
