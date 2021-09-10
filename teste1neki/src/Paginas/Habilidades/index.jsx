import CardHabilidade from "../../Componentes/CardHabilidades"
import { useEffect, useState } from "react"
import http from "../../http"
import logo from "../../Componentes/Imagens/logo.png"
import "./styles.css"



const Habilidades = () => {

    const [habilidades, setHabilidades] = useState([])

    const mostrarHabilidades = () => {
        http.get('skill/all').then(response => {

            setHabilidades(response.data)
        })
            .catch(erro => {
                console.log(erro)
            })
    }
    useEffect(() => {
        mostrarHabilidades()
    }, [])

    return (

        <div className="container">
            <div className="header">
                <img className="logo" src={logo} alt="Logo Neki IT" />
            </div>
            <div className="habilidades">
                <div className="caixa row">
                    {habilidades.map((item) => <CardHabilidade key={item.id} id={item.id} nome={item.nome} versao={item.versao} imagem={item.imagem} descricao={item.descricao} />)}
                </div>
            </div>
        </div>
    )

}

export default Habilidades;