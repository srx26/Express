import express, { request, response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send({ msg: "Hello Love!"});
});

app.get('/api/users', (request, response) => {
    response.send([
        {id: 1, username: "jon", displayName: "Jon"}, 
        {id: 2, username: "siu", displayName: "Siu"},
        {id: 3, username: "dex", displayName: "Dex"}
    ]);
})

app.get('/api/products', (request, response) => {
    response.send([
        {id: 1, name: "Steak", price: "99.00"}
    ]);
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

