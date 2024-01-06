import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navigator from './components/Navigator';
// import Navigation from './components/Navigation';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
      <Router>
        <Navigator />
        <Routes>
          <Route path="/"  element={<Dashboard />} />
          <Route path="/cart"  element={<Cart />} />
          <Route path="*"  element={<h1>Page not found</h1>} />

        </Routes>
      
      </Router>
      </Provider>
      
      
    </div>
  );
}

export default App;
