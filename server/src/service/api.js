import axios from 'axios';

const URL = "http://localhost:8000";

export const AuthenticateUser = async(data)=>{
    try{
        return await axios.post(`${URL}/signup`,data);
    }catch(error){
        console.log("Error while calling signup api",error);
        return error.response;
    }
}

export const AuthenticateLogin = async(data) =>{
    try{
        const response = await axios.post(`${URL}/login`, data);
        return response;
    }catch(error){
        console.log('error while fetch login api');
        return error.response;
    }
}