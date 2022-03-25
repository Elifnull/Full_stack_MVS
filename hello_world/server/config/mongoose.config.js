const mongoose = require('mongoose');
const database = "crmdb";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`established connection to ${database}`))
    .catch((err) => console.log("something went wrong with connection to DB", err));
