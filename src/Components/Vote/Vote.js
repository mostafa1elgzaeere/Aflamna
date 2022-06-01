import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faHome, faPlay, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import swal from 'sweetalert';
import AOS from'aos';
import "./Vote.css"



function Vote(props) {


    let elem1=useRef()
    let elem2=useRef()
    let elem3=useRef()
    let elem4=useRef()
    let elem5=useRef()


    let [clicked,setClicked]=useState(false)
 

    
let getprogress=(e)=>{
    if(!clicked){
        swal({
            title: "Great Choice !",
            text: `You have voted for ${e} !`,
            icon: "success",
          });

          setClicked(true)
    }
    else{
        swal({
            title: "oooops !",
            text: `You are voted before  !`,
            icon: "warning",
          });
    }
    

  elem1.current.style.height="70px"
  elem2.current.style.height="120px"
  elem3.current.style.height="200px"
  elem4.current.style.height="50px"
  elem5.current.style.height="130px"
}


    return (
        <div className='container mb-5'>
      <p className="new text-light my-5 mx-5 h4" > Vote For The Film  </p>

<div className='voteparent justify-content-center' data-aos={"fade-out"}>

    <div className='voteprogress'>
                <div className='onee'  ref={elem1}>
                </div>


                <div  className='twoo'  ref={elem2}>    
                </div>
                
                
                <div  className='threee'  ref={elem3}>
                </div>
                
                
                <div  className='fourr'  ref={elem4}>
                </div>

                <div  className='five'  ref={elem5}>
                </div>

    </div>
  

    <div className='votefilms'>
                <div className='N-one'  onClick={()=>getprogress("Oxygen")}  >
                Oxygen
                </div>


                <div  className='N-two'  onClick={()=>getprogress("The Manor")}>    
                The Manor
                </div>
                
                
                <div  className='N-three' onClick={()=>getprogress("Infinite")}>
                Infinite
                </div>
                
                
                <div  className='N-four' onClick={()=>getprogress("Hypnotic")}>
                Hypnotic
                </div>

                <div  className='N-five' onClick={()=>getprogress("Below Zero")}>
                Below Zero
                </div>
                
    </div>



</div>
            
            
        </div>
    );
}

export default Vote;