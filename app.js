const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser')
const routes = require ('./Routes/index');



const port = 5500;
const hostname = 'localhost';
const dbUrl = 'mongodb://127.0.0.1:27017/FOODDETAILS';
const DB = 'mongodb+srv://Rajeev56:sBXBDG7pMs1Jj3Nr@cluster0.vsqjcqa.mongodb.net/zomato_db56R?retryWrites=true&w=majority'



const app = express();

app.use(bodyParser.json())
app.use ('/', routes);

mongoose.connect(dbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
})

.then( res => {
    app.listen(port, hostname, () => {
        console.log(`Server is running at ${hostname}:${port}`)
    });
})
.catch(err => console.log(err));