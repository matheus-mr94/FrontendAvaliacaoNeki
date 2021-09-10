import logo from "../../Componentes/Imagens/logo.png"
import http from "../../http";
import { useState } from "react";
import { useHistory } from "react-router";



const Desrelacionar = () => {

    const [relacaoId, setRelacaoId] = useState([])   
    const history = useHistory();

   

    const Desassociar = (evento) => {
        evento.preventDefault()
        http.delete('userskill/delete/' + relacaoId)
            .then(console.log("Relação desfeita"))
            .catch(erro => console.log(erro))
            history.push('/usuarios')

    }

    return (
        <div>
            <div className="header">
                <img className="logo" src={logo} alt="Logo Neki IT" />
            </div>
            <div className="login">
                <div className="container container1">
                    <div className="formulario">
                        <form onSubmit={Desassociar}>
                            <div className="form-group">
                                <label>Id da Relação</label>
                                <input value={relacaoId} onChange={(evento) => setRelacaoId(evento.target.value)} className="form-control"/>                                   
                            </div>
                            <div className="botoes">
                                <button className="btn btn-primary">Desrelacionar</button>
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

export default Desrelacionar;

