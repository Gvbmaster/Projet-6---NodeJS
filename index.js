    const express = require("express");
    const bodyParser= require('body-parser');
    const jsonParser = bodyParser.json();
    const dbo = require("./db/db");
    const app = express();
    const port = 4444;

    dbo.connectToServer();

    app.get("/", function (req, res) {
    res.send("Hello World!");
    });

    app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
    });

    /* index.js code before... */
    app.get("/pokemon/list", function (req, res) {
        //on se connecte à la DB MongoDB
        const dbConnect = dbo.getDb();
        //premier test permettant de récupérer mes pokemons !
        dbConnect
        .collection("list")
        .find({}) // permet de filtrer les résultats
        /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching pokemons!");
            } else {
            res.json(result);
            }
        });
        app.use(bodyParser.urlencoded({ extended: true }));

        app.post('/pokemon/insert', jsonParser, (req, res) => {
            const body = req.body;
            const dbConnect = dbo.getDb();
            console.log('Got body:', body);
            var name = body.name
            dbConnect
                .collection("list")
                .insertOne({
                    name:name
                })
            //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
            res.json("A bien étais ajouté");
        
        });
        /*
        Bref lisez la doc, 
        il y a plein de manières de faire ce qu'on veut :) 
        */
        
    });