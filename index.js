require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const productos = [
  { id: 1, name: "Laptop", price: 900, stock: 5 },
  { id: 2, name: "Celular", price: 500, stock: 10 },
  { id: 3, name: "Tablet", price: 350, stock: 8 },
];

// 🟢 Endpoint para mostrar productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// 🟢 Endpoint para agregar un producto
app.post('/productos', (req, res) => {
  const { name, price, stock } = req.body;
  
  if (!name || !price || !stock) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const newProduct = { id: productos.length + 1, name, price, stock };
  productos.push(newProduct);
  res.status(201).json(newProduct);
});

// 🟢 Endpoint raíz para probar la API
app.get('/', (req, res) => {
  res.send('🚀 ¡Bienvenido a la API de EcoMarket!');
});

// 🚀 Servidor escuchando en Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API corriendo en el puerto ${PORT}`));
