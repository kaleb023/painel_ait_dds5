import { useEffect, useState } from "react";
import styles from './Saudacao.module.css';

function Saudacao(){
    const[saudacaoPeriodo, setSaudacaoPeriodo] = useState('');
    useEffect(()=>{
        atualizandoSaudacao();
    },[])

    function atualizandoSaudacao(){
        const agora = new Date();
        const hora = agora.getHours();
        const dia = agora.getDay();
        let textoSaudacao = '';
        const diaSemana = [
            'Domingo',
            'Segunda-feira',
            'Terça-feira',
            'Quarta-feira',
            'Quinta-feira',
            'Sexta-feira',
            'Sabádo'
        ];

        textoSaudacao += diaSemana[dia];
        if (hora>=18){
            textoSaudacao += ' - Boa noite';
        }else if(hora>=12){
            textoSaudacao += ' - Boa tarde';
        }else{
            textoSaudacao += ' - Bom dia';
        }
        
        setSaudacaoPeriodo(textoSaudacao);
    }
    
    return(
        <div className={styles.saudacao}>{saudacaoPeriodo}</div>
    )
}

export default Saudacao;