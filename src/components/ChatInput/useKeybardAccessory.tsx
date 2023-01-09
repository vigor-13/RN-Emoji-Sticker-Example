import React from 'react';
import ReactNative from 'react-native';
import * as UILib from 'react-native-ui-lib';
import EmoticonKeyboard from '../EmoticonKeyboard';

type KeyboardComponent = {
  component?: string;
  initialProps?: any;
};

const useKeyboardAccessory = () => {
  const inputRef = React.useRef<ReactNative.TextInput>(null);
  const [keyboardComponent, setKeyboardComponent] =
    React.useState<KeyboardComponent>({
      component: undefined,
      initialProps: undefined,
    });

  const changeKeyboardView = (componentKey: string) => {
    setKeyboardComponent({
      component: componentKey,
    });
  };

  const resetKeyboardView = () => {
    setKeyboardComponent({
      component: undefined,
      initialProps: undefined,
    });
  };

  const onPressToggleKeyboardView = () => {
    if (inputRef && inputRef.current) {
      // inputRef.current.focus();
    }

    if (keyboardComponent.component === 'emoticon.keyboard') {
      resetKeyboardView();
    } else {
      changeKeyboardView('emoticon.keyboard');
    }
  };

  React.useEffect(() => {
    const keyboardDidShow = ReactNative.Keyboard.addListener(
      'keyboardDidShow',
      () => {},
    );

    const keyboardDidHide = ReactNative.Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // if (!customKeyboardOpenState) setKeyboardOpenState(false);
        resetKeyboardView();
      },
    );

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  return {
    inputRef,
    keyboardComponent,
    onPressToggleKeyboardView,
  };
};

UILib.Keyboard.KeyboardRegistry.registerKeyboard(
  'emoticon.keyboard',
  () => EmoticonKeyboard,
);

export default useKeyboardAccessory;
