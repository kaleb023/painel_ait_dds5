import { useEffect, useState } from "react";
import AbreviaData from "./AbreviaData";
import AbreviaInstrutor from "./AbreviaInstrutor";
import AbreviaUc from "./AbreviaUc";
import AbreviaAmbiente from "./AbreviaAmbiente";
import styles from './TabelaAulas.module.css';

function TabelasAulas({tipo}) {
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
                                <button className="btn btn-warning ms-2">Editar</button>
                                <button className="btn btn-danger ms-2">Deletar</button>
                            </td> }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelasAulas;