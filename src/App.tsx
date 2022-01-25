import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';

//navigator
import {StackContainer} from './navigator';

//store
import {store} from './store';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);
  return (
    <Provider store={store}>
      <StackContainer />
    </Provider>
  );
};

export default App;
