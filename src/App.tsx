import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

//navigator
import {StackContainer} from './navigator';

//store
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StackContainer />
    </Provider>
  );
};

export default App;
