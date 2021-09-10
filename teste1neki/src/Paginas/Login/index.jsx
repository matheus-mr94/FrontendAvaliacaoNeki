import { useState,useEffect} from "react"
import { Link } from "react-router-dom"
import http from "../../http"
import "./styles.css"
import { useHistory } from "react-router";
import logo from "../../Componentes/Imagens/logo.png"

const Login = ({onLogin}) => {

    const [user, setUser] = useState('')
    const [senha, setSenha] = useState('')
    const history = useHistory();

    useEffect(() => {
        localStorage.removeItem('token')
      }, [])
    

    const logon = (evento) => {
        evento.preventDefault()
        const usuario = {
            usuario: user,
            senha: senha
        }
        http.post('login', usuario)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                onLogin(response.data.token)
            history.push('/home')
            })
            .catch(erro => {
                console.log('Não foi possível logar')
                console.log(erro);
            })

    }

    return (
        <div>
            <div className= "header">
                <img className="logo" src={logo} alt="Logo Neki IT" />
            </div>
            <div className="login">
                <div className="container container1">
                    <div className="formulario">
                        <form onSubmit={logon}>
                            <div>
                                <label >Login</label>
                                <input value={user} onChange={(evento) => setUser(evento.target.value)} className="form-control" type="text" />
                            </div>
                            <div>
                                <label>Senha</label>
                                <input value={senha} type="password" onChange={(evento) => setSenha(evento.target.value)} className="form-control" />
                            </div>
                            <div className="botoes">
                                <button className="btn btn-primary">Entrar</button>
                                <Link className="link" to="/cadastro">Cadastrar</Link>
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

export default Login;