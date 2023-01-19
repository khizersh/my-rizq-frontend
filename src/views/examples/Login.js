
import React,{useState , useEffect} from "react";
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import { BASE_URL } from "utility";

// reactstrap components

const Register = () => {
  const router = useHistory();

  const[user , setUser] = useState({
    email : "",
    password : "",
  })

  const onChange = (e) => {
    setUser({...user , [e.target.name] : e.target.value})
  }
  const onClickLogin = () => {
    fetch(BASE_URL + "/user/signin", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data && data.status == "0000"){
          localStorage.setItem('user', JSON.stringify(data.data));
          swal("Success!", "User login successfully!", "success").then(m => {
            router.push("/dashboard/stock-finder")
          })
        }else if(data && data.status == "9999"){
          swal("Error!", data.message, "error");
        }else{
          swal("Error!", "Something went wrong!", "error");
        }
       
      });
  }

useEffect(() => {
  document.documentElement.scrollTop = 0;
  document.scrollingElement.scrollTop = 0;
  // this.refs.main.scrollTop = 0;
},[])
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
                {/* <h4 class="weight-400 px-3 text-white font-poppins">
                  Sign up for MyRizq and begin your Financial Journey
                </h4> */}
              </div>
             
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div class="card-box-inner">
              <div className="w-100 text-center logo-img">
                <img src={require('assets/img/brand/logo.png')} />
              </div>
            
              <h3 class="form-title weight-600">Welcome Back</h3>
              {/* <div className="d-flex justify-center" >
                <button type="button" class="btn btn-outline-primary">
                <img
                    style={{ width: "20px" }}
                    src={require("assets/img/signup/google.png")}
                  />
                  <text className="text-black text-btn">Sign In with Google</text> 
                </button>
                <button type="button" class="btn btn-outline-primary">
                  <img
                    style={{ width: "20px" }}
                    src={require("assets/img/signup/facebook.png")}
                  />
                  <text className="text-btn text-black">Sign In with Facebook</text>{" "}
                </button>
              </div> */}
              {/* <br />
              <br />
              <p className="text-muted text-center">- OR -</p>
              <br /> */}
              <div  class="register-form px-5 " >
                <div class="form-group">
                  <label for="your_name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
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
                    onChange={(e) => onChange(e)}
                    id="your_pass"
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
                  
                  <button type="button" class="btn bg-green text-white w-100 mb-2" onClick={onClickLogin}>Log in</button>
                  <text className="text-muted mt-2">Don't have an account? <a className="pointer-cursor" onClick={() => router.push("/signup")}>Sign Up</a> </text>
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
  )
}

export default Register


