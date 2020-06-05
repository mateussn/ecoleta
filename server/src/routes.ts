    // Rota: Endereço completo da requisição
    // Recurso: Qual entidade estamos acessando do sistema
    
    // GET: Buscar uma ou mais informações do back-end
    // POST: Criar uma nova informação no back-end 
    // PUT: Atualizar uma informação existente no back-end
    // DELETE: Remover uma informação no back-end

    // Request Param: Parâmetros que vem na própria rota que identificam um recurso
    // Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação(...)
    // Request Body: Parâmetros para criação/atualização de informações 

import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);

// index = listagem, show = único registro, create/store, update, delete/destroy.

export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)