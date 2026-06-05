import styles from "./Busca.module.css";

function Busca ({valor, aoBuscar }) {
    return (
        <input
        type="text"
        placeholder="Buscar jogos..."
        value={valor}
        onChange={(e) => aoBuscar(e.target.value)}
        className={styles.input}
        />
    );
}

export default Busca;