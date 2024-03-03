const express = require ("express")
const mongoose = require ("mongoose")
const cors = require('cors');
const api=require('./routes/api')
require('dotenv').config();
const app = express()


mongoose
  .connect(process.env.MONGO_DB_URI,{
    useNewUrlparser:true,
    useUnifiedTopology:true
  })
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error));


const port = 3001;

app.use(express.json())
app.use('/api', api);


app.listen(port, () => {
    console.log("server stared");

})


module.exports = app;