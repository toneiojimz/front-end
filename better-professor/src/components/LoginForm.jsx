import React, {useEffect, useState} from "react";
import {withFormik, Form, Field} from "formik";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

const Logform = styled.div`

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



const LoginForm = ({ values, errors, touched, status}) => {
    const [user, setUser] = useState([]);

    useEffect (() => {
        status && setUser(users => [...users, status]);
    },[status]);


    return (

        <Logform  className= "login-form">
            <Form>
                <Field type="text" name ="username" placeholder= "username"/>
                {touched.name && errors.name && (
                    <p className= "errors"> {errors.name}</p>
                )}
                
                <Field type="text" name ="password" placeholder= "password"/>
                {touched.password && errors.password && (
                    <p className= "errors"> {errors.password}</p>
                )}

                
                <button>Log In</button>
            </Form> 
            {user.map(user => (
                <ul key={user.id}>
                    <li>Username: {user.name}</li>
                    <li>Password: {user.password}</li>
                </ul>
            ))}     
        </Logform>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password}){
        return{
            username: username || "",
            password: password || "",
            
        };
    },
    validationSchema: yup.object().shape({
        name: yup.string().required(),
        password:  yup.string().required()
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


})(LoginForm);

export default FormikUserForm;