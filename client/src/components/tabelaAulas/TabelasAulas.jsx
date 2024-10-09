import { useEffect, useState } from "react";
import AbreviaData from "./AbreviaData";
import AbreviaInstrutor from "./AbreviaInstrutor";
import AbreviaUc from "./AbreviaUc";
import AbreviaAmbiente from "./AbreviaAmbiente";
import styles from './TabelaAulas.module.css';
import { Link } from 'react-router-dom';

function TabelasAulas({tipo, onDeleteSuccess}) {
    const [aulas, setAulas] = useState([]);

    useEffect(() => {
        baixarAulas();
    }, [])

    async function baixarAulas() {
        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!resposta) {
                throw new Error('Erro ao buscar aulas');
            }
            const consulta = await resposta.json();
            setAulas(consulta);
        } catch (error) {
            console.log('Erro ao consultar aulas', error);
        }
    }

    async function deletarAulas(id){
        try {
            const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            });

            if (!resposta.ok){
                throw new Error('Erro ao deletar aula', JSON.stringify(resposta));
            }else{
                setAulas(aulas.filter(aula=>aula.id !== id));
               //alert('Aula deletada!');
               onDeleteSuccess();
            }
            
        } catch (error) {
            console.debug(error);
            
        }
    }

    return (
        <div className={`${styles.aulas} ${tipo === 'edit' ? styles.edit:''}`}>
            <table className={styles.tabelaAulas}>
                <thead>
                    <tr>
                     <th>Inicio</th>
                     <th>Fim</th>
                     <th>Turma</th>
                     <th>Instrutor</th>
                     <th>Unidade Curricular</th>
                     <th>Ambiente</th>
                     {tipo === 'edit' && <th>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {aulas.map((aula) => (
                        <tr key={aula.id}>
                            <td><AbreviaData data={aula.data_hora_inicio}/></td>
                            <td><AbreviaData data={aula.data_hora_fim}/></td>
                            <td>{aula.turma}</td>
                            <td><AbreviaInstrutor instrutor={aula.instrutor}/></td>
                            <td><AbreviaUc unidade_curricular={aula.unidade_curricular}/></td>
                            <td><AbreviaAmbiente ambiente={aula.ambiente}/></td>
                            {tipo === 'edit' &&
                            <td>
                                <Link to={`/edit_aula/${aula.id}`} className="btn btn-warning ms-2">Editar</Link>
                                <button className="btn btn-danger ms-2"
                                        onClick={()=>deletarAulas(aula.id)}
                                >Deletar</button>
                            </td> }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelasAulas;