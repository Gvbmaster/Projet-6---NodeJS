    var cors = require('cors');
    const express = require("express");
    const bodyParser= require('body-parser');
    const jsonParser = bodyParser.json();
    const dbo = require("./db/db");
    const app = express();
    app.use(cors());
    const port = 4444;

    dbo.connectToServer();
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/", function (req, res) {
    res.send("Hello World!");
    });

    app.get("/pokemon/list", function (req, res) {
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("list")
        .find({})
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });
       
    });
    
    app.post('/pokemon/insert', jsonParser, (req, res) => {
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("list")
        .insertOne({...body})
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });
        
        res.json("ok bg");
    });
    
    app.listen(port, function () {
        console.log(`App listening on port ${port}!`);
    });
    
    app.delete('/pokemon/delete', jsonParser, (req, res) =>{
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("list")
        .deleteOne({...body})
        .then(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });

        res.json("ciao beaugosse");
    });

    app.post('/pokemon/update', jsonParser, (req, res) =>{
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("list")
        .updateOne({
            name: body.prevname
        },{
            $set:{ 
                name: body.newname
            }
        })
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });

        res.json("c bon beaugosse");
    });

    app.get("/pokemon/listType", function (req, res) {
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("type")
        .find({})
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });
    });

    app.post('/pokemon/insertType', jsonParser, (req, res) => {
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("type")
        .insertOne({...body})
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });

        res.json("ok bg");
    });

    app.delete('/pokemon/deleteType', jsonParser, (req, res) =>{
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("type")
        .deleteOne({...body})
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });

        res.json("ciao beaugosse");
    });

    app.post('/pokemon/updateType', jsonParser, (req, res) =>{
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("type")
        .updateOne({
            name: body.prevname
        },{
            $set:{ 
                name: body.newname
            }
        })
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });
    });

// pokedex
 //list pokedex
 app.get("/pokemon/PokedexList", function (req, res) {
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("pokedex")
    .find({})
    .toArray(function (err, result) {
        if (err) {
        res.status(400).send("Error fetching pokemons!");
        } else {
        res.json(result);
        }
    });
   
});
    
    //insert pokedex
    app.post('/pokemon/insertPokedex', jsonParser, (req, res) => {
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("pokedex")
        .insertOne({...body})
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });
        
        res.json("oki bgl");
    });

    //delete pokedex
    app.post('/pokemon/deletePokedex', jsonParser, (req, res) =>{
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("pokedex")
        .deleteOne({...body})
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });

        res.json("ciaoooo beaugosse");
    });