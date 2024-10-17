//importando express
import express from 'express';

//importando cors
import cors from 'cors';


//Importando funcões (metodos do controller)
import { mostrarAula,criarAula } from './controllers/AulaController.js';


//chamando função express
const app = express();
const porta = 5000;

//Habilitando cors
app.use(cors());

//habilidando json
app.use(express.json());

//rota padrao para teste de API
app.get('/',(req,res)=>{
    res.send('<h1>Teste de API funcionando</h1>')  
});

//Rotas de aulas
app.post('/aulas', criarAula);
app.get('/aulas', mostrarAula);


//Iniciando API e exibindo mensagem no console com a porta 
app.listen(porta,()=>{
    console.log(`API Rodando na porta ${porta}`)
});

