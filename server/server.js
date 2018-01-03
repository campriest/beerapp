
var express       = require('express');
var assert        = require('assert');
//var MongoClient     = require('mongoose').MongoClient;
var bodyParser    = require('body-parser');
var user        = require('../model/User.js');
const app         = express();
var MongoClient   = require('mongodb').MongoClient;
const port     = 8000;

app.use(bodyParser.urlencoded({extended: true}))


// app.post('', (req, res) =>{
//
//     console.log(req.body);
// })

// app.listen(port, () => {
//
//   console.log('live on port' + port);
// });

var db;


MongoClient.connect('mongodb://ccp0501:seattle23@ds163826.mlab.com:63826/beer', function(err, database) {
    // if(err){
    //     return console.log(err);
    //     console.log('not working');
    //   }

      assert.equal(null, err);

        db = database.db('beer');

        // db.collection('beerusers').insertOne({
        //     name: "Cameron",
        //     lastName: "Priestley",
        //     email: "cameronpriestley@gmail.com"
        //
        // })
        // .then(function(result){
        //
        //
        // });

          app.listen(3000, () =>{
            console.log('listening on 3000 + connected to mongolab server');
      })
      //db.close();



app.post('/insert', function(req, res){

  var user = new User();

  user.email = req.body.email;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;


  // db.collection('beerusers').insertOne({
  //
  //
  //
  // })
  .then(function(result){


  });


    // db.collection('beerusers').save(req.body, function(err, result){
    //
    //
    //
    //     //console.log('saved into database');
    //
    //
    //     //res.direct('/');
    // });


});


});

// app.post('/', (req, res) => {
//     db.collection('quotes').save(req.body, (err, result) => {
//
//         if(err){
//             return console.log(err);
//         }
//         res.redirect('/');
//     })
// })




// mongoose.connect('mongodb://localhost/');
//
// mongoose.connect.on('error', function(){
//     console.info('Error: Could not connect to MongoDB')
//
// });
