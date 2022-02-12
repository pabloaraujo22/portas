import Link from 'next/link';
import { useState } from 'react';
import Cartao from '../components/Cartao';
import EntradaNumerica from '../components/EntradaNumerica';
import styles from '../styles/Fomulario.module.css';
export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);
  return (
    <div className={styles.formulario}>
      <div className="">
        <Cartao bgColor="#c0392c">
          <h1>Matty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtd de Portas?"
            value={qtdPortas}
            onChange={(novoValor) => setQtdPortas(novoValor)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta com Presente?"
            value={comPresente}
            onChange={(novoValor) => setComPresente(novoValor)}
          />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
