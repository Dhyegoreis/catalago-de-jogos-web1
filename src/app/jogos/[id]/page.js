"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./Detalhes.module.css";

function DetalhesJogo() {
  const params = useParams();
  const id = params.id;

  const [jogo, setJogo] = useState(null);

  useEffect(() => {
    async function buscarJogo() {
      const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
      const resposta = await fetch(
        `https://api.rawg.io/api/games/${id}?key=${apiKey}`
      );
      const dados = await resposta.json();
      setJogo(dados);
    }
    buscarJogo();
  }, [id]);

  if (!jogo) {
    return <p>Carregando detalhes...</p>;
  }

  return (
    <main className={styles.container}>
      <h1>{jogo.name}</h1>
      <img src={jogo.background_image} alt={jogo.name} className={styles.imagem} />
      <p>Nota: {jogo.rating}</p>
      <p>Lançamento: {jogo.released}</p>
      <p className={styles.descricao}>{jogo.description_raw}</p>
    </main>
  );
}

export default DetalhesJogo;