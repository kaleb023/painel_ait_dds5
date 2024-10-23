//importando funções do AulaModel
import { createAula } from "../models/AulaModel.js";
import { bancoAula } from "../models/AulaModel.js";
import { updateAula } from "../models/AulaModel.js";
import { deleteAula } from "../models/AulaModel.js";
import { oneAula } from "../models/AulaModel.js";
import { isNullOrEmpty, verificaAula } from "../validations/AulaValidation.js";

export async function criarAula(req,res){
    //ao ser chaamdo o criarAula controller virá no console
    console.log('AulaController criarAula');

    //criando constante com a requisição
    const aula = req.body;

    //exibindo corpo da requisição
    console.log(aula);

    if(verificaAula(aula)){
        res.status(400).json({message:'Todas as propiedades devem ser criadas'})
    }else{
        //tentando criar aula 
        try {
            const [status,resposta] = await createAula(aula);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
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

export async function atualizarAula(req,res){
    console.log('AulaController atualizarAula')

    const aula = req.body;
    const {id} = req.params;

    
    if(verificaAula(aula) || isNullOrEmpty(id)){
        res.status(400).json({message:'Todas as propiedades devem ser criadas'})
    }else{

     try {
        const [status,resposta] = await updateAula(aula,id);
        res.status(status).json(resposta); 
     } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
 }
}

export async function excluirAula(req,res) {
    console.log('AulaController excluirAula')

    const {id} = req.params;

    
    if(isNullOrEmpty(id)){
        res.status(400).json({message:'O id deve ser informado'})
    }else{

    try {
        const [status,resposta] = await deleteAula(id);
        res.status(status).json(resposta); 
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
    
}

export async function mostrarUmaAula(req,res) {
    console.log('AulaController mostrarUmaAula')

    const {id} = req.params;

    
    try {
        const [status,resposta] = await oneAula(id);
        res.status(status).json(resposta); 
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
    
}