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
    },
  },
};
