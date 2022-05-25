import React from 'react';
import { BsFillMouseFill } from "react-icons/bs";
import './Home.css'
function Home() {
    return (

<>
<div className="banner">
                <h1>COMSATS University Islamabad</h1>
                <p>High quality is our First Priority</p>

                <a href="#container">
                    <button>

                        Scroll  <BsFillMouseFill style={{ marginLeft: "6px" }} />

                    </button>
                </a>
            </div>


</>

      );
}

export default Home;


