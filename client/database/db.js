import mongoose from 'mongoose'

export const connection = async(username,password)=>{

    const URL = `mongodb+srv://${username}:${password}@cluster0.lcjiogf.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true});
        console.log('database connected');
    }catch(error){
        console.log('Error while connecting database',error.message);
    }
}

export default connection