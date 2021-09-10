import http from "../../http"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const TabelaUsuario = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        http.get('user/all')
            .then(response => {
                setUsuarios(response.data)
            })
    }, [])

    return (
        <div class="table-responsive">
            <table class="table align-middle">
                <thead >
                    <tr class="align-bottom">
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Última data de login</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => <tr><td class="align-top">{usuario.id}</td><td class="align-top">{usuario.usuario}</td><td class="align-top">{usuario.dataLogin}</td><td class="align-top"><Link to={`/usuario/${usuario.id}`}><button className="btn btn-primary">Detalhes</button></Link></td></tr>)}
                </tbody>
            </table>
        </div>

    )
}
export default TabelaUsuario;