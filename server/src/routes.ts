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
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {

    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    });

    const point_id = insertedIds[0];

    const pointItens = items.map((item_id: number) => {
        return {
            item_id,
            point_id,
        };
    })

    await trx('point_items').insert(pointItens);

    return response.json({ success: true });
});

export default routes;