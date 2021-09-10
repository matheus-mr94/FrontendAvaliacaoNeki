

const Lista = ({ item }) => {

    return (
        <ul className="list-group" >
            <li className="list-group-item list-group-item-light" >Id Relação:{item.id} - Habilidade: {item.habilidade.nome}  Nota: {item.nivelHabilidade} </li>
        </ul>
    )
}

export default Lista;