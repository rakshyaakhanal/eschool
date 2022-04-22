import React from 'react';
import './Signup.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import image from "../images/img2.png";
import logo from "../images/logo.png";

const SignUp = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (

    <>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />

      <div className="main">
        <div className="curve">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="mob_title">SignUp</h1>
        </div>
        <div className="image-box">
          <img src={image} alt="Background image" />
          <div className="heading">
            <h1>eSchool</h1>
          </div>
          {/* -FORM BOX- */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-box">
              <div className="title">
                <span>Sign Up</span>
              </div>
              <div className="email-content">
                <div className="name">
                  <div className="fname">
                    <label htmlFor="firstname">First Name*</label><br />
                    <input type="text" className="input-field wide_line" {...register("fname", {
                      required: "First name is required",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Invalid first name"
                      }
                    })} />
                    <br />
                    {errors.fname && (<span className="error"> {errors.fname.message} </span>)}
                  </div>


                  <div className="mname">
                    <label htmlFor="Middlename">Middle Name</label><br />
                    <input type="text" className="input-field wide_line" {...register("mname", {
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Invalid middle name"
                      },
                      minLength: {
                        value: 2,
                        message: "Middle name shouldnot be less than 2"
                      },
                      maxLength: {
                        value: 15,
                        message: "Middle name shouldnot be more than 15"
                      }
                    })} />
                    <br />
                    {errors.mname && (<span className="error"> {errors.mname.message} </span>)}
                  </div>


                  <div className="lname">
                    <label htmlFor="lastname">Last Name*</label><br />
                    <input type="text" className="input-field wide_line" {...register("lname", {
                      required: "Last name is required",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Invalid last name"
                      },
                      minLength: {
                        value: 2,
                        message: "Last name shouldnot be less than 2"
                      },
                      maxLength: {
                        value: 15,
                        message: "Last name shouldnot be more than 15"
                      }
                    })} />
                    <br />
                    {errors.lname && (<span className="error"> {errors.lname.message} </span>)}
                  </div>
                </div>


                <div className="email">
                  <label htmlFor="email">Email*</label><br />
                  <input type="text" className="input-field" {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address"
                    }
                  })} />
                  <br />
                  {errors.email && (<span className="error"> {errors.email.message} </span>)}
                </div>


                <div className="uname">
                  <label htmlFor="lastname">Username*</label><br />
                  <input type="text" className="input-field" {...register("uname", {
                    required: "Username is required",
                    pattern: {
                      value: /^[A-Za-z][A-Za-z0-9_]{3,15}$/,
                      message: "Invalid username"
                    }
                  })} />
                  <br />
                  {errors.uname && (<span className="error"> {errors.uname.message} </span>)}
                </div>


                <div className="password">
                  <div className="pword"> 
                    <label htmlFor="password">Password*</label><br />
                    <input type="password" className="input-field wide_line" {...register("pword", {
                      required: "password is required",
                      minLength: {
                        value: 8,
                        message: "Password shouldnot be less than 8"
                      },
                      maxLength: {
                        value: 50,
                        message: "Password shouldnot be more than 50"
                      }
                    })} />
                    <br />
                    {errors.pword && (<span className="error"> {errors.pword.message} </span>)}
                  </div>

                  <div className="cword">
                    <label htmlFor="password">Confirm Password*</label><br />
                    <input type="password" className="input-field wide_line" {...register("cword", {
                      required: "password is required", 
                      minLength: {
                        value: 8,
                        message: "Password shouldnot be less than 8"
                      },
                      maxLength: {
                        value: 50,
                        message: "Password shouldnot be more than 50"
                      }
                  })} />
                    <br />
                    {errors.cword && (<span className="error"> {errors.cword.message} </span>)}
                  </div>
                </div>


                <div className="sname">
                  <label htmlFor="schoolname">School Name*</label><br />
                  <input type="text" className="input-field"{...register("sname", {
                    required: "School name is required",
                    pattern: {
                      value: /^[A-Za-z ]{2,}$/,
                      message: "Invalid school name"
                    }
                  })} />
                  <br />
                  {errors.sname && (<span className="error"> {errors.sname.message} </span>)}
                </div>


                <div className="conname">
                  <div className="country">
                    <label htmlFor="country">Country*</label><br />
                    <input type="text" className="input-field wide_line" {...register("conname", {
                      required: "Country name is required",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Invalid country name"
                      }
                    })} />
                    <br />
                    {errors.conname && (<span className="error"> {errors.conname.message} </span>)}
                  </div>


                  <div className="city">
                    <label htmlFor="city">City*</label><br />
                    <input type="text" className="input-field wide_line" {...register("city", {
                      required: "City is required",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Invalid city name"
                      }
                    })} />
                    <br />
                    {errors.city && (<span className="error"> {errors.city.message} </span>)}
                  </div>
                </div>

                <div className="button-line">
                  <div className="btn_main">
                    <button type="submit" className="signup_sign">Sign up</button>
                  </div>
                  <div className="icons">
                    <p>or Sign up with</p>
                    <div className="icon_btn">
                      <Link to={"#"}><i className="fab fa-google s_icon" /> </Link>
                      <Link to={"#"}><i className="fab fa-facebook-f s_icon" id="fb_icon" /></Link>
                      <Link to={"#"}><i className="fab fa-twitter s_icon" /></Link>
                    </div>
                  </div>
                </div>
                <div className="last-line">
                  <p>Already have an account?<Link to={"#"} style={{ textDecoration: 'none', color: '#fff' }}> LOGIN </Link></p>
                </div>
              </div>
            </div>
          </form>

          <div className="footer">
            <p>Privacy Policy | Acceptable Use Policy | Facebook | Twitter</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;