import mysql from 'mysql2/promise';
import db from '../conexao.js';



export async function createAula(aula) {
    //Ao ser acionado o metodo createAula retorna na tela 
    console.log('Entrando no Model Aula');

    //criando conexao para o banco de dados usando configurações de 'db'
    const conexao = mysql.createPool(db);

    //Criando string com comandos sql 
    const sql = `INSERT INTO aulas (
    data,
    data_hora_inicio,
    data_hora_fim,
    turma,
    instrutor,
    unidade_curricular,
    ambiente
    )
    VALUES (?,?,?,?,?,?,?)`;

    //definindo parametros para inserir no sql
    const params = [
        aula.data,
        aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente
    ];

    //Executando query no banco 
    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Aula cadastrada!')
        return [201, 'Aula cadastrada!'];
    } catch (error) {
        console.log(error);
        return [500, error];
    }

}

export async function bancoAula(aula) {
    const conexao = mysql.createPool(db);
    const sql = ` SELECT * FROM aulas `;

    const params = [
        aula.data,
        aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Monstrando aulas');
        return [200, retorno]
    } catch (error) {
        console.log(error);
        return [502, error];
    }

}

export async function updateAula(aula, id) {
    const conexao = mysql.createPool(db);
    console.log('Entrando no Model aula');

    const sql = `UPDATE aulas SET data = ?,
        data_hora_inicio = ?,
        data_hora_fim = ?,
        turma = ?,
        instrutor = ?,
        unidade_curricular = ?,
        ambiente = ?
        WHERE id = ?
        `

    const params = [
        aula.data,
        aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente,
        id
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Atualizando aulas');
        return [200, retorno]
    } catch (error) {
        console.log(error);
        return [500, error];
    }


}


export async function deleteAula(id) {
    const conexao = mysql.createPool(db);
    console.log('Deletando no Model aula');

    const sql = `DELETE FROM aulas WHERE id = ?`;

    const params = [id];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Delentando aula');
        return [200, retorno]
    } catch (error) {
        console.log(error);
        return [500, error];
    }


}

export async function oneAula(id) {
    const conexao = mysql.createPool(db);
    console.log('Mostrando no Model aula');

    const sql = `SELECT * FROM aulas WHERE id = ?`;

    const params = [id];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Monstrando aulas');
        return [200, retorno[0]];
    } catch (error) {
        console.log(error);
        return [502, error];
    }

}