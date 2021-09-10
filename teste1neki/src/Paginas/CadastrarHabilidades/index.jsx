import { useState } from "react"
import http from "../../http"
import "./styles.css"
import logo from "../../Componentes/Imagens/logo.png"

const CadastrarHabilidades = () => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [versao, setVersao] = useState('')
    const [imagem, setImagem] = useState('')
   
    


    const adicionarHabilidade = (evento) => {

      

        evento.preventDefault();
        const habilidade = {
            nome: nome,
            descricao: descricao,
            versao: versao,
            imagem: imagem

        }
        http.post('skill', habilidade)
            .then(response => (response.data))

            setNome('')
            setDescricao('')
            setVersao('')
            setImagem('')

        

    }

    return (
        <div>
            <div className="header">
                <img className="logo" src={logo} alt="Logo Neki IT" />
            </div>
            <div className="login">
                <div className="container container1">
                    <div className="formulario">
                        <form onSubmit={adicionarHabilidade}>
                            <div>
                                <label >Habilidade</label>
                                <input value={nome} required="true" onChange={(evento) => setNome(evento.target.value)} className="form-control" type="text" />
                            </div>
                            <div>
                                <label>Descrição</label>
                                <textarea value={descricao} required="true" type="text" onChange={(evento) => setDescricao(evento.target.value)} className="form-control textArea" />
                            </div>
                            <div>
                                <label >Versão</label>
                                <input value={versao} onChange={(evento) => setVersao(evento.target.value)} className="form-control" type="text" />
                            </div>
                            <div>
                                <label >Imagem</label>
                                <input value={imagem} onChange={(evento) => setImagem(evento.target.value)} className="form-control" type="text" />
                            </div>
                            <div className="botoes">
                                <button className="btn btn-primary btn3">Cadastrar</button>                                
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

export default CadastrarHabilidades;