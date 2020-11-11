const express = require('express');
const app = express();
const path = require('path');
const DIST_DIR = path.resolve(__dirname, '..', 'client', 'dist');
const bodyParser= require('body-parser');
const Controller = require('./Controller.js');
const port = 3000;

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

/*routes

get
/api/magic 
all orders --> list of all orders
/api/magic/<uid> 
--> get certain order
on success: data (all
on failure: 404 resource not found

post
/api/magic
--> verify client not exceeding max 3 potions per month
--> post certain order
on success: 201 created 
{ id: uid }
on failure: error

patch
/api/magic
{
"id": uid, "fulfilled": bool
}
--> update certain order 
on success: 200 || 204 "resource updated successfully"
on failure: 404 "resource not found"

delete
/api/magic/<uid>
--> delete certain order
on success: 200 || 204 "resource deleted successfully"
on failure: 404 "resource not found"

*/
