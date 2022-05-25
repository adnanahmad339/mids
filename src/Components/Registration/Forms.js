import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from './TextError'

import ListData from '../List/ListData';



function Basic() {

    const FILE_SIZE = 160 * 1024;

    const SUPPORTED_FORMATS = ['image/png']  
        return (

 <div>
        <h2  style={{ marginTop:"100px"}}>Registration Form</h2>
        <Formik

            initialValues={{ file: " ", name: '', email: '', skills: "", gender: '', age: "", about: "", message:"", password: '' }}
            validate={values => {
                const errors = {};

                if (!values.file) {
                    errors.file = 'Required';
 
                }else if(
                SUPPORTED_FORMATS && FILE_SIZE


                ){errors.file="Format not supported"}
                



                if (!values.name) {
                    errors.name = 'Required';
                } else if (
                    /[^a-z A-Z]/.test(values.name)
                ) {
                    errors.name = 'Invalid name ';
                }


                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }


                if (!values.skills) {
                    errors.skills = 'Required';
                }


                if (!values.gender) {
                    errors.gender = 'Required';
                }

                if (!values.age) {
                    errors.age = 'Required';
                }


                if (!values.about) {
                    errors.about = 'Required';
                } else if (
                    /[^a-z A-Z]/.test(values.about)
                ) {
                    errors.about = 'Numbers and Special Characters are not allowed ';
                }



                if (!values.message) {
                    errors.message = 'Required';
                } else if (
            (/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,12}$/).test(values.message)                ) {
                    errors.message = 'Alphanmeric Values and symbols are allowed. Cant enter more than ';

                }



                if (!values.password) {
                    errors.password = 'Required';
                }
                if (!values.photo) {
                    errors.photo = 'required'
                }

                return errors;
            }}
        >


{/* <ListData Name={this.initialValues.name} Email={this.values.email}/> */}

{({
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
                <Form onSubmit={handleSubmit} style={{ width: "580px",marginTop:"20px"}}>

                    <label className="mb-3">Photo: </label>
                    <br />
                    <input type="file" name="file"  
        />

                    <TextError name="file" component="div" />
                    <br />
                 
                    <label>Name:</label>
                    <Field className="form-control" type="text" name="name" 
                 
                
                    />
                
                    <TextError name="name" component="div" />

                    <br />

                    <label>Email:</label>
                    <Field className="form-control" type="email" name="email"
                
                    />
                    <TextError name="email" component="div" />
                    <br />  <br />

                    <label>Skill Set:</label> <br />
                    <div className="form-check form-check-inline" style={{ marginLeft: "20px", marginBottom: "14px" }} >

                        <input className="form-check-input" name='skills' type="checkbox" id="inlineCheckbox1"  />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Web Development</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" name='skills' type="checkbox" id="inlineCheckbox2"     />
                        <label className="form-check-label" htmlFor="inlineCheckbox2"> Game Development</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"   />
                        <label className="form-check-label" htmlFor="inlineCheckbox2"> BlockChain</label>
                    </div>                <div className="form-check form-check-inline">
                        <input className="form-check-input" name='skills' style={{ marginLeft: "-3px" }} type="checkbox" id="inlineCheckbox2"     />
                        <label className="form-check-label " style={{ marginLeft: "10px" }} htmlFor="inlineCheckbox2"> Logo Designing</label>
                    </div>
                    <TextError name="skills" component="div" />
                    <br />


                    <label>Gender:</label>
                    <br />
                    <label style={{ padding: "10px" }}>Male:</label>
                    <Field name="gender"  type="radio"  />

                    <label style={{ padding: "10px" }}>Female:</label>
                    <Field name="gender" value="female" type="radio"    />

                    <TextError name="gender" component="div" />
                    <br />




                    <label>Age:</label>
                    <Field className="form-control" name="age" as="select" >
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                    </Field>
                    <TextError name="age" component="div" />
                    <br />


                    <label>About:</label>
                    <Field className="form-control" as="textarea" name="about"   
                                       > </Field>
                    <TextError name="about" component="div" />
                    <br />
{/* -----------------------------------Next Text Area */}

<label>Message:</label>
                    <Field className="form-control" as="textarea" name="message" minlength="8" maxlength="12"  
                    > </Field>
                    <TextError name="message" component="div" />
                    <br />

{/* --------------------------------------- */}


                  
                    <label>Password:</label>
                    <Field className="form-control" type="password" name="password" 
                    />
                    <TextError name="password" component="div" />
                  
                  
                
                    <Link to="/list">
                    <button type="submit"  className='form-control btn btn-dark mt-4'  >
                        Submit
                    </button>
                </Link>




                </Form>
                
            )}

        </Formik>

    </div>


        );
    }


   

export default Basic;

