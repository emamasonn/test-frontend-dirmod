import React from 'react';
import ContentCardCoin from './components/ContentCardCoin' 
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ContentCardCoin />
      </div>
    </Provider>
  );
}

export default App;
