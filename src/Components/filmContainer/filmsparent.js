import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import {Card} from "react-bootstrap"
import "./filmsContainer.css"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';



function Filmsparent() {
  let [films,setFilms]= useState([])
  let [loading,setLoading]=useState(true)




  const fetch = async () => {
    await axios.get(`https://aflamnapi.herokuapp.com/api/${categorey}_films/`).then(res=>setFilms(res.data))

    setLoading(false)
  };



  let [categorey,setCategorey]=useState("trend") 


useEffect(()=>{


  fetch()

    
},[categorey])



    return (


      <>

{categorey=="trend" ?       

<div className=' text-light text-start pt-3 pb-3' style={{background:"#424242"}}>


      <span className='text-danger mx-3 h5 my-2' style={{"cursor":"pointer"}} onClick={()=>setCategorey("trend")} >Trend</span>
      <span className='text-light mx-3 h5 my-2' style={{"cursor":"pointer"}} onClick={()=>setCategorey("new")}>New</span>


</div> :    
<div className=' text-light text-start pt-3 pb-3' style={{background:"#424242"}}>


      <span className='text-light mx-3 h5 my-2' style={{"cursor":"pointer"}} onClick={()=>setCategorey("trend")} >Trend</span>
      <span className='text-danger mx-3 h5 my-2' style={{"cursor":"pointer"}} onClick={()=>setCategorey("new")}>New</span>


</div>
}









        <div className='container  text-center justify-content-center'>

        {loading?
        
<div class="spinner-grow text-light  mt-5 h3" role="status">
  <span class="sr-only">Loading...</span>
</div>:
            <div className='row justify-content-center align-items-center'>



<Swiper  
  breakpoints={{
    0: {
      width: 0,
      slidesPerView: 1,
    },
    768: {
      width: 768,
      slidesPerView: 2,
    },
    1200: {
      width: 1200,
      slidesPerView: 4,
    },
  }}
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper justify-content-center"
      >
          
        

     
            {films.map(item=>
              <SwiperSlide className="swip_card text-center justify-content-center">
              <Card style={{ width: '18rem',background:"unset" }} className="my-2 col-md-5 mx-2 col-lg-3 card_image" >
              <Link to={`/film/${item.id}`}  >
                             <Card.Img variant="top" src={item.image} height="420" />
                             </Link>

                            </Card>
                         
            </SwiperSlide>


                        

                
                )}
 </Swiper>





        </div>
    }

         

    


            
        </div>

        </>
    );
}

export default Filmsparent;

