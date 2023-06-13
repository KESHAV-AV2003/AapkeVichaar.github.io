const express = require("express");
const path = require("path");
const port = 80;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// const document=require("document");

app.engine('html', require('ejs').renderFile);
app.get('/', function (req, res) {
    res.render(__dirname + '/views/index.html');
});
//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files -->
app.use(express.urlencoded({ extended: true }));


//HTML SPECIFIC STUFF
app.set('view engine', 'html'); //Set the template engine as pug
app.set('views', path.join(__dirname, '/views')); //Set the views directory

//END POINTS 
app.get('/home', (req, res) => {
    res.status(200).render('av2.html');
});
app.get('/about', (req, res) => {
    res.render('aboutus.html');
});
app.get('/inbox', (req, res) => {
    res.render('inbox.html');
});

app.get('/contact', (req, res) => {
    res.render('contactav.html');
});

app.get('/explore', (req, res) => {
    res.render('exploreav.html');
});
app.get('/gmail', (req, res) => {
    res.render('gmail.html');
});
function redirectToWebsite(url) {
    window.open(url, '_blank');
}
//Mail
function openMail() {
    window.location.href = 'mailto:kesrivastava18@gmail.com';
}


const openNav = document.getElementById('openNav');
const navbar = document.getElementById('navbar');

openNav.addEventListener('click', function() {
  if (window.innerWidth < 450) {
    navbar.classList.toggle('show');
  }
});

  



//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

