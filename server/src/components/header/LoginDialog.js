import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { useState, useContext } from 'react'
import { AuthenticateUser } from '../../service/api'
import { DataContext } from '../../context/DataProvider'

const AccountInitialValues = {
  login:{
    view:'Login',
    heading:'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup:{
    view:'SignUp',
    heading:"Looks like you're new here!",
    subHeading: 'Sign up with your mobile number to get started'
  }
}
const SignupInitialValue = {
  FirstName: '',
  LastName: '',
  UserName: '',
  Email: '',
  Password: '',
  Phone: ''
}
const LoginDialog = ({open,setOpen}) => {

  const [account, setAccount] = useState(AccountInitialValues.login);
  const [signup, setSignup] = useState(SignupInitialValue);
  const {setAccountName} = useContext(DataContext);
  
  const HandleClose = () =>{
    setOpen(false);
    setAccount(AccountInitialValues.login);
  }
  const changeAccount = () =>{
    setAccount(AccountInitialValues.signup);
  }

  const OnInputChange = (e) =>{
    setSignup({...signup,[e.target.name]:e.target.value});
    console.log(signup);
  }

  const SignupUser = async()=>{
   let response = await AuthenticateUser(signup);
   if(!response) return;
   HandleClose();
   setAccountName(signup.FirstName);
  }

  return (
    <Dialog open={open} onClose={HandleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Component>
          <DialogLeft>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
          </DialogLeft>
          { 
          (account.view==='Login')?
            <DialogRight>
              <TextField variant="standard" label="Enter Email/Mobile number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{textAlign: 'center', color:'#878787'}}>OR</Typography>
              <RequestOtp>Request OTP</RequestOtp>
              <CreateAccount onClick={changeAccount}>New to Flipkart? Create an account</CreateAccount>
            </DialogRight>
            :
            <DialogRight>
              <TextField variant="standard" onChange={(e)=>OnInputChange(e)} name='FirstName' label="Enter Firstname" />
              <TextField variant="standard" onChange={(e)=>OnInputChange(e)} name='LastName' label="Enter Lastname" />
              <TextField variant="standard" onChange={(e)=>OnInputChange(e)} name='UserName' label="Enter Username" />
              <TextField variant="standard" onChange={(e)=>OnInputChange(e)} name='Email' label="Enter Email" />
              <TextField variant="standard" onChange={(e)=>OnInputChange(e)} name='Password' label="Enter Password" />
              <TextField variant="standard" onChange={(e)=>OnInputChange(e)} name='Phone' label="Enter Phone" />
              <LoginButton onClick={SignupUser}>Continue</LoginButton>
            </DialogRight>
          }
        </Component>
    </Dialog>
  )
}

export default LoginDialog


const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    display: flex;
  `;

  const DialogLeft = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width:32%;
    height: 86.2%;
    padding: 35px;
    & > p{
      font-weight: 600;
      color: #dbdbdb;
    } & >h5{
      font-weight: 600;
      color: #FFFFFF;
    }
  `;

  const DialogRight = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0px 25px;
    flex:1;
    & > div,& > Button,& > p{
      margin-top: 20px;
    }
  `;

  const LoginButton = styled(Button)`
    Background: #FB641B;
    color: #FFFFFF;
    height: 48px;
    text-transform: capitalize;
    border-radius: 2px;
  `;

  const RequestOtp = styled(Button)`
    Background: #FFFFFF;
    color: #2874f0;
    height: 48px;
    text-transform: capitalize;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  `;

  const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
  `;

  const CreateAccount = styled(Typography)`
    color: #2874f0;
    font-size: 14px;
    cursor: pointer;
    font-weignt: 600;
    text-align: center;
  `;
