import React, { useEffect, useState } from "react";

// reactstrap components

// core components
import swal from "sweetalert";
import "../../assets/css/login/login.css";
import "../../assets/css/home/home.css";
import { useHistory } from "react-router-dom";
import StripeContainer from "../../components/Stripe/StripeContainer";

const Register = () => {
  const router = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onClickRegister = async () => {
    return user;
 
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }, []);

  return (
    <>
      <main>
        <section class="mt-100">
          <div class="container mb-5">
            <div class="card-box bg-green shadow-lg width-70">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="">
                    <div class="left">
                      <figure>
                        <img
                          src={require("assets/img/signup/signup.png")}
                          alt="sing up image"
                          width="90%"
                        />
                      </figure>
                      <h4 class="weight-400 px-3 text-white font-poppins">
                        Sign up for MyRizq and begin your Financial Journey
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div class="card-box-inner">
                    <div className="w-100 text-center logo-img">
                      <img src={require("assets/img/brand/logo.png")} />
                    </div>

                    <h3 class="form-title weight-600">Create Account</h3>
                    <div className="d-flex justify-center">
                      <button type="button" class="btn btn-outline-primary">
                        <img
                          style={{ width: "20px" }}
                          src={require("assets/img/signup/google.png")}
                        />
                        <text className="text-black text-btn">
                          Sign Up with Google
                        </text>
                      </button>
                      <button type="button" class="btn btn-outline-primary">
                        <img
                          style={{ width: "20px" }}
                          src={require("assets/img/signup/facebook.png")}
                        />
                        <text className="text-btn text-black">
                          Sign Up with Facebook
                        </text>{" "}
                      </button>
                    </div>
                    <br />
                    <br />
                    <p className="text-muted text-center">- OR -</p>
                    <br />
                    <div class="register-form px-5 ">
                      <div class="form-group">
                        <label for="your_name">
                          <i class="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="p-0"
                          id="your_name"
                          onChange={(e) => onChange(e)}
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="your_name">
                          <i class="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="your_name"
                          className="p-0"
                          onChange={(e) => onChange(e)}
                          placeholder="Email Address"
                        />
                      </div>
                      <div class="form-group">
                        <label for="your_pass">
                          <i class="zmdi zmdi-lock"></i>
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="p-0"
                          id="your_pass"
                          onChange={(e) => onChange(e)}
                          placeholder="Password"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="checkbox"
                          name="remember-me"
                          id="remember-me"
                          class="agree-term"
                        />

                        {/* stripe */}
                        <StripeContainer onClick={onClickRegister} />

                        {/* <button
                          type="button"
                          class="btn bg-green text-white w-100 mb-2"
                          onClick={onClickRegister}
                        >
                          Create Account
                        </button> */}
                        <text className="text-muted mt-2">
                          Already have an account?{" "}
                          <a
                            className="pointer-cursor"
                            onClick={() => router.push("/signin")}
                          >
                            Login
                          </a>{" "}
                        </text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
