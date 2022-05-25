import React, { Component } from 'react';
import Card from '../CommonComponents/Card';
import Navbar from '../CommonComponents/Navbar';
import Footer from '../CommonComponents/Footer';
import Forms from './Forms';


class Registration extends Component {
    state = {}
    render() {
        return (

            <>

<div className="row">

<div className="col-12">
<Navbar/>

</div>

</div>


<div className="row">

<div className="col-5">
<Card/>

</div>


<div className="col-7">
<Forms/>

</div>

</div>




    

    <div className="row">

        <div className="col">
            <Footer/>
        </div>
    </div>
    





            </>



        );
    }
}

export default Registration;