import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Navbar = ({ token, aoLogout }) => {

    const history = useHistory();

    const logout = () => {
        history.push('/')
        aoLogout()
    }

    const Itens = () => {
        if (token) {

            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/usuarios">Usuários</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/habilidades">Habilidades</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cadastrar-habilidades">Cadastrar habilidades</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/associar">Relacionar habilidade</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/desassociar">Desrelacionar habilidades</Link>
                    </li>

                    <li>
                        <Link className="nav-link" onClick={logout} to="/">
                            Logout
                        </Link>
                    </li>
                </>
            )
        }

        return <>


            <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/cadastro">Cadastre-se</Link>
            </li>

        </>
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {Itens()}
                </ul>
            </div>
        </nav>
    )


}

export default Navbar;