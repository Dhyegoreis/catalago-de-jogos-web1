"use client";

import { useState } from "react";

function Contato() {
  const [dados, setDados] = useState({ nome: "", email: "" });

  const aoDigitar = (e) =>
    setDados({ ...dados, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    console.log("Nome: " + dados.nome);
    console.log("E-mail: " + dados.email);
    alert("Mensagem enviada! Obrigado, " + dados.nome);
  };

  return (
    <main>
      <h1>Fale Conosco</h1>
      <form onSubmit={enviar}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          onChange={aoDigitar}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          onChange={aoDigitar}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default Contato;