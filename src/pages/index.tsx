/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import Cartao from '../components/Cartao';
import styles from '../styles/Fomulario.module.css';
export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div className="">
        <Cartao bgColor="#c0392c">
          <h1>Matty Hall</h1>
        </Cartao>
        <Cartao></Cartao>
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/4/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
