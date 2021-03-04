import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json( { message: "Olá alunos !" } )
});

app.post("/", (request, response) => {
    return response.json( { message: "Aluno salvo com sucesso !" } )
});

app.listen(3333, () => console.log("Servidor Teach rodando !"));