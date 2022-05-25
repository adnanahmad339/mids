import React, { Component } from 'react';

import { Redirect, BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";

import Departments from './Department/Department';
import Faculty from './Faculty/Faculty';
import Students from './Students/Students'
import Registration from './Registration/Registration'
import List from './List/List';
import ReadMore from './ReadMore';


import InvalidUrl from './InvalidUrl/InvalidUrl';

const Layout = () => {
  return (

    <>



      <Routes>
        <Route path="/" element={<Departments />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/list" element={<List />} />
        <Route path="/readmore" element={<ReadMore />} />

        <Route path="*" element={<InvalidUrl />} />
      </Routes>


    </>


  );
}

export default Layout;