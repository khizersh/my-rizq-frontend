import React from "react";
import "../../assets/css/home/home.css";
import {
  FormGroup,
  Input,

} from "reactstrap";
import Slider from "react-slick";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Hero(){
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 2,
    slidesToScroll: 1
  };
    return (
      <>
        <div className="position-relative bg-img">
          <section >
            <div className="container-width d-flex align-items-center py-lg container-fluid">
              <div className="row w-100 align-items-center justify-content-center">
                <div className="col-6 padding-31vh">
                    <h1 className="weight-800 text-black line-05 font-poppins">Muslim Personal</h1>
                    <h1  className="text-green weight-800 font-poppins" >Finance App.</h1>
                    <div className="mt-5 width-62 weight-500">
                      <text style={{color : '#676767'}} className="font-mon">"Your Rizq in one place! Muslim led fin-tech startup, aiming to transform the financial lives of Muslims"</text>
                      <div className="pr-3  pt-5">
                        <Button className=" float-left text-white d-inline w-50 bg-green btn btn-success"  >Get Started</Button>
                        <Button className="btn text-default d-inline btn btn-link" color="link"  >Learn more</Button>
                      </div>
                    </div>
                </div>
                <div className="col-6 padding-25vh pos-started">
                  <h6 className="text-left text-green "><strong>Get Started for Free</strong> </h6>
                  <FormGroup>
                    <Input placeholder="Email Address" type="text" className="width-60 mb-2 bg-transparent"/>
                    <Input placeholder="Password" type="password" className="width-60 mb-2 bg-transparent"/>
                    <Button className="float-left width-60 bg-green" color="success" type="button"> GET STARTED</Button>
                  </FormGroup>
                </div>
              </div>
            </div>
          </section>
          <section>
          <div className="container-width d-flex align-items-center  container-fluid mb-4">
              <div className="row w-100 align-items-center justify-content-center">
                <div className="col-7 text-center">
                  <h2 className="weight-700 text-green ">All in one Personal Finance App</h2>
                  <text className="weight-500">Find Halal Stocks, Keep track of your spending habits, Determine your Net worth, and Automate your Zakat. Your Rizq all in one place!</text>
                </div>
              </div>
            </div>

            <section>
          <div className="container-width d-flex align-items-center  container-fluid">
              <div className="row w-100 align-items-center justify-content-center">
                <div className="col-10 text-center">
                  <h2 className="weight-700 text-green mb-5">Featured Tools</h2>
                  <div className="row">
                    <div className="col-12 col-lg-4 text-center">
                      <img   src={require("assets/img/home/halal.png")} className="mb-3"  alt="halal"/>
                      <p className="feature-title weight-700 line-05 font-poppins">Halal Stock Screener</p>
                      <p className="feature-desc weight-400 font-mon">Easily determine which stocks <br/> are shariah compliant</p>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                      <img   src={require("assets/img/home/location.png")} className="mb-3"  alt="halal"/>
                      <p className="feature-title weight-700 line-05 font-poppins">Budget Tool</p>
                      <p className="feature-desc weight-400 font-mon">Get an understanding of where your<br/> money is going with our budget tracker </p>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                      <img   src={require("assets/img/home/calculator.png")} className="mb-3"  alt="halal"/>
                      <p className="feature-title weight-700 line-05 font-poppins">Net Worth & Zakat Calculation</p>
                      <p className="feature-desc weight-400 font-mon">Track your overall Net Worth and see <br/> how much Zakat you will need to pay </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </section>
        
        </div>

{/* slider section */}
        <section>
         <div className="container-width d-flex align-items-center  container-fluid mt-5">
              <div className="row w-100 align-items-center justify-content-center">
                <div className="col-12"><h1 className="font-poppins weight-800 text-center text-black my-5" style={{fontSize : '26.42px'}}>What users are saying</h1> </div>
                <div className="col-12 mt-5">
                <Slider {...settings}>
                  <div className="padding-message text-left">
                    <img src={require("assets/img/home/quote.png")}/>
                    <div className="star">
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    </div>
                      <h3 className="message">Very good product Masha Allah, will refer to my freinds and family</h3>
                      <br />
                      <br />
                      <br />
                      <text>Naiam</text>
                  </div>
                  <div className="padding-message text-left">
                    <img src={require("assets/img/home/quote.png")}/>
                    <div className="star">
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    </div>
                       <h3 className="message">This is the very good way to help the Ummah, may Allah rewards you guys for your efforts</h3>
                      <br />
                      <br />
                      <text>Raheem</text>
                  </div>
                  <div className="padding-message text-left">
                    <img src={require("assets/img/home/quote.png")}/>
                    <div className="star">
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    <img src={require("assets/img/home/star.png")}/>
                    </div>
                       <h3 className="message">This is the very good way to help the Ummah, may Allah rewards you guys for your efforts</h3>
                       <br />
                      <br />
                      <text>Raheem</text>
                  </div>
              </Slider>
                </div>
              </div>
          </div>
         </section>

<br/>
<br/>
<br/>
{/* signup section */}
         <section>
         <div className="container-width d-flex align-items-center  container-fluid mt-5">
              <div className="row w-100 align-items-center justify-content-center">
                <div className="col-7 text-center">
                <p className="font-poppins weight-400 ">Start using MyRizq today and get a better of your understanding of your finances Built Muslims by Muslims</p>
               <button className="btn bg-green text-white mt-3">Sign Up </button>
                </div>
              </div>
          </div>
         </section>
      </>
    );
  }


