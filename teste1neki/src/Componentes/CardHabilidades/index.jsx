import "./style.css";

const CardHabilidade = ({ nome, descricao, imagem, versao, id }) => {

    return (

      
            
                <div class="col-12 col-lg-3">
                    <div class="card cardHabilidade">
                        <img src={imagem} class="card-img-top" alt="imagem" />
                        <div class="card-body">
                            <h5 class="card-title">{nome}</h5>
                            <p class="card-text">Descrição: {descricao}</p>
                            <p class="card-text"><small className="text-muted">Versão: {versao}</small></p>
                            <p class="card-text"><small className="text-muted">ID: {id}</small></p>
                        </div>
                    </div>
                </div>
            
       


    )
}
export default CardHabilidade;