import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
// import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
// import { BUY_ICECREAM } from './redux/iceCreams/iceCreamTypes';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <CakeContainer/>
    <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
