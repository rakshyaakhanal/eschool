import React from "react";
import './Login.css';
import image from './images/img1.png';
import { useForm } from "react-hook-form";


const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (

    <div>

      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />

      <div id="main-div">
        <div className="image-box-div">
          <img src={image} alt="Background image" />

          <div className="heading-div">
            <h1 className="eschool">eSchool</h1>
          </div>

          <form onSubmit = {handleSubmit(onSubmit)}>
            <div className="form-box-div">
              <div className="form-items-div">
                <div className="title-div">
                  <span>Login</span>
                </div>

                <div className="form-div">

                  <div className="email">
                    <label htmlFor="username">Email</label><br />
                    <input type="text" className="input-field" {...register("email", { required: "Email is required",
                    pattern: {
                      value : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/,
                      message : "Invalid email address"
                    }})} />
                    <br />
                    {errors.email && (<span className=""> {errors.email.message} </span>)}
                  </div>

                  <div className="password-div">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" className="input-field"
                     {...register("password", { required: "password is required",
                     minLength: {
                       value : 8,
                       message : "Password shouldnot be less than 8"
                     },
                     maxLength: {
                      value : 50,
                       message : "Password shouldnot be more than 50"
                     }})} />
                     <br />
                    {errors.password && (<span className=""> {errors.password.message} </span>)}
                    <p>Forgot Password?</p>
                  </div>

                  <div className="button-line-div">
                    <button className="login-div" type="submit">Login</button>
                    <button className="signup-div" type="submit">Sign up</button>
                  </div>
                </div>
              </div>


              {/* ICONS DIV */}
              <div className="icons-div">
                <p className="para-div">or login with</p>
                <div className="icon-img-div">
                  <i className="fab fa-google" id="google-icon-div" />
                  <i className="fab fa-facebook-f" id="fb-icon-div" />
                  <i className="fab fa-twitter" id="tw-icon-div" />
                </div>
                <p>Don't have an account? SIGNUP</p>
              </div>
            </div>
          </form>

          <div className="footer-div">
            <p>Privacy Policy | Acceptable Use Policy | Facebook | Twitter</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;

