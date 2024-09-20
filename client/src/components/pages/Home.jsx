import React from 'react';
import styles from './Home.module.css';
import Cabecalho from '../layout/Cabecalho.jsx';
import TabelasAulas from '../tabelaAulas/TabelasAulas.jsx';
import LateralImagens from '../LateralImagens/LateralImagens.jsx';

function Home() {
  return (
    <>
    <Cabecalho/>
    <TabelasAulas/>
    <LateralImagens/>
    </>
  )
}

export default Home;