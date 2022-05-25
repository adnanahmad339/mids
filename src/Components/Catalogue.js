import React from 'react';
import {Link} from 'react-router-dom'   


function Catalogue() {
    return (

<>
<h2 style={{textAlign:"center", marginTop:"30px"}}>Activities</h2>

            <div className="card-group" style={{marginTop:"70px"}}>
                <div className="card">
                    <img src="https://www.comsats.edu.pk/metro/course.jpg" className="card-img-top" alt="..." style={{ width: "300px", height: "200px" }} />
                    <div className="card-body card border-0" style={{ backgroundColor: "#cccc", color: "white", width: "300px" }}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        
                       

                        <Link to="/readmore">
                        <button className='btn btn-dark ' style={{width:"300px", height:"50px" , marginLeft:"-16px"}}>Read More</button>

                </Link>






                    </div>

                  
                </div>


                <div className="card">
                    <img src="https://www.comsats.edu.pk/metro/faculties.jpg" className="card-img-top" alt="..." style={{ width: "300px", height: "200px" }} />
                    <div className="card-body card border-0" style={{ backgroundColor: "#cccc", color: "white", width: "300px" }}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <Link to="/readmore">
                        <button className='btn btn-dark ' style={{width:"300px", height:"50px" , marginLeft:"-16px"}}>Read More</button>

                </Link>       </div>
                </div>

                <div className="card">
                    <img src="https://www.comsats.edu.pk/metro/research.jpg" className="card-img-top" alt="..." style={{ width: "300px", height: "200px" }} />
                    <div className="card-body card border-0" style={{backgroundColor: "#cccc", color: "white", width: "300px" }}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <Link to="/readmore">
                        <button className='btn btn-dark ' style={{width:"300px", height:"50px" , marginLeft:"-16px"}}>Read More</button>

                </Link>          </div>
                </div>



                <div className="card">
                    <img src="https://www.comsats.edu.pk/metro/IntStudents.jpg" className="card-img-top" alt="..." style={{ width: "300px", height: "200px" }} />
                    <div className="card-body card border-0" style={{ backgroundColor: "#cccc", color: "white", width: "300px" }}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
                        <Link to="/readmore">
                        <button className='btn btn-dark ' style={{width:"300px", height:"50px" , marginLeft:"-16px"}}>Read More</button>

                </Link>        </div>
                </div>





       </div>

</>
            );
}

            export default Catalogue;