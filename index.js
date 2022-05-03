//Node:
/*
const http = require("http");
http
  .createServer((req, res) => {
    res.end("Hello World");
  })
  .listen(3000);
*/

//Express:
const express = require("express");
//morgan logger middleware:
const morgan = require("morgan");

//initialize express
const app = express();
//create server:

//requiring routes
const routes = require("./routes");
const routesApi = require("./routes-api");

//Settings:
app.set("appName", "My new server");
//template engine:
//console.log(__dirname + "/views");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Middlewares:
//morgan logger middleware -already have req res next by default
app.use(morgan("dev"));
app.use(morgan("short"));
app.use(morgan("combined"));
//self-made middleware
app.use(function (req, res, next) {
  console.log("request url:" + req.url);
  next();
});
//another self-made middleware
app.use((req, res, next) => {
  console.log("Just testing...");
  next();
});

//Routes
app.use(routes);
app.use("/api", routesApi);

//file not found - all non specific routes
app.get("*", (req, res) => {
  res.end("File not found");
});

//listen
app.listen(3000, function () {
  console.log("server OK");
  console.log("App Name: ", app.get("appName"));
});
