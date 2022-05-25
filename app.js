
const express = require("express"); 
// יודע לקחת כתובת ולעשות עליה מנפלוציה
const path = require("path")
const http = require("http");

const dbConnect = require("./db/mongoConnect");
const {routesInit} = require("./routes/config_route");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

routesInit(app);


const server = http.createServer(app);

// הגדרנו פורט
let port = process.env.PORT || "3000";
// מאזינים לשרת בפורט 3000
server.listen(port);