
const express = require("express");
const cors = require('cors');
const port = 8000;

const app = express();
app.use(express.json());//this allows json objects to be posted!!!
app.use(express.urlencoded({ extended: true })); //extended allows objectes with strings and arrays
app.use(cors());


require('./config/mongoose.config');
require('./routes/person.routes')(app); 
//could use this notation:
//const PersonRoutes = require('./routes/person.routes');
//PersonRoutes(app);

app.listen(port, ()=> console.log(`you are on port ${port}`))