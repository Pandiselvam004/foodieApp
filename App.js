import * as React from 'react';
import Navigation from './Navigation';
import 'react-native-gesture-handler';
import configureStore from './redux/store';
import { Provider as ReduxProvider } from 'react-redux'
const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Navigation />
    </ReduxProvider>
  );
}

export default App;
