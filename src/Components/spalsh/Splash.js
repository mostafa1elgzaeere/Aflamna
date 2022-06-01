import React from 'react';
import ReactLoading from 'react-loading';
 



function Splash() {
    
 
    return (
        <div>
    <div className="splash">
 
  <div className="cursor">
  </div>
  <div className="inner-cursor container">         </div>
</div>
    
            <ReactLoading type={"bars"} color={"darkred"} height={'20%'} width={'30%'} />
        </div>
    );
}

export default Splash;