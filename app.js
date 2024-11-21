const express = require ('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;


//Setup view engine
app.set("views", "./views");
app.set("view engine", "ejs");

//middleware is the high level function - part of express
//middleware to serve static files
app.use(express.static('public/images'));

//Router handler that renders the view
app.get("/", (req, res) => {
    res.render('home');
});

//Listening on port 8080
app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
});
