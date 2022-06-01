import axios from 'axios';
import React, { useState  } from 'react';
import Joi from 'joi';
import { joiPassword } from 'joi-password';
import { useNavigate } from 'react-router-dom';


function Register() {


    let navigate=useNavigate()

    let [Allert,setAllert]=useState({
        stat:false,
        message:""
    })
    
    let [errormsgs,setErrorMsgs]=useState([])

    let [dataloading,setDataLoading]=useState(false)



    let [UserData,setUserData]=useState({
        first_name:"",
        last_name:"",
        age:"",
        email:"",
        password:""

    })


    // validation
    let validationForm=()=>{

        let schema=Joi.object({
            first_name:Joi.string().alphanum().min(3).max(15).required(),
            last_name:Joi.string().alphanum().min(3).max(15).required(),
            age:Joi.number().min(12).max(65).required(),
            email:Joi.string().email({tlds:{allow:['com', 'net']}}).required(),
            password:joiPassword.string().minOfLowercase(1).minOfUppercase(1).noWhiteSpaces().required()

        })

        return schema.validate(UserData,{abortEarly:false})
        




    }


    
   async function SubmitRegisterData(e){
        e.preventDefault()
        setDataLoading(true)
        
        let validate=validationForm(); 
        

        if(validate.error){
           setErrorMsgs(validate.error.details)
           setDataLoading(false)
        }
        else{
           
        let {data} = await axios.post("https://routeegypt.herokuapp.com/signup",UserData);

        if (data.message=="success"){
                setDataLoading(false)
                navigate('/login')
        }

        else{
            setAllert({stat:true,message:data.message})
            setDataLoading(false)

        }

    }

       

     
    }






    let ChangeData=(e)=>{
        setUserData({...UserData,   // to get all object , without spreed operator will return last (key) only 
            [e.target.name]:e.target.value})

    }

    return (
     
        <div className='container mt-5'>
                <h2 className='text-light mb-4 mx-3'>Registeration Form </h2>

                <div className='row justify-content-center'>
                        <div className='col-md-8 col-12'>


                                
                            {Allert.stat?<div class="alert alert-danger d-flex justify-content-between pb-1 pt-1" role="alert">
                                            <h6 class="alert-heading pl-2">{Allert.message}</h6>
                                            <span aria-hidden="true" className='h4' style={{cursor:"pointer"}} onClick={()=>setAllert({stat:false,message:""})}>&times;</span>

                                        </div>:""
                            }
                

                            {errormsgs.map((item)=> <div class="alert alert-danger d-flex justify-content-between pb-1 pt-1" role="alert">
                                            <h6 class="alert-heading pl-2">{item.message}</h6>
                                        </div>
                                        )}

                        <form onSubmit={SubmitRegisterData}>

                        <div class="form-group mt-5">
                            <input type="text" class="form-control" id="first_name"  placeholder="First Name"  onChange={ChangeData} name='first_name' />
                        </div>


                        <div class="form-group mt-5">
                            <input type="type" class="form-control" id="last_name" name='last_name'  onChange={ChangeData} placeholder="Last Name" />
                        </div>

                        <div class="form-group mt-5">
                            <input type="number" class="form-control" id="FirstName" name='age'  onChange={ChangeData} placeholder="Age" />
                        </div>

                        <div class="form-group mt-5">
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"  onChange={ChangeData} name='email' placeholder="Email" />
                        </div>


                        <div class="form-group mt-5">
                            <input type="password" class="form-control" id="Password" name='password' onChange={ChangeData} placeholder="Password"/>
                        </div>

                    
            
                    <div className='d-flex  justify-content-end mr-2'>


                        <button type="submit" class="btn btn-danger mt-5 mb-3 mr-2`" style={{position:"revert"}} >
                                        {dataloading?<i class="fa fa-spinner fa-2x fa-spin" aria-hidden="true"></i>:"Register"}
                                    </button>

                    </div>
                        </form>




                        </div>


                </div>
               
        </div>
    );
}

export default Register;