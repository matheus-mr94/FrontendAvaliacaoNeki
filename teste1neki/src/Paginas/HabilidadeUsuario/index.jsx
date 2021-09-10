import logo from "../../Componentes/Imagens/logo.png"
import http from "../../http";
import { useState, useEffect } from "react";


const HabilidadeUsuario = () => {

    const [habilidades, setHabilidades] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [usuarioId, setUsuarioId] = useState(0)
    const [habilidadeId, setHabilidadeId] = useState(0)
    const [nivelHabilidade, setNivelHabilidade] = useState('')

    useEffect(() => {
        http.get('skill/all')
            .then(response => setHabilidades(response.data))
    }, [])

    useEffect(() => {
        http.get('user/all')
            .then(response => setUsuarios(response.data))
    }, [])

    const Associar = (evento) => {
        evento.preventDefault()
        const userSkill = {
            nivelHabilidade: nivelHabilidade,
            usuario: {
                id: usuarioId
            },
            habilidade: {
                id: habilidadeId
            }
        }

        http.post('userskill', userSkill)
            .then(response => {
                console.log(response.data)
            })
            .catch(erro => {
                console.log('falha ao relacionar')
                console.log(erro)
            })

    }

    return (
        <div>
            <div className="header">
                <img className="logo" src={logo} alt="Logo Neki IT" />
            </div>
            <div className="login">
                <div className="container container1">
                    <div className="formulario">
                        <form onSubmit={Associar}>
                            <div className="form-group">
                                <label>Usuário</label>
                                <select required="true" value={usuarioId} onChange={(evento) => setUsuarioId(evento.target.value)} className="form-control">
                                    <option>Selecione</option>
                                    {usuarios.map(usuario => <option key={usuario.id} value={usuario.id}>{usuario.usuario}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Habilidade</label>
                                <select required="true" value={habilidadeId} onChange={(evento) => setHabilidadeId(evento.target.value)} className="form-control">
                                    <option>Selecione</option>
                                    {habilidades.map(habilidade => <option key={habilidade.id} value={habilidade.id}>{habilidade.nome}</option>)}
                                </select>
                            </div>
                            <div>
                                <label>Nota</label>
                                <input required="true" value={nivelHabilidade} type="text" onChange={(evento) => setNivelHabilidade(evento.target.value)} className="form-control" />
                            </div>
                            <div className="botoes">
                                <button className="btn btn-primary">Relacionar</button>
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

export default HabilidadeUsuario;