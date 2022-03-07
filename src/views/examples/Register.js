import React, { useState } from "react";
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
  Col,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Link } from "react-router-dom";
import axios from "axios";

//class Register extends React.Component {
const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [qualification, setQuatification] = useState();
  const [stream, setStream] = useState();
  const [mobileNumber, setMobileNumber] = useState();

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeQualification = (e) => {
    const qualification = e.target.value;
    setQuatification(qualification);
  };

  const onChangeStream = (e) => {
    const stream = e.target.value;
    setStream(stream);
  };

  const onChangeMobileNumber = (e) => {
    const mobileNumber = e.target.value;
    setMobileNumber(mobileNumber);
  };

  const handleSubmit = (e) => {
    // axios.defaults.headers.post["Content-Type"] =
    //   "application/json;charset=utf-8";
    // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    // const proxyOptions = {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/vnd.example.v1+json",
    //   },
    // };
    axios
      .post(
        "http://localhost:8080/api/auth/signup",
        {
          username : firstName + " " + lastName,
          email : email,
          password : password,
          qualification : "B.Tech",
          graduationYear : 3,
          phoneNumber : 86547899
        }
      )
      .then((response) => {
        alert("Registered Successfully")
        console.log(response)
      });
  };

  // render() {
  return (
    <>
      <DemoNavbar />
      <main >
        <section className="section section-shaped section-lg">
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
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    Create Account
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-2">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i class="fa fa-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Row>
                            <Col lg="6">
                              <Input
                                placeholder="First Name"
                                id="firstName"
                                type="text"
                                name="firstName"
                                onChange={onChangeFirstName}
                              />
                            </Col>
                            <Col lg="6">
                              <Input
                                placeholder="Last Name"
                                id="lastName"
                                type="text"
                                name="lastName"
                                onChange={onChangeLastName}
                              />
                            </Col>
                          </Row>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            onChange={onChangeEmail}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            name="password"
                            onChange={onChangePassword}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              nav
                              name="qualification"
                              onChange={onChangeQualification}
                            >
                              Qualification
                            </DropdownToggle>
                            <DropdownMenu
                              aria-labelledby="nav-inner-primary_dropdown_1"
                              right
                            >
                              <DropdownItem
                                href="#"
                                id="btech"
                                onClick={(e) => e.preventDefault()}
                              >
                                B.Tech
                              </DropdownItem>
                              <DropdownItem
                                href="#"
                                id="mca"
                                onClick={(e) => e.preventDefault()}
                              >
                                MCA
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem
                                href="#"
                                id="mtech"
                                onClick={(e) => e.preventDefault()}
                              >
                                M.Tech
                              </DropdownItem>
                              <DropdownItem
                                href="#"
                                id="iti"
                                
                              >
                                ITI
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i class="fa fa-user-graduate"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              nav
                              name="stream"
                              onChange={onChangeStream}
                            >
                              {" "}
                              Persuing Stream
                            </DropdownToggle>
                            <DropdownMenu
                              aria-labelledby="nav-inner-primary_dropdown_1"
                              right
                            >
                              <DropdownItem href="#" id="btech">
                                Computer Science
                              </DropdownItem>
                              <DropdownItem href="#" id="mca">
                                Information technology
                              </DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem href="#" id="mtech">
                                Mechanical
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i class="fa fa-phone"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Mobile Number "
                            type="text"
                            name="mobileNumber"
                            onChange={onChangeMobileNumber}
                          />
                        </InputGroup>
                      </FormGroup>
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister"
                            >
                              <span>
                                I agree with the{" "}
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
  //}
};

export default Register;
