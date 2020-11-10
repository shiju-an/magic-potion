const express = require('express');
const app = express();
const path = require('path');
const DIST_DIR = path.resolve(__dirname, '..', 'client', 'dist');
const port = 3000;

app.use(express.static(DIST_DIR));

app.use((req, res, next) => {
  res.redirect("/")
});

app.listen(port, () => console.log(`do you come in, port ${port}`));