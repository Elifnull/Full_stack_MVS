const mongoose = require('mongoose');
const petdb = "Task_Savvy";

mongoose.connect(`mongodb://localhost/${petdb}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log(`connected to ${petdb}`))
    .catch((error)=> console.log(`problem connecting to ${petdb}, error: ${error}`, error))