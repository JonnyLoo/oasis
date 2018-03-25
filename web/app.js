const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const firebase = require('firebase');
const config = {
  apiKey: "AIzaSyCuLUakHsInJvYDQdcciJuFiiOlyMypav0",
  authDomain: "oasis-6193d.firebaseapp.com",
  databaseURL: "https://oasis-6193d.firebaseio.com",
  projectId: "oasis-6193d",
  storageBucket: "oasis-6193d.appspot.com",
  messagingSenderId: "698503920080"
};
firebase.initializeApp(config);
const database = firebase.database();

function writeData(user, email, something, something_else) {
  database.ref('users/' + user).set({
    username: user,
    email: email,
    data: {
      something: something,
      something_else: something_else
    }
  });
}

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/dist'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('landing');
});

app.post('/register', (req, res) => {
  writeData(req.body.username, req.body.email, req.body.something, req.body.something_else);
  res.redirect('/');
});

console.log('connected');

app.listen(process.env.PORT || 4444);
