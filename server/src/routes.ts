import express from 'express';

    // Rota: Endereço completo da requisição
    // Recurso: Qual entidade estamos acessando do sistema
    
    // GET: Buscar uma ou mais informações do back-end
    // POST: Criar uma nova informação no back-end 
    // PUT: Atualizar uma informação existente no back-end
    // DELETE: Remover uma informação no back-end

    // Request Param: Parâmetros que vem na própria rota que identificam um recurso
    // Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação(...)
    // Request Body: Parâmetros para criação/atualização de informações 

const routes = express.Router();

routes.get('/', (request, response) =>{
    return response.json({ message: 'Hello World!'});
});

export default routes;