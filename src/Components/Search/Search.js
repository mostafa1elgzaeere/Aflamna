import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Search.css"
import AOS from'aos';
// import { Link } from 'react-router-dom';
import{Card} from "react-bootstrap"
import {Link} from "react-router-dom"

function Search(props) {

    let [loading,setLoading]=useState(true)


    const fetch = async () => {
        await axios.get(`https://aflamnapi.herokuapp.com/api/all_films/`) .then((response) => {
            setAPIData(response.data);
            setFilteredResults(response.data)
        })

        setLoading(false)
      };
    

      

  AOS.init({
    offset: 100,
    duration: 100});

    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    useEffect(() => {
      fetch()
    }, [])

const [searchInput, setSearchInput] = useState('');



const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = APIData.filter((item) => {
            setLoading(true)
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
        setLoading(false)
    }
    else{
        setFilteredResults(APIData)
        setLoading(false)

    }
}



    return (

        <div className='containersearch container'>
<div className='container my-5'>
<div className='row justify-content-end'>
        <div className='search-group col-md-6 col-10 mx-5'>
                  <input class="form-control form-control-md" type="text" placeholder="Search.." onChange={(e) => searchItems(e.target.value)} />
            </div>
      </div>

</div>


{loading?
        
        <div class="spinner-grow text-danger text-center d-flex mt-5 h3" style={{"position":"absolute" ,"left":"50%"}} role="status">
          <span class="sr-only">....</span>

        </div>:

<div className='images row justify-content-center my-5'>

            {filteredResults.map(item=>




            <Card style={{ width: '18rem',background:"unset" }} className="my-2 col-md-5 mx-2 col-lg-3 card_image">
                <Link to={`/film/${item.id}`}  >

            <Card.Img variant="top" src={item.image} />
            </Link>

            </Card>

            )}


</div>
}


        </div>
    );
}

export default Search;