const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.get("/api/hello", (req, res)=>{
    res.json({message: "Hello from server siiiiiiiiiiiiiiiiide!" });
});

app.get("/client", (req,res) => {
    fs.readFile(__dirname + "/clients.json", "utf-8", (err, data) => {
        console.log(data);
        res.end(data);
    });
});

app.get("/item", (req,res) => {
    fs.readFile(__dirname + "/items.json", "utf-8", (err, data) => {
        console.log(data);
        res.end(data);
    });
});

app.post("/client", (req,res) =>{
    console.log("El cuerpo y vista de la petición", req.body);
    res.status(200).end()
});

app.put("/client", (req, res) => {
    console.log("Client put");
    res.status(200).end()
})

app.delete("/client", (req, res) => {
    console.log("Client delete");
    res.status(201).end()
})

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});