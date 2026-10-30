
var express = require('express');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);

// Gestion des routes inexistantes
app.use(function(req, res) {
  res.status(404).json({ error: 'Route not found' });
});

// Gestion des erreurs
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    error: 'Server error'
  });
});

module.exports = app;
