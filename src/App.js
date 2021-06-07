import React from 'react';
import PhoneContainer from './components/PhoneContainer';
import { Provider } from 'react-redux';
import TvContainer from './components/TvContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Notre SHOP</h1>
        <div className="section-one">
          <PhoneContainer />
          <TvContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
