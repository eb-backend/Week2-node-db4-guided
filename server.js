const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();
const Zoo=require("./models/zoo")

server.use(helmet());
server.use(express.json());

server.get('/api/species', (req, res) => {
  // get all species from the database
  db('species')
  .then(species => {
    res.status(200).json(species);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/api/animals', (req, res) => {
  // res.status(200).json({message:"SOMETHING"})
  // get all animals from the database
  // include species name
  db('animals as a')
    .leftJoin('species as s', 's.id', 'a.species_id')
    .select('a.id', 'a.animal_name', 's.species_name')
  .then(animals => {
    res.status(200).json(animals);
  })
  .catch(error => {
    res.status(500).json(error);
  });

  // db('animals as a')
  //   .leftJoin('species as s', 's.id', 'a.species_id')
  //   .select('a.id', 'a.animal_name', 's.species_name')
  // .then(animals => {
  //   res.status(200).json(animals);
  // })
  // .catch(error => {
  //   res.status(500).json(error);
  // });
  // db("animals")
  // .then(species=>{
  //   res.status(200).json(species)
  // })
});

// create animal
server.post('/api/animals', (req, res) => {
  db('animals').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('animals')
      .where({ id })
      .first()
    .then(animal => {
      res.status(201).json(animal);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// remove species
server.delete('/api/species/:id', (req, res) => {
  db('species')
    .where({ id: req.params.id })
    .del()
  .then(count => {
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  })
  .catch(error => {
    res.status(500).json(error);
  });
});


server.get("/zoos/:id/animals", async(req,res,next)=>{
  try{
const animals= await Zoo.findAnimals(req.params.id)
res.json(animals)
  }catch(err){
      next(err)
  }
})

module.exports = server;
