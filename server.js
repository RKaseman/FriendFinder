
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");

var app = express();
var PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
