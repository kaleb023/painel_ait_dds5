import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import TabelasAulas from '../tabelaAulas/TabelasAulas';
import { Link, useParams } from 'react-router-dom';

function GestaoAula() {

  const { tipo } = useParams();
  const [exibeAlerta, setExibeAlerta] = useState(false);
  const [tipoMensagem, setTipoMensagem] = useState(tipo);
  const [classeMensagem, setClasseMensagem] = useState('');
  const [textoMensagem, setTextoMensagem] = useState('');

  useEffect(() => {
    if (tipoMensagem) {
      setExibeAlerta(true);
      atualizaMensagem();
      setTimeout(() => {
        setExibeAlerta(false);
        setTipoMensagem('');
      }, 5000);
    }
  }, [tipoMensagem]);

  function mensagemDelete() {
    setTipoMensagem('deletada');
  }

  function atualizaMensagem() {
    switch (tipoMensagem) {
      case 'cadastrada':
        setClasseMensagem('alert alert-success');
        setTextoMensagem('Aula Cadastrada');
        break;
      case 'deletada':
        setClasseMensagem('alert alert-danger');
        setTextoMensagem('Aula Deletada');
        break;
      case 'editada':
        setClasseMensagem('alert alert-primary');
        setTextoMensagem('Aula Editada');
        break;
    }
  };

  return (
    <>
      {/*Importando barra de navegação */}
      <Navbar />
      <div className='container'>
        <h1 className='text-center mt-3'>Gestão de Aulas</h1>
        {/* ao chamar exibeAlerta seguido de && a renderização fica condicional */}
        {exibeAlerta && <div className={classeMensagem}>{textoMensagem}</div>}
        <div className='col-12 text-end my-2'>
          {/* o Link pe um objeto do react-router-dom que permite navegar sem recarregar a página*/}
          <Link to='/cadastro_aula' className='btn btn-primary ms-auto'>Cadastro aula</Link>
        </div>
        {/* TabelaAykas pe um componente que recebe tipo='edit que faz com que seja editavel e também é passada a função de mensagemDelete pois nela esta a função de deletar */}
        <TabelasAulas tipo='edit' onDeleteSuccess={mensagemDelete} />
      </div>
    </>
  )
}

export default GestaoAula;