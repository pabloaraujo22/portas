import { useState } from "react";
import PortaModel from "../../model/Porta";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import {criarPortas, atualizarPortas} from "../../functions/portas"

export default function Home() {
  
  const [portas, setPortas] = useState(criarPortas(10,2))
  
 function renderizarPortas() {
   return portas.map(porta=>{
     return(
       <Porta key={porta.numero} value={porta} onChange={novaPorta=> setPortas(atualizarPortas(portas,novaPorta))}/>
     )
   })
 }


  return (
    <div style={{display:"flex"}}>
      {renderizarPortas()}
    </div>
  )
}
