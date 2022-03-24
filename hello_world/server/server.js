const express = require("express");
const app = express();
const port = 8000;

require('./routes/person.routes')(app); 
//could use this notation:
//const PersonRoutes = require('./routes/person.routes');
//PersonRoutes(app);

app.listen(port, ()=> console.log(`you are on port ${port}`))