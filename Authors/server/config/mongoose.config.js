const mongoose = require('mongoose');//this is the basic framework for a mongoose connection
const database = "Books";

mongoose.connect(`mongodb://localhost:/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`established connection to ${database}`))
    .catch((err) => console.log(`soemthing went wrong error: ${err}`, err));