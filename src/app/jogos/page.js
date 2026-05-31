"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";

function Jogos() {
    const [jogos, setJogos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function buscarJogos() {
            const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
            const resposta = await fetch(
                `https://api.rawg.io/api/games?key=${apiKey}&page_size=10`
            );
            const dados = await resposta.json();
            setJogos(dados.results);
            setCarregando(false);
        }
        buscarJogos();
    }, []);

    if (carregando) {
        return <p>Carregando dados...</p>;
    }
    return (
        <main>
            <h1>Catálogo de Jogos</h1>
            <div>
                {jogos.map((jogo) => (
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