import logo from "../../Componentes/Imagens/logo.png"
import "./styles.css"

const Home = () => {

    return (
        <div className="container">
            <div className="header">
                <img className="logo" src={logo} alt="Logo Neki IT" />
            </div>
            <div className= "box1">
                <center className="texto">Sua parceira para a</center>
                <center className="text-uppercase">TRANSFORMAÇÃO DIGITAL</center>
            </div>
        </div>
    )
}

export default Home;