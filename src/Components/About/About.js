import React from 'react';

function About(props) {
    return (
        <div className='container bg-dark text-light p-5  my-5'>
            
            
            <div className='overview container'>
                <h2>OverView</h2>
                <p>Our business has never been just about the technical results. From day one, it’s been about relationships. From our original three founders to the more than forty professionals contributing daily to our success, a shared respect for ingenuity and an unwavering sense of accountability unites us. With this simple creed, Nextrio has been fortunate to attract some of the industry’s best and brightest minds to work with inspirational clients.</p>
            </div>


        <hr></hr>

            <div className='overview container'>
                <h2>Our History</h2>
                <div className='row'>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className='col-lg-2 col-md-6 col-12 mt-2' />
                    <p className='col-lg-10 col-md-6 col-12 mt-2'>Our business has never been just about the technical results. From day one, it’s been about relationships. From our original three founders to the more than forty professionals contributing daily to our success, a shared respect for ingenuity and an unwavering sense of accountability unites us. With this simple creed, Nextrio has been fortunate to attract some of the industry’s best and brightest minds to work with inspirational clients.</p>

                </div>
            </div>


        <hr></hr>

        <div className='overview container'>
                <h2>Our Team</h2>
                <div className='row'>
                    <img  title="Maha" src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='col-lg-3 col-md-6 col-12 mt-2 card_image' />
                    <img  title="Mostafa" src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='col-lg-3 col-md-6 col-12 mt-2 card_image' />
                    <img  title="Sayed"src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='col-lg-3 col-md-6 col-12 mt-2 card_image' />
                    <img  title="Carla" src="https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='col-lg-3 col-md-6 col-12 mt-2 card_image' />
                </div>
            </div>


        </div>
    );
}

export default About;


