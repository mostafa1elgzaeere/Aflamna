import "./Home.css"
import React from 'react';
import Splash from '../spalsh/Splash';
import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Filmsparent from "../filmContainer/filmsparent";
import Blog from "../blogs/blog";
import Footer from "../Footer/Footer";



function Home({props}) {
    let [slpash,setSplash]=useState(true)




    setTimeout(()=>{
      setSplash(false)
    },7000)
  

    let [overlay,setOverlay]=useState(true)








    return (
<div>

        
{slpash?<div className='splash_parent' style={{paddingTop:"20%",paddingLeft:"40%" , height:'600px'}}>


  <Splash/>
</div> : 

<div>

    <div style={{height:"700px"}}>

            {overlay?<div className="" style={{height:"100%"}}> 
            <img width="100%" className="immg" alt="" height="100%" src="https://wallup.net/wp-content/uploads/2019/09/228296-batman-movies-movie-posters-batman-the-dark-knight-rises.jpg" />

            <p className="danger watch-home" onClick={()=>setOverlay(!overlay)}><FontAwesomeIcon icon={faPlayCircle} size="2xl" className="text-light mb-5 mr-5" style={{"marginRight":"80px"}} /></p>
       
 </div>
            :     <div className="overlay-home mt-5">
                
                <p className="exit-overlay-home" onClick={()=>setOverlay(!overlay)}>X</p>
                <iframe width="99%" height="80%" className="my-5" src="https://www.youtube.com/embed/DjffIi2Pl7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                </div>
                }
          
            </div>



            <Filmsparent/>
<Blog/>
<Footer/>

</div>
}


        </div>
    );
}

export default Home;