const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const env = require('./env.json');
const path = require('path');

const DISTR_PATCH = path.resolve(env.distr_path);

app.use(express.static(DISTR_PATCH));


/* Load https certificates */
var key = fs.readFileSync(env.priv_key, 'utf8');
var cert = fs.readFileSync(env.pub_key, 'utf8');

var https_options = {
  key: key,
  cert: cert
};

app.get('/config', (req, res, next) => {
  res.json({server_url: env.backend_url});
  next();
});


app.get(/.*/, function root(req, res) {
  res.sendFile(`${DISTR_PATCH}/index.html`);
});

/* Start https server */

https.createServer(https_options, app).listen(env.port, env.url);

console.info("Server is running on port: " + env.port);