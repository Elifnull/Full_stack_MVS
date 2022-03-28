const express = require("express");
const cors = require('cors');
const port = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require('./routes/author.routes')(app);
require('./config/mongoose.config');

app.listen(port, () => console.log(`listening in on port ${port}`));