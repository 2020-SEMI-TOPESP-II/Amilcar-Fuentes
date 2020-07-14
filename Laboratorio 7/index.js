require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const nombre = '';
const edad = '';
const connectDb = require('./dbConfig');
const Estudiantes = require('./models/Estudiantes');

const PORT = 3000;

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());


//codigo html
app.get('/ESTUDIANTES/', async (req, res) => {
    const estudiantes = await Estudiantes.find().select('nombre edad');
    res.render('estudiantes', { estudiantes });
});

app.get('/ESTUDIANTES/:id', async (req, res) => {
    try {
        const estudiante = await Estudiantes.findById(req.params.id).select('nombre edad');
        res.render('estudiantes_details', { estudiante });
    } catch (error) {
        console.log(error);
        res.send('Error');
    }
});
app.get('/ESTUDIANTES', async (req, res) => {
    const { nombre, edad } = req.body;
    await Estudiantes.create({ nombre, edad });
    const estudiantes = await Estudiantes.find().select('nombre edad');
    res.render('estudiantes', { estudiantes, success: true });
});


app.put('/ESTUDIANTES/:id', async (req, res) => {
    const { nombre, edad } = req.body;
    await Estudiantes.findById(req.params.id).updateOne('nombre, edad');
    res.render('estudiantes_details', { estudiantes_details });
});

//apis
app.get('/ESTUDIANTES', async (req, res) => {
    const estudiantes = await Estudiantes.find().select('nombre edad');
    res.json({
        estudiantes,
        cantidad: estudiantes.length
    });
});
app.post('/ESTUDIANTES', async (req, res) => {
    const { nombre, edad } = req.body;
    console.log('Req: ', req.body);
    await Estudiantes.create({ nombre, edad });
    res.json({ nombre, edad });
});
app.get('/ESTUDIANTES/:id', async (req, res) => {
    try {
        const estudiante = await Estudiantes.findById(req.params.id).select('nombre edad');
        res.json(estudiante);
    } catch (error) {
        console.log(error);
        res.json({});
    }
});

app.put('/ESTUDIANTES/:id', async (req, res) => {
        const {nombre, edad} = req.body;
        console.log('Req: ', req.body);
        await Estudiantes.findById(req.params.id).updateOne({ nombre, edad });
        res.json({ nombre, edad });

});

app.delete('/ESTUDIANTES/:id', async (req, res) => {
        await Estudiantes.deleteOne({ _id: req.params.id });
        res.send ('El estudiante ha sido eliminado');
        console.log('El estudiante ha sido eliminado');
});

connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Ejecutando en el puerto ${PORT}`);
    });
});