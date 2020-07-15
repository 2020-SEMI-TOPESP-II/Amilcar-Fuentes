const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const id = ("")
const ESTUDIANTES = [
     {
        nombre: "Amilcar Fuentes",
        edad: "24",
     },
     {
        nombre: "Lourdes Santamaria",
        edad: "21",
     },
     {
        nombre: "Keisi Villarreal",
        edad: "23",
     },
     {
        nombre: "Nicole Pineda",
        edad: "24",
     },
     {
        nombre: "Stacy Lorraine",
        edad: "21",
     }
]


app.use(bodyParser.json());


app.get('/ESTUDIANTES', function (req, res) {
  res.json(ESTUDIANTES);
});

app.post('/ESTUDIANTES', function (req, res){
    const {nombre, edad} = req.body;
    ESTUDIANTES.push({ nombre, edad });
    res.json({ nombre, edad });
});

app.get('/ESTUDIANTES/:id', function (req, res) {
  res.json(ESTUDIANTES [req.params.id]);
});

app.put('/ESTUDIANTES', function (req, res) {                                                                                                                                                       const {nombre, edad, id} = req.body;
    ESTUDIANTES [id] = {nombre, edad};
    res.json();
});

app.delete('/ESTUDIANTES/:id', function (req, res){
ESTUDIANTES [req.params.id] = {nombre: "", edad: ""}
res.send ('El estudiante se ha eliminado');
});

app.listen(3000, () => console.log('Ejecutando el servidor en el puerto 3000'));