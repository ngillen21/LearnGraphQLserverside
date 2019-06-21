const express = require('express');
const app = express();
const graphqlHTTP = require ('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
console.log('Server starting...');

//allow cross-origin requests
app.use(cors());


mongoose.connect('mongodb+srv://nick:a3oralUm@testcluster0-ohzcb.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true});
mongoose.connection.once('open',()=>{
    console.log('connected to database')
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(3500, ()=> {
    console.log('Now listening on port 3500');
}); 
