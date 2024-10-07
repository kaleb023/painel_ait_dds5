import React from 'react';
import Navbar from '../layout/Navbar';
import FormAula from '../FormAula/FormAula';
import { useParams } from 'react-router-dom';

function EditAula() {
   const {id} = useParams();
    return (
        <div>
            <Navbar/>
            <FormAula titulo='Editar aula' textoBotao='Salvar' id={id}/>
        </div>
    )
}

export default EditAula;