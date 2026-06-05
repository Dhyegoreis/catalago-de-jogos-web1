"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Busca from "@/components/Busca";
import styles from "./Jogos.module.css";

function Jogos() {
    const [jogos, setJogos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [termoBusca, setTermoBusca] = useState("");

    useEffect(() => {
        async function buscarJogos() {
            const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
            const resposta = await fetch(
                `https://api.rawg.io/api/games?key=${apiKey}&page_size=30`
            );
            const dados = await resposta.json();
            setJogos(dados.results);
            setCarregando(false);
        }
        buscarJogos();
    }, []);

    const jogosFiltrados = jogos.filter((jogo) =>
        jogo.name.toLowerCase().includes(termoBusca.toLowerCase())
    );

    if (carregando) {
        return <p>Carregando dados...</p>;
    }
    return (
        <main>
            <h1 className={styles.titulo}>Catálogo de Jogos</h1>
            <Busca valor={termoBusca} aoBuscar={setTermoBusca} />
            <div className={styles.grid}>
                {jogosFiltrados.map((jogo) => (
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
        </main>
    );
}

export default Jogos;