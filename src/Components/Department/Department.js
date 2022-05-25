import React, { Component } from 'react';

import Navbar from '../CommonComponents/Navbar';
import Card from '../CommonComponents/Card';
import Footer from '../CommonComponents/Footer';
import Catalogue from '../Catalogue';
import Home from './Home';


function Departments() {
  return (


    <>



      <div className="row">

        <div className="col" >
          <Navbar />,
        </div>
      </div>

      <div className="row">

        <div className="col-12">

          <Home />
        </div>
      </div>

      <div className="row">

        <div className="col" style={{ marginTop: "0px" }}>
          <Card />

        </div>

      </div>




      <div className="row">

        <div className="col">
          <Catalogue />
        </div>
      </div>


      <div className="row" style={{ marginTop: "222px", marginBottom: "0px" }} >


        <Footer />
      </div>


    </>
  );
}

export default Departments;