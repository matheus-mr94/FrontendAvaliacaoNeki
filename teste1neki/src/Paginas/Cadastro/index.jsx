import { useState } from "react"
import { Link } from "react-router-dom"
import http from "../../http"
import "./styles.css"
import logo from "../../Componentes/Imagens/logo.png"

const Cadastro = ()=>{
    
    const[user,setUser] = useState('')
    const[senha,setSenha] = useState('')


    const cadastrar =(evento) =>{
        evento.preventDefault();
        const usuario = {
            usuario: user,            
            senha: senha
        }

        http.post('user',usuario)
            .then(response=>(response.data))        
            
    }   

    return(
        <div>
        <div className= "header">
            <img className="logo" src={logo} alt="Logo Neki IT" />
        </div>
        <div className="login">
            <div className="container container1">
                <div className="formulario">
                    <form onSubmit={cadastrar}>
                        <div>
                            <label >Usuário</label>
                            <input value={user} required="true" onChange={(evento) => setUser(evento.target.value)} className="form-control" type="text" />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input value={senha} required="true" type="password" onChange={(evento) => setSenha(evento.target.value)} className="form-control" />
                        </div>
                        <div className="botoes">
                            <button className="btn btn-primary">Cadastrar</button>
                            <Link className="link" to="/">Logar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <footer className="footer">
                <text>Teste Residência - Matheus M. Reis</text>
        </footer>
    </div>
    )
}

export default Cadastro;