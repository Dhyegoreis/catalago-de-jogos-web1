function Card({ id, nome, imagem, nota, generos}) {
    return (
        <div>
            <img src={imagem} alt={nome} width={250}/>
            <h3>{nome}</h3>
            <p>Nota: {nota}</p>
            <p>Gêneros: {generos.map((g) => generos.name).join(", ")}</p>
        </div>
    );
}

export default Card;