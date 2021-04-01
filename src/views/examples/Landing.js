/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import backgroundBanner from "./../../assets/img/brand/bg-banner2x.png";
import backgrounBody from "./../../assets/img/brand/Bg-icons.png";
import Carousel from "./../IndexSections/Carousel.js"; 

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import MyNavbar from "components/Navbars/MyNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import { contains } from "jquery";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MyNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg pb-250" style={{ backgroundImage: `url(${backgroundBanner})`}}>
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="d-flex justify-content-center">
                    <Col lg="6" className="text-center">
                      <div>
                        <img src={require("assets/img/brand/Kripty.png")}
                        style={{height: "350px", width: "450px", objectFit: "contain"}}></img>
                      </div>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <Col lg="6" className="text-center">
                      <h1 className="display-3 text-white">
                        The next autonomous and decentralized crowdfounding community{" "}
                        
                      </h1>
                      <p className="lead text-white">
                        A fully community ownership platform
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="/login-page"
                        >
                          <span className="btn-inner--text">Get Started</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--10" style={{ backgroundImage: `url(${backgrounBody})`}}>
            <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="d-flex justify-content-center">
                    <Col lg="11" className="text-center">
                      <h3 className="lead " style={{ color: "rgb(87, 96, 119)"}}>
                        GET TO KNOW US
                      </h3>
                      <h1 className="display-3 text-black">
                        International comunity <br></br>Global Descentralized Ecosystem
                        
                      </h1>
                      <p className="lead " style={{ color: "rgb(87, 96, 119)"}}>
                        Descentralized marketing is powered by the revolutionary smart contract technology*.<br></br>
                        The code for Forsage's smart contractact can be seen here fully open, so you can be completely
                        confident in the security and long-term operation of the project.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12" className="mb-5 mt-5">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape  mb-4">
                            <img src={require("assets/img/brand/feat1.png")}
                              style={{height: "50px", width: "60px", objectFit: "contain"}}></img>
                          </div>
                          <h6 style={{ color: "#000" }}>
                            Download Argon
                          </h6>
                          <p className="description mt-3" >
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0" style={{ backgroundColor: "rgb(2,28,88)" }}>
                        <CardBody className="py-5" style={{ color: "#FFF" }}>
                        <div className="icon icon-shape  mb-4">
                            <img src={require("assets/img/brand/feat2.png")}
                              style={{height: "50px", width: "60px", objectFit: "contain"}}></img>
                          </div>
                          <h6 style={{ color: "#FFF" }}>
                            Build Something
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <Button
                            className="mt-4"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape  mb-4">
                            <img src={require("assets/img/brand/feat3.png")}
                              style={{height: "50px", width: "60px", objectFit: "contain"}}></img>
                          </div>
                          <h6 style={{ color: "#000" }}>
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col lg="12">
                  <Row className="row-grid pt-10">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape  mb-4">
                            <img src={require("assets/img/brand/feat4.png")}
                              style={{height: "50px", width: "60px", objectFit: "contain"}}></img>
                          </div>
                          <h6 style={{ color: "#000" }}>
                            Download Argon
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape  mb-4">
                            <img src={require("assets/img/brand/feat5.png")}
                              style={{height: "50px", width: "60px", objectFit: "contain"}}></img>
                          </div>
                          <h6 style={{ color: "#000" }}>
                            Build Something
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape  mb-4">
                            <img src={require("assets/img/brand/feat6.png")}
                              style={{height: "50px", width: "60px", objectFit: "contain"}}></img>
                          </div>
                          <h6 style={{ color: "#000" }}>
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col lg="12" className="text-center">
                  <div className="text-align-center">
                    <img src={require("assets/img/brand/Description.png")}
                        style={{height: "350px", width: "1000px", objectFit: "contain"}}></img>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                
                <Col md="12" className="mt--200" style={{ backgroundColor: "rgb(9,14,24)", borderRadius:"10px", height:"350px"}}>
                  <Row className="pt-5">
                  </Row>
                  <Row className="d-flex justify-content-left pt-4">
                    <Col md="1"></Col>
                    <Col md="8">
                      <h3 className="display-3 text-white">Check our numbers</h3>
                      <p className="description mt-3" style={{color:"#FFF"}}>All data is store on the blockchain in the public domain and can be verified! <br></br>
                        Contract address: 
                      </p>
                    </Col>
                    <Col md="3">
                      <div className="pt-4 justify-content-right pr-5">
                      <img
                        alt="..."
                        className=" img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/brand/K.png")}
                        style={{ width: "100px" }}
                      />
                      </div>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center">
                    <Col md="2">
                      <div className="pt-4 text-center">
                        <h5 className="description text-white">
                          <span className="d-block mb-1">Total Participants</span>
                        </h5>
                        <h3 className="display-4 text-white">
                          1 280 139
                        </h3>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="pt-4 text-center">
                        <h5 className="description text-white">
                          <span className="d-block mb-1">New Per Day</span>
                        </h5>
                        <h3 className="display-4 text-white">
                          +2 370
                        </h3>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="pt-4 text-center">
                        <h5 className="description text-white">
                          <span className="d-block mb-1">Total TRX Earned</span>
                        </h5>
                        <h3 className="display-4 text-white">
                          1 470 139
                        </h3>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="pt-4 text-center">
                        <h5 className="description text-white">
                          <span className="d-block mb-1">Total USD Earned</span>
                        </h5>
                        <h3 className="display-4 text-white">
                          $64 350
                        </h3>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="btn-wrapper d-flex flex-row-reverse">
                        <Button
                          className="btn-icon"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--text">Get Started</span>
                        </Button>
                      </div>
                    </Col>
                  </Row> 
                </Col>
                <Col md="12" className="pt-5">
                  <Row className="d-flex justify-content-center">
                    <Col lg="11" className="text-center">
                      <h3 className="lead " style={{ color: "rgb(87, 96, 119)"}}>
                        OUR SYSTEM
                      </h3>
                      <h1 className="display-3 text-black">
                        COMMISSION PAYOUT SYSTEM
                      </h1>
                      <p className="lead " style={{ color: "rgb(87, 96, 119)"}}>
                        You get automatically simultaneous access into <br></br> each of our seven matrices upon registration
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md="10">
                  <Carousel />
                </Col>
              </Row>
            </Container>
          </section>
          
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-4">FREQUENTLY ASKED QUESTIONS</h2>
                  <p className=" text-muted">
                    If you stil have questions, please take a <br></br>look at ouw knowledge database
                  </p>
                </Col>
              </Row>
              <Row>
                
              </Row>
            </Container>
          </section>
          <section className="section section-lg mb--200">
            <Container>
              <Card className="bg-gradient-info shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="1"></Col>
                    <Col lg="5" className="pl-5">
                      <h3 style={{ color:"#000"}}>
                        What are you waiting for?
                      </h3>
                      <p className="mt-2" style={{ color:"#000"}}>
                        Join today and start earning crypto the easy and automatized way today!
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="4">
                      <Button
                        block
                        className="btn-white"
                        color="#0090D4"
                        backgroundColor="#000"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Join now with only 700 TRX
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section section-lg" style={{ backgroundColor:"#000", height:"500px"}}>
            <Container className="pt-lg pb-300">
              <Row className="row-grid mt-5 align-items-center">
                <Col lg="3">
                  <div className="">
                    <img
                    alt="..."
                    src={require("assets/img/brand/Kripty-logo.png")}
                    />
                  </div>
                </Col>
                <Col lg="2">
                  <p className="text-white mt-3" style={{ fontSize:"0.75rem", textAlign:"right"}}>
                    Features
                  </p>
                </Col>
                <Col lg="2">
                  <p className="text-white mt-3" style={{ fontSize:"0.75rem", textAlign:"center" }}>
                    Our Numbers
                  </p>
                </Col>
                <Col lg="2">
                  <p className="text-white mt-3" style={{ fontSize:"0.75rem", textAlign:"left" }}>
                    FAQ
                  </p>
                </Col>
                <Col lg="3"></Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;
