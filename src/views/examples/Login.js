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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
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
import SimpleFooter from "components/Footers/SimpleFooter.js";
import backgroundBanner from "./../../assets/img/brand/bg-banner2x.png";
import Web3 from 'web3';

class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  async Login() {
    if (typeof window.ethereum !== 'undefined') {
      const ethereum = window.ethereum;
      const web3 = new Web3(ethereum);
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts[0])
    }
    else {
      console.log('Please install metamask');
    }
  } 


  render() {
    return (
      <>
        <MyNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg" style={{ backgroundImage: `url(${backgroundBanner})`}}>
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <div>
                    <img src={require("assets/img/brand/Kripty.png")}
                      style={{height: "350px", width: "450px", objectFit: "contain"}}></img>
                  </div>
                  <Card className="bg-secondary shadow border-0 mt-300">
                    
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">

                      </div>
                      <Form role="form">
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="warning"
                            type="button"
                            onClick={ this.Login}
                          >
                            Link Metamask
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Login;
