import { useEffect, useState } from "react";
import styles from './Relogio.module.css';

function Relogio(){

    //Declarando hora como estado
    const [hora,setHora] = useState('');

    //Chamando função pós carregamento
    useEffect(()=>{
        atualizandoHora();
        //Determinando intervalo de 1 segundo para atualizar o relógio
        const intervalo = setInterval(atualizandoHora,1000);
        return ()=>{
            clearInterval(intervalo);
        }
    },[]);

    function atualizandoHora(){
        const agora = new Date();
        const horaMinutos = agora.toLocaleTimeString('pt-br',{hour:'2-digit', minute:'2-digit', second:'2-digit'});
        setHora(horaMinutos);
    }


    const date = new Date().toLocaleTimeString();
    
    return(
       <div className={styles.relogio}>{hora}</div>
    )
        
}

export default Relogio;