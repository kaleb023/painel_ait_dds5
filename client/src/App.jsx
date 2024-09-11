
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './components/pages/Login';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </Router>

  );
}

export default App;
