
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