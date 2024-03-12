const mongoose = require('mongoose')
MONGO_DB_URL=process.env.MONGO_DB_URL
mongoose.connect(MONGO_DB_URL,{
    dbName:'WeatherAppDB'
})
.then(()=>{
    console.log('Mongo db connected succesfully')
})
.catch(err=>{
    console.log('error on connecting'+err)
})