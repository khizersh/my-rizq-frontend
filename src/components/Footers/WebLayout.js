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
                <a href="https://www.reddit.com/r/Myrizq/">
                  <img
                    className="footer-icon"
                    src={require("assets/img/footer/alien.png")}
                    width="50px"
                  />
                </a>
                <a href="https://twitter.com/Myrizqapp">
                  <img
                    className="px-3  "
                    src={require("assets/img/footer/twitter.png")}
                    width="60px"
                  />
                </a>
                <a href="https://www.linkedin.com/company/myrizq/">
                  <img
                    className="footer-icon"
                    src={require("assets/img/footer/linkedin.png")}
                    width="50px"
                  />
                </a>
                <a href="https://www.instagram.com/myrizqapp/">
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
              <p className="text-black mb-0 weight-500 ">About Us</p>
              <p className="text-black mb-0 weight-500  ">Blog</p>
              <p className="text-black mb-0 weight-500 ">Pricing</p>
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
                <a className="pr-5">Contact</a>
                <a>Privacy Policy</a>
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
