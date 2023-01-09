import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {View} from 'react-native-ui-lib';

interface DismissKeyboardViewProps {
  children: React.ReactNode;
}

const DismissKeyboardView: React.FC<DismissKeyboardViewProps> = props => {
  const {children} = props;
  const onPress = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={onPress} accessible={false}>
      <View style={{flex: 1}}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardView;
