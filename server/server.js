var express       = require('express');
var bodyParser    = require('body-parser');
var assert        = require('assert');
//var MongoClient     = require('mongoose').MongoClient;

const app         = express();

var MongoClient   = require('mongodb').MongoClient;
var morgan        = require('morgan');

var mongoose      = require('mongoose');
var User          = require('../model/User.js');
var config        = require('./config.js');
var jwt           = require('jsonwebtoken');


app.set('tokenSecret', config.secret);
//get info from posts
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json' }));
//logs requests to server
app.use(morgan('dev'));

//app.use('/', router);

//connect to database
mongoose.connect(config.database);


var routerSignUp        = express.Router();
var routerLoginIn       = express.Router();





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

  routerSignUp.get('/', function(req, res){
      res.send('Second Page');
      console.log('start of the other side');
      console.log(req.body);

  });

  routerSignUp.post('/', function(req,res){

    //res.send("works");
    //res.json(req.body);
    console.log("from the other side");
    console.log("first name: "+ req.body.firstName);
    console.log("last name: " + req.body.lastName);
    console.log("username: " + req.body.username);
    console.log("email: " + req.body.email);

    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName  = req.body.lastName;
    user.email     = req.body.email;
    user.password  = req.body.password;
    user.username  = req.body.username;

    user.save(function(err){

        if(err) throw err;

    })




  });


  routerLoginIn.get('/', function(req, res){

    User.find({
        username:req.body.username



    }, function(err, user){
      //res.json(user);


          if(err) throw err;

            if(!user){

                res.json({success: failed});

            }else if(user){
                  console.log("found");
                  if(user.password != req.body.password){

                    res.json({sucess: failed});
                  }else{



                    res.json({sucess:true});

                  }

            }



    });

    //res.send('Login Page');
    console.log('Login works');


});

  routerLoginIn.post('/',function(req,res){

    console.log('login page validation');
    //console.log(req.body.username)

    // User.findOne({
    //   //Fix to match right signup
    //   name: req.body.email
    //
    // }, function(err, user){
    //
    //
    //
    //
    // })



  });



  app.use('/insert', routerSignUp);
  app.use('/login', routerLoginIn);

  app.listen(3000,'192.168.1.5', () =>{
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
