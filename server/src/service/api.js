import axios from 'axios';

const URL = "http://localhost:8000";

export const AuthenticateUser = async(data)=>{
    try{
        await axios.post(`${URL}/signup`,data)
    }catch(error){
        console.log("Error while calling signup api",error);
    }
}