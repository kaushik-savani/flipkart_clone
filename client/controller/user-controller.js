
import User from '../model/user_schema.js';

const userSignup = async(request,response) =>{
    try{

        const exist = await User.findOne({UserName: request.body.UserName});
        if(exist){
            response.status(401).json({message:"user already exist"});
        }
        const user = request.body;
        const NewUser = User(user);
        await NewUser.save();
        response.status(200).json({message:user});
    }catch(error){
        response.status(501).json({message: error.message});
    }
}

export default userSignup;

export const userLogin = async(request,response) =>{
    try{
        const username = request.body.LoginName;
        const password = request.body.Password;

        const user = await User.findOne({UserName: username,Password: password});
        if(user){
            return response.status(200).json({data:user});
        }else{
            return response.status(401).json(`Invalide Username or Password`);
        }
        
    }catch(error){
        response.status(500).json({message: error.message});
    }
}
