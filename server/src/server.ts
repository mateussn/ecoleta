import express from 'express';

const app = express();

app.get('/users', (request, response) =>{
    console.log("Olá mundo!");

    // JSON RETURN FORMAT

    response.json([
        'Mateus',
        'Lucas',
        'Quezia',
        'Jemima',
        'João'
    ]);

    //response.send('Hello World');
});

app.listen(3333);