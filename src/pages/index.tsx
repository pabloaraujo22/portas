import { useState } from "react";
import PortaModel from "../../model/Porta";
import Porta from "../components/Porta";
import Presente from "../components/Presente";

export default function Home() {
  
  const [p1, setP1] = useState(new PortaModel(1))
  
  return (
    <div style={{display:"flex"}}>
      <Porta  value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  )
}
