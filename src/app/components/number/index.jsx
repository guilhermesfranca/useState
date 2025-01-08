'use client';
import { useState } from 'react';
import styles from './number.module.css';

export default function Number() {
    const [valorBotao, setValorBotao] = useState(0);

  const gerarNumero = () => {
    const numero = Math.floor(Math.random()* 1000) + 1 
    setValorBotao(numero)
  };


  return (
    <main className={styles.div}>
      <div>
        <h1>Número Aleatório</h1>
        <h2>{valorBotao}</h2>
        <p>Clique no botão abaixo para gerar um número aleatório</p>
        <button onClick={gerarNumero}>Gerar Número</button>
      </div>
    </main>
  );
}
