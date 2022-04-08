const mongoose = require('mongoose');
const db = "Task_Savvy";

mongoose.connect(`mongodb://localhost/${db}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log(`connected to ${db}`))
    .catch((error)=> console.log(`problem connecting to ${db}, error: ${error}`, error))