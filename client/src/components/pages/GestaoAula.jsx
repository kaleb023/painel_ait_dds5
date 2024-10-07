import React from 'react';
import Navbar from '../layout/Navbar';
import TabelasAulas from '../tabelaAulas/TabelasAulas';
import { Link } from 'react-router-dom';

function GestaoAula() {
  return (
   
    <>
       <Navbar/>
       <div className='container'>
        <h1 className='text-center mt-3'>Gestão de Aulas</h1>
        <div className='col-12 text-end my-2'>
        <Link to='/cadastro_aula' className='btn btn-primary ms-auto'>Cadastro aula</Link>
        </div>
        <TabelasAulas tipo='edit'/>
       </div>
    </>
  )
}

export default GestaoAula;