'use client';
import { useState } from 'react';
import estilos from './changeColor.module.css';

export default function ChangeColor() {

  const corDeFundoVermelha = estilos.bg_vermelho
  const corDeFundoAzul = estilos.bg_azul

  const [corAlterada, setCorAlterada] = useState(false);

  function alterarEstilo() {
    setCorAlterada(!corAlterada)
  }

  return (
    <main className={ estilos.main }>
      <div className={ estilos.container }>
        <h2>Alterando estilo do elemento</h2>
        <div className={ corAlterada ? corDeFundoAzul : corDeFundoVermelha }></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button onClick={ alterarEstilo }>Alterar</button>
      </div>
    </main>
  );
}