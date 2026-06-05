"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import styles from "./Home.module.css";

function Home() {
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    async function buscarDestaques() {
      const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
      const resposta = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}&page_size=4&ordering=-rating`
      );
      const dados = await resposta.json();
      setDestaques(dados.results);
    }
    buscarDestaques();
  }, []);

  return (
    <main>
      <section className={styles.hero}>
        <h1>Catálogo de Jogos</h1>
        <p>
          Explore os melhores títulos, veja detalhes completos e
          marque seus jogos favoritos.
        </p>
        <Link href="/jogos" className={styles.botao}>
          Ver catálogo completo
        </Link>
      </section>

      <section className={styles.secao}>
        <h2>Jogos em destaque</h2>
        <div className={styles.grid}>
          {destaques.map((jogo) => (
            <Card
              key={jogo.id}
              id={jogo.id}
              nome={jogo.name}
              imagem={jogo.background_image}
              nota={jogo.rating}
              generos={jogo.genres}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;