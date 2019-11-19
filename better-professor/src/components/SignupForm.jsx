import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from "styled-components";



const Signform = styled.div`

display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
padding: 30px;

margin: 200px auto;
background-color: papayawhip;
max-width: 400px;
max-heigth: 500px;

`;




const SignupForm = ({ values, errors, touched, status}) => {
    const [user, setUser] = useState([]);

    useEffect (() => {
        status && setUser(users => [...users, status]);
    },[status]);


    return (

        <Signform className= "user-form">
            <Form>
                <Field type="text" name ="username" placeholder= "username"/>
                {touched.username && errors.username && (
                    <p className= "errors"> {errors.username}</p>
                )}
                <Field type="text" name ="password" placeholder= "password"/>
                {touched.password && errors.password && (
                    <p className= "errors"> {errors.password}</p>
                )}
                <Field type="text" name ="first name" placeholder= "first name"/>
                {touched.first_name && errors.first_name && (
                    <p className= "errors"> {errors.first_name}</p>
                )}
                <Field type="text" name ="last name" placeholder= "last name"/>
                {touched.last_name && errors.last_name && (
                    <p className= "errors"> {errors.last_name}</p>
                )}

                <button>Sign Up</button>
            </Form> 
            {user.map(user => (
                <ul key={user.id}>
                    <li>Username: {user.username}</li>
                    <li>Password: {user.password}</li>
                    <li>First Name: {user.first_name}</li>
                    <li>Last Name: {user.last_name}</li>
                </ul>
            ))}     
        </Signform>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password, first_name, last_name}){
        return{
            name: username || "",
            password: password || "",
            first_name: first_name || "",
            last_name: last_name || "",
           
        };
    },
    validationSchema: yup.object().shape({
        username: yup.string().required(),
        password:  yup.string().required(),
        first_name:  yup.string().required(),
        last_name:  yup.string().required()
    }),
    handleSubmit(values, {setStatus}) {
        axios
            .post("https://reqres.in/api/users/", values)
            .then(response => {
                setStatus(response.data);
                console.log(response);
            })
            .catch(err => console.log( err.response));
    }


})(SignupForm);

export default FormikUserForm;