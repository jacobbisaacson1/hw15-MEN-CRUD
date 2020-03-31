const mongoose = require('mongoose')
const databaseName = 'bruna-app'
const mongodbURI = 'mongodb://localhost:27017/' + databaseName

mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log(`connected to database ${mongodbURI}`);
})

mongoose.connection.on('disconnected', () => {
    console.log(`disconnected from database ${mongodbURI}`);
})

mongoose.connection.on('error', (err) => {
    console.log(`\nerror connecting to database ${mongodbURI}`);
    console.dir(err);
    console.log(err);
})

