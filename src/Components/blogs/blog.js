import React from 'react';
import {Card,Button} from "react-bootstrap"

function Blog(props) {
    return (
                    <div className='my-5 '>


<div className='row justify-content-center align-items-center'>

  <div className='w-300 p-3 mb-5 text-light'  style={{background:"#424242"}}>
      <h5 className='mx-5'> Blogs </h5>
  </div>
  



                
<Card style={{ width: '22rem' ,background:"unset" }} className="mx-3 my-2 ">
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
  <Card.Body className='bg-secondary'>
    <Card.Title className='text-light'>Future Plans </Card.Title>
    <Card.Text className='text-dark'>
      Some quick example text to build on the Blog 1 and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="danger">Read More</Button>
  </Card.Body>
</Card>


<Card style={{ width: '22rem' ,background:"unset" }} className="mx-3 my-2">
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
  <Card.Body  className='bg-secondary'>
    <Card.Title className='text-light'>Expansions & Ambitions</Card.Title>
    <Card.Text className='text-dark'>
      Some quick example text to build on the Blog 2 and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="danger">Read More</Button>
  </Card.Body>
</Card>


<Card style={{ width: '22rem' ,background:"unset" }} className="mx-3 my-2">
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1543242594-c8bae8b9e708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
  <Card.Body className='bg-secondary'>
    <Card.Title className='text-light'>Suggestions & Opinions</Card.Title>
    <Card.Text className='text-dark'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="danger">Read More</Button>
  </Card.Body>
</Card>


</div>





</div>
    );
}

export default Blog;