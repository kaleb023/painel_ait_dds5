import React from 'react';
import Navbar from '../layout/Navbar';
import FormAula from '../FormAula/FormAula';
import { useParams } from 'react-router-dom';

function EditAula() {
   const {id} = useParams();

   async function editarAula(infoAula,id) {
    try {
        const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(infoAula)
        });
        if(!resposta.ok){
            const retorno = await resposta.json();
            console.log('Erro ao editar Aula',retorno);
        }else{
            console.log('Aula Editada');
            //alert('Aula editada com sucesso')
        }
    } catch (error) {
        console.log('Erro ao editar aula', error);
    }
    
   }
    return (
        <div>
            <Navbar/>
            <FormAula titulo='Editar aula' textoBotao='Salvar' id={id} handleSubmit={editarAula} tipo='editada'/>
        </div>
    )
}

export default EditAula;