
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import GestaoUsuario from './components/pages/GestaoUsuario';
import ImportarCSV from './components/pages/ImportarCSV';
import CadastroAula from './components/pages/CadastroAula';
import GestaoAula from './components/pages/GestaoAula';
import EditAula from './components/pages/EditAula';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/gestao_usuario' element={<GestaoUsuario/>} />
        <Route path='/importar_csv' element={<ImportarCSV/>} />
        <Route path='/cadastro_aula' element={<CadastroAula/>} />
        <Route path='/gestao_aula' element={<GestaoAula/>} />
        <Route path='/gestao_aula/:tipo' element={<GestaoAula/>} />
        <Route path='/edit_aula/:id' element={<EditAula/>} />
      </Routes>
    </Router>

  );
}

export default App;
