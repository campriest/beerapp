var express       = require('express');
var bodyParser    = require('body-parser');
var assert        = require('assert');
//var MongoClient     = require('mongoose').MongoClient;
var user          = require('../model/User.js');
const app         = express();
var router        = express.Router();
var MongoClient   = require('mongodb').MongoClient;


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({type: 'applicaiton/json'}));

//app.use('/', router);







// router.get('/', function(req, res){
//     res.json(console.log('works'));
//
// })


app.get('/', function(req, res){

    res.send("hello");
    console.log(req.body);
    console.log("works");
    res.end();
});


//app.get('/insert', function(req,res){


//   res.send('hello second page');
//
// });

  router.get('/', function(req, res){
      res.send('Second Page');
      console.log('start of the other side');

  });

  router.post('/', function(req,res){

    //res.send("works");
    res.json(req.body);
    console.log("from the other side");


  });

  app.use('/insert', router);

  app.listen(3000,'192.168.1.3', () =>{
    console.log('route working');
  });



module.exports = app;


//app.use('/api', router);
// router.route('/insert')
// .post(function(req, res){
//
//   app.listen(3000, () =>{
//     console.log('route working');
//   });
//
//
// });

// app.post('', (req, res) =>{
//
//     console.log(req.body);
// })

// app.listen(port, () => {
//
//   console.log('live on port' + port);
// });

// var db;
//
//
// MongoClient.connect('mongodb://ccp0501:seattle23@ds163826.mlab.com:63826/beer', function(err, database) {
//     if(err){
//         return console.log(err);
//         console.log('not working');
//       }
//
//         assert.equal(null, err);
//
//         db = database.db('beer');
//
//
//
//         // db.collection('beerusers').insertOne({
//         //     name: "Cameron",
//         //     lastName: "Priestley",
//         //     email: "cameronpriestley@gmail.com"
//         //
//         // })
//         // .then(function(result){
//         //
//         //
//         // });
//
//           app.listen(3000, () => {
//             console.log('listening on 3000 + connected to mongolab server');
//           })
//       //db.close();
//
//
//
//
//
//
//     // db.collection('beerusers').insertOne({
//     //
//     //   // var user = new User();
//     //   //
//     //   // user.email = req.body.email;
//     //   // user.firstName = req.body.firstName;
//     //   // user.lastName = req.body.lastName;
//     //
//     //
//     // }).then(function(result){
//     //
//     //
//     //
//     // });
//
//
//
//   // });
// });

//module.exports = router;
  // db.collection('beerusers').insertOne({
  //
  //
  //
  // })
  // .then(function(result){
  //
  //
  // });


    // db.collection('beerusers').save(req.body, function(err, result){
    //
    //
    //
    //     //console.log('saved into database');
    //
    //
    //     //res.direct('/');
    // });




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
