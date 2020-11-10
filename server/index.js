const express = require('express');
const app = express();
const port = 3000;
const DIST_DIR = path.resolve(__dirname, '..', 'client', 'dist');

app.use(express.static(DIST_DIR));

app.listen(port, () => console.log(`do you come in, port ${port}`));