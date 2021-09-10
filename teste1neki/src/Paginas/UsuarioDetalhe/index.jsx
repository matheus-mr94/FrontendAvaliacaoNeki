import logo from "../../Componentes/Imagens/logo.png";
import http from "../../http";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Lista from "../../Componentes/Lista";
import "./styles.css"

const UsuarioDetalhe = () => {


    const { id } = useParams()
    const [usuario, setUsuario] = useState({})
    const [habilidades, setHabilidades] = useState([])

    useEffect(() => {
        http.get(`user/${id}`)
            .then(response => {
                let resposta = {}
                resposta = response.data
                setUsuario(resposta)
                setHabilidades(resposta.habilidades)
            })
    }, [id])



    return (
        
            <div className="container">
                <div className="header">
                    <img className="logo" src={logo} alt="Logo Neki IT" />
                </div>
                <div className="container2">
                    <div className="card cardUsuario">
                        <div className="card-body">
                            <h5 className="card-title">Usuário: {usuario.usuario}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Último login: {usuario.dataLogin}</h6>
                            <div>
                                {habilidades.map((item) => <Lista key={item.id} item={item} />)}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
       
    )
}
export default UsuarioDetalhe;