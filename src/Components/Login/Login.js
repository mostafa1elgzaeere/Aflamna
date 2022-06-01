import Joi from 'joi';
import React, { useState } from 'react';

import { joiPassword } from 'joi-password';
import axios from 'axios';
import { useNavigate } from 'react-router';



// function Login({decodeToken}) {
function Login({decodeToken}) {

    let navigate=useNavigate();
    let [errormsg,setErrorMsgs]=useState({  // error from api
        stat:false,
        message:""
    })  // error from api

    let [joiErrors,setJoiErrors]=useState([])  // error from joi
    
    let [loadingButton,setLoadingButton]=useState(false) // loading while send data to api

    let [UserData,setUserData]=useState({      // user data
        email:"",
        password:""

    })




   async function Loginsubmit(e){
        e.preventDefault();

        let validate=validationForm();
        setLoadingButton(true)

        if (validate.error){
            setJoiErrors(validate.error.details);
            setLoadingButton(false)

        }
        else{
            let {data}= await axios.post("https://routeegypt.herokuapp.com/signin",UserData)
            
            if(data.message=="success"){
                setLoadingButton(false)
                localStorage.setItem("Token",data.token)


                decodeToken()
                
                navigate("/")

            }
            else{
                setErrorMsgs({stat:true,message:data.message})
                setLoadingButton(false)

            }
        }

    }

    

    function ChangeData(e){
      setJoiErrors([])      // beacouse when i write data after error is show , errors stay showin so i must clear that
      setUserData({...UserData,
            [e.target.name]:e.target.value
        })

    }


    let validationForm=(e)=>{
        let schema=Joi.object({
            email:Joi.string().email({tlds:{allow:['com', 'net']}}).required(),
            password:joiPassword.string().noWhiteSpaces().required().min(5)
        })

        return schema.validate(UserData,{abortEarly:false})
    }

    return (
        <div className='container mt-5 '>
            <div className='row justify-content-center align-items-center'>


                    <div className='col-md-8 col-12'>
                    <h2 className='text-light'>Login Form </h2>
                
                {joiErrors.map((err)=><h6 className='alert alert-danger'>{err.message}</h6>)}
                
                {errormsg.stat?<h6 className='alert alert-danger'>
                    {errormsg.message}
                </h6>:""}

            <form onSubmit={Loginsubmit} className="mb-5">
            <div class="mt-5 form-group">
                <input type="text" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={ChangeData} placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="mt-5 form-group">
                <input type="password" class="form-control" name='password' id="exampleInputPassword1" onChange={ChangeData} placeholder="Password"/>
            </div>
 
        <div className='d-flex  justify-content-end '>

            {loadingButton?<button type="submit" class="btn btn-danger mt-5 mr-1" disabled style={{position:"revert",cursor:"progress"}}><i class="fa fa-spinner fa-spin fa-2x" aria-hidden="true"></i></button>
                                :
                            <button type="submit" class="btn btn-danger mt-5 mr-1" style={{position:"revert"}}>Login</button>
                            
                            }
        

        </div>
            </form>
                    </div>



            </div>

              

        </div>
    );
}

export default Login;