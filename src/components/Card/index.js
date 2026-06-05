import Link from "next/link";
import BotaoCurtir from "@/components/BotaoCurtir";
import styles from "./Card.module.css";

function Card({ id, nome, imagem, nota, generos }) {
  return (
    <div className={styles.card}>
      <Link href={`/jogos/${id}`}>
        <img src={imagem} alt={nome} className={styles.imagem} />
        <h3 className={styles.nome}>{nome}</h3>
      </Link>
      <div className={styles.conteudo}>
        <p className={styles.info}>Nota: {nota}</p>
        <p className={styles.info}>
          {generos.map((g) => g.name).join(", ")}
        </p>
        <BotaoCurtir />
      </div>
    </div>
  );
}

export default Card;