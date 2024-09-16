import React from 'react';
import styles from './Home.module.css';
import Cabecalho from '../layout/Cabecalho.jsx';
import TabelasAulas from '../tabelaAulas/TabelasAulas.jsx';

function Home() {
  return (
    <>
    <Cabecalho/>
    <TabelasAulas/>
    </>
  )
}

export default Home;