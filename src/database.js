const mongoose = require("mongoose");

//Scos password din mongodb atlas 
const url = "mongodb+srv://saftoiuana23:<password>@anaproject.itrzbwh.mongodb.net/smsdb?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }).then(() => {
    console.log('Db este conectata')
  }).catch((err) => console.log('Conectare reusita : =', err));