import React from 'react';




function Card() {
    return (  


<>

<div className="card" id='container' style={{width: "18rem", marginLeft:"0px", marginTop:"0px"}}>
  <img src="/Images/Logo.jpg" className="card-img-top" alt="..." style={{width:"200px", height:"200px" , margin:"auto"}}/>
  <div className="card-body">
    <h5 className="card-title">Workshop Registraion</h5>
    <p className="card-text">Get registered for one day MERN stack workshop</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">React JS</li>
    <li className="list-group-item">Mongo DB</li>
    <li className="list-group-item">Node JS</li>
    <li className="list-group-item">Express JS</li>
 
  </ul>
</div>

</>









    );
}

export default Card;