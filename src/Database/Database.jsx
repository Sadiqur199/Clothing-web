import React from 'react';
import mongoose from 'mongoose';


const configOptions = {
   useNewUrlParser : true,
   useUnifiedTopology : true
}


const Database = async() => {
   const connectionUrl = 'mongodb+srv://Ecommerce:4hj2PJGbDA7uhwsS@cluster0.ab4114m.mongodb.net/'
   ;(await mongoose.connect(connectionUrl,configOptions)).isObjectIdOrHexString(()=>console.log('Ecommerce Database Connected SuccessFully')).catch((error=> console.log(`Getting Error From DB Connection ${error.message}`)))
};

export default Database;