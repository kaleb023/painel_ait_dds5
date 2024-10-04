import React from 'react';
import Navbar from '../layout/Navbar';
import { useState } from 'react';

function FormAula() {

    const [dataAula, setDataAula] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFim, setHorafim] = useState('');
    const [turma, setTurma] = useState('');
    const [instrutor, setInstrutor] = useState('');
    const [unidadeCurricular, setUnidadeCurricular] = useState('');
    const [ambiente, setAmbiente] = useState('');
    const [infoAula, setInfoAula] = useState('');
    
   async function cadastrarAula(e){
        e.preventDefault();
        const infoAula = {
            data:dataAula,
            data_hora_inicio:horaInicio,
            data_hora_fim:horaFim,
            turma:turma,
            instrutor:instrutor,
            unidade_curricular:unidadeCurricular,
            ambiente:ambiente,
            chave:null
        };

        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(infoAula)
            });

            if(!resposta.ok){
                console.log('Erro ao cadastrar aula');
            }else{
                alert('Aula cadastrada com sucesso')
            }
            
        } catch (error) {
            console.error('Erro ao cadastrar aula',error)
            
        }
        
        
    }
    return (
        <>
            <div className='container col-sm-12 col-lg-3 col-md-6 mt-5'>
                <h3 className='text-center'>Cadastro aula</h3>
                <form onSubmit={cadastrarAula}>
                    <label className='form-label' htmlFor="">Data:</label>
                    <input className='form-control' type="date" value={dataAula} onChange={(e) => (setDataAula(e.target.value))} />

                    <label className='form-label' htmlFor="">Hora inicio:</label>
                    <input className='form-control' type="time" value={horaInicio} onChange={(e) => (setHoraInicio(e.target.value))} />

                    <label className='form-label' htmlFor="">Hora fim:</label>
                    <input className='form-control' type="time" value={horaFim} onChange={(e) => (setHorafim(e.target.value))} />

                    <label className='form-label' htmlFor="">Turma:</label>
                    <input className='form-control' type="text" value={turma} onChange={(e) => (setTurma(e.target.value))} />

                    <label className='form-label' htmlFor="">Instrutor:</label>
                    <input className='form-control' type="text" value={instrutor} onChange={(e) => (setInstrutor(e.target.value))} />

                    <label className='form-label' htmlFor="">Unidade Curricular:</label>
                    <input className='form-control' type="text" value={unidadeCurricular} onChange={(e) => (setUnidadeCurricular(e.target.value))} />

                    <label className='form-label' htmlFor="">Ambiente:</label>
                    <input className='form-control' type="text" value={ambiente} onChange={(e) => (setAmbiente(e.target.value))} />

                    <a className='btn btn-danger mt-3 float-start' href="">Cancelar</a>
                    <button className='btn btn-success mt-3 float-end' type='submite'>Salvar</button>
                </form>
            </div>
        </>
    )
}

export default FormAula;