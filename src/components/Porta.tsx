import criarPortas from "../../functions/portas"
import PortaModel from "../../model/Porta"
import styles from "../styles/Porta.module.css"

interface PortaProps{
    value: PortaModel,
    onChange: (novaPorta : PortaModel) =>void
}

export default function Porta(props: PortaProps) {
    
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''
    const alternarSelecao = e=>props.onChange(porta.alternarSelecao())
    const abrirPorta = e=>{
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    console.log(criarPortas(10,3))


    function renderizarPorta() {
        return(
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrirPorta}></div>
            </div>
        )
    }
    
    return(
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.frame} ${selecionada}`}>
                {porta.aberta? false : renderizarPorta()}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}