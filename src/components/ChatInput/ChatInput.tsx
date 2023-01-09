import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const ChatInput = () => {
  const [isCustomKeyboard, setIsCustomKeyboard] = useState(false);

  const onPressToggleKeyboard = () => {
    setIsCustomKeyboard(!isCustomKeyboard);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="알리기"
        placeholderTextColor="#333"
        multiline
      />
      <TouchableOpacity style={styles.icon} onPress={onPressToggleKeyboard}>
        <MaterialIcon
          name={isCustomKeyboard ? 'keyboard' : 'insert-emoticon'}
          size={24}
          color="#333"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'relative',
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
