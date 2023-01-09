import React from 'react';
import ReactNative from 'react-native';

const EmoticonKeyboard = () => {
  return <ReactNative.View style={styles.container}></ReactNative.View>;
};

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default EmoticonKeyboard;
