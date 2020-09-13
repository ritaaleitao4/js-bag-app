const express = require('express');
const cors = require('cors');
const database = require('./database');

const app = express();

app.use(cors());

app.get('/bag/:bagId', (request, response) => {
    const { bagId } = request.params;
    const bag = database.bag.filter(b => b.id === bagId);
    response.json(bag);
});

app.delete('/bag/:bagId/items/:itemId', (request, response) => {
    const { bagId } = request.params;
    const bag = database.bag.filter(b => b.id === bagId);
    console.log('bag', bag)
    if (bag.length > 0) {
        const { itemId } = request.params;
        const itemExistsInBag = bag[0].items.filter(i => i.id === itemId).length > 0;
        if (itemExistsInBag) {
            response.status(200);
            response.send();
            return;
        }
    }

    response.status(404);
    response.send({ error: 'Not found' });
});

const port = 3000;
app.listen(port, (err) => {
    if (err) {
        return console.log('unexpected error', err);
    }

    console.log(`server is listening on ${port}`);

    return null;
});
