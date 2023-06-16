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

//side navbar
function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    var sideNav = document.getElementById("mySidenav");
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
        sideNav.style.width = "0"; // Set the width of sideNav to 0 to hide it
    }
}

function closeNav() {
    var sideNav = document.getElementById("mySidenav");
    sideNav.style.width = "0"; // Set the width of sideNav to 0 to hide it
}
//login
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
  



//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

