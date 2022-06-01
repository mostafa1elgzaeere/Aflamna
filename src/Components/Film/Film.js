import React from 'react';
import "./Film.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm,  faStar} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

setTimeout(()=>{
  window.scrollTo(0, 0)
},20)


function Film({userDataObject}) {

  const {id} = useParams();




  let [film,setFilm]=useState({})
  let [commetnss,setComments]=useState([])


  let [loading,setLoading]=useState(true)

    
 
  const fetch = async () => {

    let data=  await axios.get(`https://aflamnapi.herokuapp.com/api/all_films/${id}/`)
    setFilm(data.data)
    setLoading(false)
    setComments(data.data.comments)
  };


  useEffect(()=>{
    
    fetch()    

  },[commetnss])






  let addComment = (e)=>{   // add comment to all comments list 
    e.preventDefault()
      axios.post("https://aflamnapi.herokuapp.com/api/comments/",{
        "writer": 1,
        "film":id,
        "content": (e.target[0].value)
      })
      e.target[0].value=""
  }

  
  
let stars=()=>{
  if (film.rate==5) {
    return (<span> <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon> 
                  <FontAwesomeIcon className="text-warning" icon={faStar}></FontAwesomeIcon> 
                  <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon> 
          </span>
)    }
  else if (film.rate==4) {
    return (<span> <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon> 
                  <FontAwesomeIcon className="text-warning" icon={faStar}></FontAwesomeIcon> 
            </span>)
  }
  else if (film.rate==3) {
    return (<span> <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
                   <FontAwesomeIcon className="text-warning" icon={faStar}></FontAwesomeIcon> 
            </span>)
  }
  else if (film.rate==2) {
    return (<span> <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
            </span>)
  }
  else {
    return (<span> <FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>
            </span>)
  }

}



    return (
        <div className='Poster_desc mt-5 container text-light justify-content-center '>

        

            <div className='col-sm-12 col-md-3 mx-2 my-5'>
            <img width="100%" className="immg" height="100%" src={film.image} />

            </div>




            <div className='col-sm-12 col-md-6 mt-4 description_parent '>
            <div className="card text-left fake_card w-100 text-light bg-transparent" style={{cursor:"auto"}}>
              <div className="card-body">
                <h4 className="card-title"> </h4>
                <p className="card-text">  </p>
                <p className="card-text">   </p>
             
                            
 
              </div>
            </div>
            <div className="card text-left w-100 text-light bg-dark real_card my-5" >
              <div className="card-body">
                <h4 className="card-title text-light">Title :  {film.title}</h4>
                <p className="card-text">Description : {film.description}  </p>
             
                             <p className="card-text">Rate : {stars()} </p>
 
              </div>
            </div>


            </div>




        <div className='video_parent container mt-5 mb-5'>
              <h2 className='mb-2 pr-2'>Trailer </h2>
            <iframe width="100%" className='mt-2' height="345" src={film.trailer}>
            </iframe>
        </div>


        <div className='video_parent container mt-5'>
              <h2 className='mb-2 pr-2'>Watch Film <FontAwesomeIcon icon={faFilm} color='white' size="1x" className="ml-1" /></h2>
            <iframe width="100%" className='mt-2' height="545" src={film.video}>
            </iframe>
        </div>

            

            <div className='comments mt-5'>
            <div className="container mt-5">
  <div className="row">
    <h2 className="page-header mb-5">Comments </h2>

    {loading?"loading ... ":   <>
    
    {commetnss.map(item=>
    <div className='grand'>

      <div  className="comment-list container">
                 <article className="row">

         <div className="col-md-1 col-sm-2 hidden-xs">
            <figure className="thumbnail">
              <img className="img-responsive" src="http://www.tangoflooring.ca/wp-content/uploads/2015/07/user-avatar-placeholder.png" />
            </figure>
         </div>
                   <div className="col-md-10 col-sm-10">
             <div className="panel panel-default arrow left">
                 <div className="panel-body">
                 <header className="text-left">
                 </header>
                 <div className="comment-post">
                   <p>
                       {item.content}
                   </p>
                 </div>
               </div>
             </div>
             </div>

</article>
 <hr className='bg-light'></hr>

      </div>
      
      </div>
)}
    
    </>
//       <div className="col-md-8">
    

    
     
//    { commetnss.map((item)=>{

//     <div>
//      <section className="comment-list">
//         <article className="row">
//           <div className="col-md-2 col-sm-2 hidden-xs">
//             <figure className="thumbnail">
//               <img className="img-responsive" src="http://www.tangoflooring.ca/wp-content/uploads/2015/07/user-avatar-placeholder.png" />
//               <figcaption className="text-start">{item.writer}</figcaption>
//             </figure>
//           </div>
//           <div className="col-md-10 col-sm-10">
//             <div className="panel panel-default arrow left">
//               <div className="panel-body">
//                 <header className="text-left">
//                   <time className="comment-date" ><i className="fa fa-clock-o"></i> Dec 16, 2014</time>
//                 </header>
//                 <div className="comment-post">
//                   <p>
//                       {item.content}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </article>


//       </section>

// <hr className='bg-light'></hr>
//     </div>
//   })} 


  






//   </div>}
    }
  </div>
</div>


            </div>




        <form className='form w-100 mb-5' onSubmit={addComment}>
        <div className="form-group w-100 h-50">
          <input className='form-control w-100 add_comment' type={"text"} placeholder="Write Your Comment ... " />
          {userDataObject? <input className='btn btn-dark mt-2 mb-5 my-2' type={"submit"} value="Send Comment"  />
 :
 
 <input className='btn btn-dark text-muted mt-2 mb-5 my-2' type={"click"} defaultValue="You must Login First "  />
}
        </div>
        </form>



        </div>
    );
}

export default Film;