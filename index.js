const express = require("express");
const fs = require("fs");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });

const path = require('path');

db.connect()

db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})


app.get("/productos", (req, res) => {
    const q = "SELECT * FROM productos";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

  app.get("/productos/category/:cat", (req, res) => {
    const cat = req.params.cat;
    const q = "SELECT * FROM productos WHERE category = ?";
    db.query(q, [cat], (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  
  app.post("/producto", (req, res) => {
    console.log()
    const q = "INSERT INTO productos(title, quantity, price, available, category, img) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.quantity,
      req.body.price,
      req.body.available,
      req.body.category,
      req.body.img
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.delete("/producto/:id", (req, res) => {
    const productID = req.params.id;
    const q = " DELETE FROM productos WHERE id = ? ";
  
    db.query(q, [productID], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.put("/producto/:id", (req, res) => {
    const productID = req.params.id;
    const q = "UPDATE productos SET `quantity`= ?, `price`= ?, `available`= ? WHERE id = ?";
  
    const values = [
      req.body.quantity,
      req.body.price,
      req.body.available,
    ];
  
    db.query(q, [...values,productID], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});