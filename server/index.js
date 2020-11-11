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

/*routes

get
/api/magic 
all 
/api/magic/<uid> 
on success: data (all
on failure: 404 resource not found

post
/api/magic
--> verify client not exceeding max 3 potions per month
on success: 201 created 
{ id: uid }
on failure: error

patch
/api/magic
{
"id": uid, "fulfilled": bool
}
on success: 200 || 204 "resource updated successfully"
on failure: 404 "resource not found"

delete
/api/magic/<uid>
on success: 200 || 204 "resource deleted successfully"
on failure: 404 "resource not found"

*/