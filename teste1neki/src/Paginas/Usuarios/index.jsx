import TabelaUsuario from "../../Componentes/TabelaUsuario";
import logo from "../../Componentes/Imagens/logo.png"


const Usuarios =()=>{
    
    return(
        <div className="container">
            <div className= "header">
                <img className="logo" src={logo} alt="Logo Neki IT" />
            </div>
            <div>
                <TabelaUsuario/>
            </div>
        </div>
    )
}

export default Usuarios;