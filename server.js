var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev');

const env = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 8000;

if (env === 'production') {
  config = require('./webpack.prod');
}

var app = express();
app.set('port', port);

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/build/app.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'app.js'));
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);

// export default app;
