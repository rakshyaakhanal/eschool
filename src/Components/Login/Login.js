import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import image from "../images/img1.png";
import logo from "../images/logo.png";


const Login = () => {
  console.log("test");  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    reset(); 
  };
  return (
    <>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" /> 
      
      <div id="wrapper"> 
        <div id="curve_lg">
        <img className="logo_lg" src={logo} alt="logo" /> 
        <h1 className="mob_title_lg">Login</h1> 
        </div>        
        <div className="image-box_lg">
          <img className="image1" src={image} />
          <div className="heading_lg">
            <h1 className="eschool_lg">eSchool</h1>
          </div>
          <form className="form_lg" onSubmit={handleSubmit(onSubmit)}> 
            <div className="form-box_lg">
              <div className="form-items_lg">
                <div className="title_lg">
                  <span>Login</span>
                </div>
                <div className="form-one_lg">
                  <div className="form-control_lg" id="uname">

                    <label htmlFor="email">Email</label><br />
                    <input type="text" className="input-field_lg" {...register("email", {
                      required: "Email is required", pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address"
                      }
                    })} />
                    <br />
                    {errors.email && (<span className=""> {errors.email.message} </span>)}
                  </div>
                  <div className="form-control_lg" id="password_lg">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password_lg" className="input-field_lg" {...register("password", { required: "password is required",
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
                    
                    <Link to = {"#"} style={{ textDecoration: 'none', color: '#fff' }} ><p>Forgot Password?</p></Link>
                  </div>
                  <div className="form-control button-line_lg">
                    <button className="login_lg" id="login-btn" type="submit">Login</button>
                    {/* <a href="#"><button className="signup_lg" type="submit">Sign up</button></a> */}
                    <Link to ={"#"}><button className="signup_lg" type="submit">Sign up</button></Link>
                  </div> 
                </div>
              </div>
              {/* ICONS DIV */}
              <div className="icons_lg">
                <p className="para_lg">or login with</p>
                <div className="icon-img_lg">
                  <Link to ={"#"}><i className="fab fa-google i_icon" id="google-icon_lg" /></Link>
                  <Link to={"#"}><i className="fab fa-facebook-f i_icon" id="fb-icon_lg" /></Link>
                  <Link to={"#"}><i className="fab fa-twitter i_icon" id="tw-icon_lg" /></Link> 
                </div>
                <p>Don't have an account? <Link to ={"#"} style={{ textDecoration: 'none', color: '#fff' }}>SIGNUP</Link></p>
              </div>
            </div>
          </form>
        </div>
        <div className="footer_curve_lg">
          <div className="bottom_curve_lg" />
        </div>
        <div className="footer_lg">
          <p>Privacy Policy | Acceptable Use Policy | Facebook | Twitter</p> 
        </div>
      </div>
   </>
  );
}

export default Login;