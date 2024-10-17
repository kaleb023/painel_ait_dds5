//importando funções do AulaModel
import { createAula } from "../models/AulaModel.js";
import { bancoAula } from "../models/AulaModel.js";

export async function criarAula(req,res){
    //ao ser chaamdo o criarAula controller virá no console
    console.log('AulaController criarAula');

    //criando constante com a requisição
    const aula = req.body;

    //exibindo corpo da requisição
    console.log(aula);

    //tentando criar aula 
    try {
        const [status,resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

export async function mostrarAula(req, res) {
    const aula = req.body;

    try {
        const [status,resposta] = await bancoAula(aula);
        res.status(status).json(resposta); 
    } catch (error) {
        console.log(error);
        return[502,error];   
    }

    


    
}