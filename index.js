const express = require('express');
const _ = require('underscore');
<<<<<<< HEAD

var port = process.env.PORT || 8080;
var animals = {
=======
 
const port = process.env.PORT || 3000;
const animals = {
>>>>>>> b292ad3d1d33fc547e0291ef8161333fb9a55c2d
    "cat": "meow",
    "dog": "bark",
    "eel": "hiss",
    "bear": "growl",
    "frog": "croak",
    "lion": "roar",
<<<<<<< HEAD
    "bird": "tweet"
}

function getAnimal() {
  return animal = _.sample(Object.entries(animals));
}

const app = express();

app.get('/', function(req, res){
  const [animal_name, sound] = getAnimal();
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`George Orwell had a farm.<br />
E-I-E-I-O<br />
And on his farm he had a ${ animal_name }.<br />
E-I-E-I-O<br />
With a ${ sound }-${ sound } here.<br />
And a ${ sound }-${ sound } there.<br />
Here a ${ sound }, there a ${ sound }.<br />
Everywhere a ${ sound }-${ sound }.<br />`);
      res.end();
});

app.get('/api', function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(animals));
  res.end();
})

module.exports =  app.listen(port, () => {
  console.log(`Launching server on http://localhost:${ port }`)
=======
    "bird": "tweet",
    "cow": "moo"
};
 
function getAnimal() {
  return _.sample(Object.entries(animals));
}
 
const app = express();
 
app.get('/', async (req, res, next) => {
  try {
    const [animal_name, sound] = getAnimal();
    res.status(200).send(`
      George Orwell had a farm.<br />
      E-I-E-I-O<br />
      And on his farm he had a ${animal_name}.<br />
      E-I-E-I-O<br />
      With a ${sound}-${sound} here.<br />
      And a ${sound}-${sound} there.<br />
      Here a ${sound}, there a ${sound}.<br />
      Everywhere a ${sound}-${sound}.<br />
    `);
  } catch (error) {
    next(error);
  }
});
 
app.get('/api', async (req, res, next) => {
  try {
    res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
});
 
// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
 
const server = app.listen(port, () => {
  console.log(`Launching server on http://localhost:${port}`);
});
 
// Manejo adecuado del cierre del servidor
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
>>>>>>> b292ad3d1d33fc547e0291ef8161333fb9a55c2d
});
