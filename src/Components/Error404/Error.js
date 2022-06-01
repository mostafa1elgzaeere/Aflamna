import React from 'react';
import Logo from "./logo.jpg";

function Error(props) {
    return (
                <div class="container">

<section class="section error-404 min-vh-50 d-flex flex-column align-items-center justify-content-center">
  <img src={Logo} class="img-fluid" alt="Page Not Found"  />

</section>

</div>
    );
}

export default Error;