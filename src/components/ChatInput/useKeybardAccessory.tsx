import React from 'react';
import ReactNative, {TextInputSelectionChangeEventData} from 'react-native';
import {NativeSyntheticEvent} from 'react-native';
import * as UILib from 'react-native-ui-lib';
import EmoticonKeyboard from '../EmoticonKeyboard';

type KeyboardComponent = {
  component?: string;
  initialProps?: any;
};

const useKeyboardAccessory = () => {
  // Input State
  const inputRef = React.useRef<ReactNative.TextInput>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [inputSelection, setInputSelection] = React.useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end: 0,
  });

  // Keyboard State
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState(false);
  const [keyboardComponent, setKeyboardComponent] =
    React.useState<KeyboardComponent>({
      component: undefined,
      initialProps: undefined,
    });

  // Functions
  const changeKeyboardView = (componentKey: string) => {
    setKeyboardComponent({
      component: componentKey,
      initialProps: undefined,
    });
  };

  const resetKeyboardView = () => {
    setKeyboardComponent({
      component: undefined,
      initialProps: undefined,
    });
  };

  const onPressToggleKeyboardView = () => {
    if (keyboardComponent.component === 'emoticon.keyboard') {
      resetKeyboardView();
      if (inputRef && inputRef.current) inputRef.current.focus(); // For android
    } else {
      changeKeyboardView('emoticon.keyboard');
    }
  };

  const onChangeInputValue = (text: string) => {
    setInputValue(text);
  };

  const onChangeInputSelection = (
    event: NativeSyntheticEvent<TextInputSelectionChangeEventData>,
  ) => {
    setInputSelection(event.nativeEvent.selection);
  };

  React.useEffect(() => {
    const keyboardDidShow = ReactNative.Keyboard.addListener(
      'keyboardDidShow',
      () => {},
    );

    const keyboardDidHide = ReactNative.Keyboard.addListener(
      'keyboardDidHide',
      () => {
        if (!keyboardComponent.component) {
          resetKeyboardView();
          setIsKeyboardOpen(false);
        }
      },
    );

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, [keyboardComponent]);

  return {
    inputRef,
    inputSelection,
    keyboardComponent,
    onPressToggleKeyboardView,
    inputValue,
    onChangeInputValue,
    onChangeInputSelection,
    resetKeyboardView,
  };
};

UILib.Keyboard.KeyboardRegistry.registerKeyboard(
  'emoticon.keyboard',
  () => EmoticonKeyboard,
);

export default useKeyboardAccessory;
