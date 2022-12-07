    const express = require("express");
    const bodyParser= require('body-parser');
    const jsonParser = bodyParser.json();
    const dbo = require("./Back/db/db");
    const app = express();
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

    const callBackCustom = (err, result)  =>{
        if (err) {
            res.status(400).send("Err.message!");
        }{}
        res.json(result);
    };
    
    app.post('/pokemon/insert', jsonParser, (req, res) => {
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("list")
        .insertOne({...body})
        .then(callBackCustom)
        
        res.json("ok bg");
    });
    
    app.listen(port, function () {
        console.log(`App listening on port ${port}!`);
    });
    
    app.post('/pokemon/delete', jsonParser, (req, res) =>{
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("list")
        .deleteOne({...body})
        .then(callBackCustom)

        res.json("ciao beaugosse");
    })

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
        .then(callBackCustom)

        res.json("c bon beaugosse");
    })

    app.get("/pokemon/listType", function (req, res) {
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("type")
        .find({})
        .then(callBackCustom)
    });

    app.post('/pokemon/insertType', jsonParser, (req, res) => {
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("type")
        .insertOne({...body})
        .then(callBackCustom)

        res.json("ok bg");
    });

    app.post('/pokemon/deleteType', jsonParser, (req, res) =>{
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("type")
        .deleteOne({...body})
        .then(callBackCustom)

        res.json("ciao beaugosse");
    })

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
        .then(callBackCustom)

        res.json("c bon beaugosse");
    })

// pokedex
 //list pokedex
 app.get("/pokemon/listPokedex", function (req, res) {
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
    
    //insert pokedex
    app.post('/pokedex/insertPokedex', jsonParser, (req, res) => {
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("pokedex")
        .insertOne({...body})
        .then(callBackCustom)
        
        res.json("oki bgl");
    });

    //delete pokedex
    app.post('/pokemon/deletePokedex', jsonParser, (req, res) =>{
        const body = req.body;
        const dbConnect = dbo.getDb();
        dbConnect
        .collection("pokedex")
        .deleteOne({...body})
        .then(callBackCustom)

        res.json("ciaoooo beaugosse");
    });
});