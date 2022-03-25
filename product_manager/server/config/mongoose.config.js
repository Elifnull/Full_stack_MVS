const mongoose = require('mongoose');
const database = "Product_manager";

mongoose.connect(`mongodb://localhost:/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`established connection with ${database}`))
    .catch( err => console.log(`something went wrong error: ${err}`,err));