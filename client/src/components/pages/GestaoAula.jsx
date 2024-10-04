import React from 'react';
import Navbar from '../layout/Navbar';
import TabelasAulas from '../tabelaAulas/TabelasAulas';

function GestaoAula() {
  return (
   
    <>
       <Navbar/>
       <div className='container'>
        <h1>Gestão de Aulas</h1>
        <TabelasAulas tipo='edit'/>
       </div>
    </>
  )
}

export default GestaoAula;