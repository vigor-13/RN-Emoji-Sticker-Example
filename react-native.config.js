const path = require('path');

module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
    'react-native-ui-lib': {
      root: path.join(__dirname, './node_modules/react-native-ui-lib/lib'),
      platforms: {
        ios: {
          podspecPath: path.join(
            __dirname,
            './node_modules/react-native-ui-lib/lib/ReactNativeUiLib.podspec',
          ),
        },
        android: {
          sourceDir: path.join(
            __dirname,
            './node_modules/react-native-ui-lib/lib/android',
          ),
          packageImportPath:
            'import com.wix.reactnativeuilib.highlighterview.HighlighterViewPackage;\nimport com.wix.reactnativeuilib.keyboardinput.KeyboardInputPackage;\nimport com.wix.reactnativeuilib.textinput.TextInputDelKeyHandlerPackage;\nimport com.wix.reactnativeuilib.wheelpicker.WheelPickerPackage;',
          packageInstance:
            'new HighlighterViewPackage(),\n      new WheelPickerPackage(),\n      new TextInputDelKeyHandlerPackage(),\n      new KeyboardInputPackage(getApplication())',
        },
      },
    },
  },
};
