
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
  UncontrolledTooltip
} from "reactstrap";


class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
         
          <Container>
            <hr />
           {/*   <Row className="align-items-center justify-content-md-between">
             <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="#"
                    target="_blank"
                  >
                   MyRizq
                  </a>
                  .
                </div>
              </Col> 
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                    >
                      Creative Tim
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://blog.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      target="_blank"
                    >
                      MIT License
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row> */}
            <div className="row">
              <div className="col-12 col-lg-3">
                  <p className=" mb-0 weight-700 text-black">MyRizq</p>
                  <p className="text-green mb-0 weight-500">Muslim Personal</p>
                  <p className="text-green mb-0 weight-500">Finance App</p>
                  <div className="text-green  mt-2">
                  <img  className="footer-icon" src={require("assets/img/footer/alien.png")}/>
                  <img   className="px-3  " src={require("assets/img/footer/twitter.png")}/>
                  <img  className="footer-icon"  src={require("assets/img/footer/snap.png")}/>
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
                <h6 className="weight-700 newsletter text-grey">Join Our Newsletter</h6>
                <Input placeholder="" type="text" className="w-100 mb-3 bg-grey"/>
                <li className="text-grey weight-500" style={{fontSize : '12px'}}>Will send you weekly updates for your better finance management.</li>
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
  }
}

export default CardsFooter;
