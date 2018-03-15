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

app.get('*', function(req, res) {
  const { readdirSync, statSync } = require('fs')
const { join } = require('path')

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
console.log(dirs(__dirname));

  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);

// export default app;
