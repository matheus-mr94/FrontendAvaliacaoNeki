import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import './App.css';
import { useState, useEffect } from 'react';
import Cadastro from './Paginas/Cadastro';
import CadastrarHabilidades from './Paginas/CadastrarHabilidades';
import Login from './Paginas/Login';
import Home from './Paginas/Home';
import Habilidades from './Paginas/Habilidades';
import Usuarios from './Paginas/Usuarios';
import UsuarioDetalhe from './Paginas/UsuarioDetalhe';
import HabilidadeUsuario from './Paginas/HabilidadeUsuario';
import Desrelacionar from './Paginas/Desrelacionar';

function App() {

  const [token, setToken] = useState('')
  const onLogin = (token) => {
    setToken(token)
  }

  const logout = () => {
    setToken('')
  }


  useEffect(() => {
    const tokenAntigo = localStorage.getItem('token')
    if (tokenAntigo) {
      setToken(tokenAntigo)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} aoLogout={logout} />
        <Switch>
          <Route exact path="/">
            <Login onLogin={onLogin} />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/cadastrar-habilidades">
            <CadastrarHabilidades />
          </Route>
          <Route exact path="/habilidades">
            <Habilidades />
          </Route>
          <Route exact path="/usuarios">
            <Usuarios />
          </Route>
          <Route exact path="/usuario/:id">
            <UsuarioDetalhe />
          </Route>
          <Route exact path="/associar">
            <HabilidadeUsuario/>
          </Route>
          <Route exact path="/desassociar">
            <Desrelacionar/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
