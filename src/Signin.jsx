import { React } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import { Button } from 'antd';
import Axios from "axios";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import './App.css';

const Signin = () => {
    //navigate the page
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: "", password: ""
        },

        onSubmit: (values) => {
            //login the user
            Axios.post(`/signIn`, values)
                .then(() => {
                    alert("Login sucessfully!");
                    history.push('/Dashboard');
                })
                .catch(err => {
                    alert("Invalid Credientials");
                    console.log(err);
                })
        }
    })


    return (
        <>
            <div className="signUp-Div">
                <div className="header_div">
                    <h1>SIGN IN</h1>
                </div>

                <div className="form_div">
                    <form onSubmit={formik.handleSubmit}>
                        <label>Username:-</label>
                        <TextField
                            required
                            type='text'
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Enter Email ID..." />
                        <div><br></br>
                            <label>Password:-</label>
                            <TextField
                                required
                                type='password'
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                placeholder="Enter Password ..." />
                        </div><br></br>
                        <div className='signInButton'>
                            <Button type="submit">SIGN IN</Button>
                        </div>
                    </form>
                </div>

            </div>
            <div className="sign_div">
                <NavLink to="/signUp">Create an account</NavLink>
            </div>
        </>
    )
}

export default Signin;