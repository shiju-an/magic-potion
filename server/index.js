const express = require('express');
const app = express();
const path = require('path');
const DIST_DIR = path.resolve(__dirname, '..', 'client', 'dist');
const bodyParser= require('body-parser');
const Controller = require('./Controller.js');
const port = process.env.PORT || 3000;

app.use(express.static(DIST_DIR));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/api/magic/:id', Controller.getOrder);

app.post('/api/magic', Controller.saveOrder);

app.patch('/api/magic/:id', Controller.updateOrder);

app.delete('/api/magic/:id', Controller.deleteOrder);

app.use((req, res, next) => {
  res.redirect("/")
});

app.listen(port, () => console.log(`do you come in, port ${port}`));
