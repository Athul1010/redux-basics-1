import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Home';
import { Provider } from 'react-redux';
import store from './Store/Store';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
