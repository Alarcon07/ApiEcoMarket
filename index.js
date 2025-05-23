require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const productos = [
  { id: 1, name: "Laptop", price: 900, stock: 5 },
  { id: 2, name: "Celular", price: 500, stock: 10 },
];

app.get('/productos', (req, res) => res.json(productos));

app.post('/productos', (req, res) => {
  const newProduct = req.body;
  newProduct.id = productos.length + 1;
  productos.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(3000, () => console.log("API corriendo en el puerto 3000"));