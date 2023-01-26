import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

});

const Add = (props) => {
    const navigate=useNavigate()
    props.setHeader(true)
   
    
  return (
    
    <div className='container'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Add Teacher</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
       <div className='add'>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         axios.post("http://localhost:8000/user",(values));
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <label htmlFor="name">Name:</label>
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
              <label htmlFor="image">Image:</label>
           <Field name="image" />
           {errors.image && touched.image ? (
             <div>{errors.image}</div>
           ) : null}
               <label htmlFor="job">Job:</label>
           <Field name="job" />
           {errors.job && touched.job ? (
             <div>{errors.job}</div>
           ) : null}
               <label htmlFor="description">Description:</label>
           <Field name="description" />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
          
           <button type="submit" className='submit'>Add</button>
         </Form>
       )}
     </Formik>
   </div>
    </div>
  )
}

export default Add
