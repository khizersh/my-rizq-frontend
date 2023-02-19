import DemoNavbar from "components/Navbars/DemoNavbar";
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Input,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const WebLayout = (props) => {
  return (
    <>
      <DemoNavbar />
      {props.children}
      <footer className="footer has-cards">
        <Container>
          <hr />

          <div className="row">
            <div className="col-12 col-lg-3">
              <p className=" mb-0 weight-700 text-black">MyRizq</p>
              <p className="text-green mb-0 weight-500">Muslim Personal</p>
              <p className="text-green mb-0 weight-500">Finance App</p>
              <div className="text-green  mt-2">
                <a href="https://www.reddit.com/r/Myrizq/" target="_blank">
                  <img
                    className="footer-icon"
                    src={require("assets/img/footer/alien.png")}
                    width="50px"
                  />
                </a>
                <a href="https://twitter.com/Myrizqapp" target="_blank">
                  <img
                    className="px-3  "
                    src={require("assets/img/footer/twitter.png")}
                    width="60px"
                  />
                </a>
                <a href="https://www.linkedin.com/company/myrizq/" target="_blank">
                  <img
                    className="footer-icon"
                    src={require("assets/img/footer/linkedin.png")}
                    width="50px"
                  />
                </a>
                <a href="https://www.instagram.com/myrizqapp/" target="_blank">
                  <img
                    className="px-3  "
                    src={require("assets/img/footer/insta.png")}
                    width="60px"
                  />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <p className=" mb-0 weight-700 text-black">Resources</p>
              <br />
              <Link to={'/about-us'}><p className="text-black mb-0 weight-500 py-2">About Us</p></Link>
              <Link to={'/blog'}><p className="text-black mb-0 weight-500 py-2">Blog</p></Link>
              <Link to={'/faq'}><p className="text-black mb-0 weight-500 py-2 ">FAQ</p></Link>
              <Link to={'/shariah-screen-methodology'}><p className="text-black mb-0 weight-500 py-2 ">Shariah Screening</p></Link>
              <Link to={'/pricing'}><p className="text-black mb-0 weight-500 py-2 ">Pricing</p></Link>
              <Link to={'/support'}><p className="text-black mb-0 weight-500 py-2 ">Support</p></Link>
              <Link to={'/contact-us'}><p className="text-black mb-0 weight-500 py-2 ">Contact</p></Link>
            </div>
            <div className="col-12 col-lg-5">
              <h6 className="weight-700 newsletter text-grey">
                Join Our Newsletter
              </h6>
              <Input
                placeholder=""
                type="text"
                className="w-100 mb-3 bg-grey"
              />
              <li className="text-grey weight-500" style={{ fontSize: "12px" }}>
                Will send you weekly updates for your better finance management.
              </li>
              <div className="d-flex text-black mt-5">
              <Link to={'/contact-us'}><p className="pr-5 text-black">Contact</p></Link>
              <Link to={''}><p className="text-black">Privacy Policy</p></Link>
                
              </div>
            </div>
          </div>
        </Container>
        <hr />
      </footer>
    </>
  );
};

export default WebLayout;
