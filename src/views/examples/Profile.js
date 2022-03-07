import React, { useState } from "react";

// reactstrap components
import { Link, useHistory } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import Course from "./Course";
import {
  Button,
  Navbar,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Carousel from "views/IndexSections/Carousel.js";



export const ProfileHeader = () => {

  const history = useHistory();
  const [collapseClasses, setCollapseClasses] = useState();
  // state = {
  //   collapseClasses: "",
  //   collapseOpen: false,
  // };

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
    // this.setState({
    //   collapseClasses: "collapsing-out",
    // });
  };

  const onExited = () => {
    setCollapseClasses("");
    // this.setState({
    //   collapseClasses: "",
    // });
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

    
  return (
    <article>
       <header className="header-global">
            <Navbar
              className="navbar-main navbar-transparent navbar-light headroom"
              expand="lg"
              id="navbar-main"
            >
              <Container>
                <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                  <img
                    alt="..."
                    src={require("assets/img/brand/tpsBrandLogo.png")}
                  />
                </NavbarBrand>
                <button className="navbar-toggler" id="navbar_global">
                  <span className="navbar-toggler-icon" />
                </button>
                <UncontrolledCollapse
                  toggler="#navbar_global"
                  navbar
                  className={collapseClasses}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <div className="navbar-collapse-header">
                    <Row>
                      <Col className="collapse-brand" xs="6">
                        <Link to="/">
                          <img
                            alt="..."
                            src={require("assets/img/brand/argon-react.png")}
                          />
                        </Link>
                      </Col>
                      <Col className="collapse-close" xs="6">
                        <button className="navbar-toggler" id="navbar_global">
                          <span />
                          <span />
                        </button>
                      </Col>
                    </Row>
                  </div>
                  <Nav
                    className="navbar-nav-hover align-items-lg-center"
                    navbar
                  >
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text">
                          Categories{" "}
                        </span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem to="/landing-page" tag={Link}>
                          Training And Development
                        </DropdownItem>
                        <DropdownItem to="/profile-page" tag={Link}>
                          RPO
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                  <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <NavItem>
                      <NavLink
                        className="nav-link-icon"
                        href="#"
                        id="tooltip356693867"
                        target="_blank"
                      >
                        <i className="fa fa-heart"></i>
                        <span className="nav-link-inner--text d-lg-none ml-2">
                          Wishlist
                        </span>
                      </NavLink>
                      <UncontrolledTooltip delay={0} target="tooltip356693867">
                        Your wishlist is empty
                      </UncontrolledTooltip>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link-icon"
                        href="#"
                        id="tooltip184698705"
                        target="_blank"
                      >
                        <i className="fa fa-shopping-cart"></i>
                        <span className="nav-link-inner--text d-lg-none ml-2">
                          Cart
                        </span>
                      </NavLink>
                      <UncontrolledTooltip delay={0} target="tooltip184698705">
                        Your Cart is Empty
                      </UncontrolledTooltip>
                    </NavItem>

                    <Nav
                      className="navbar-nav-hover align-items-lg-center"
                      navbar
                    >
                      <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                          <i className="ni ni-collection d-lg-none mr-1" />
                          <span className="nav-link-inner--text">
                            My Learning{" "}
                          </span>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem to="/courses-list" tag={Link}>
                            Courses
                          </DropdownItem>
                          <DropdownItem to="/training-list" tag={Link}>
                            Training
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>

                    <Nav
                      className="navbar-nav-hover align-items-lg-center"
                      navbar
                    >
                      <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                          <i className="fa fa-user"></i>
                          <span className="nav-link-inner--text">Profile</span>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            to="/"
                            tag={Link}
                            onClick={handleLogOut}
                          >
                            Logout
                          </DropdownItem>
                          <DropdownItem to="/training-list" tag={Link}>
                            Edit Profile
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
          </header>
    </article>
  )
}


const Profile = () => {
  const history = useHistory();
  const [collapseClasses, setCollapseClasses] = useState();
  // state = {
  //   collapseClasses: "",
  //   collapseOpen: false,
  // };

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
    // this.setState({
    //   collapseClasses: "collapsing-out",
    // });
  };

  const onExited = () => {
    setCollapseClasses("");
    // this.setState({
    //   collapseClasses: "",
    // });
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  const setSingleCourse = () => {};

  const addToCart = () => {};

  const course = {};

  
  return (
    <>
      <main className="profile-page">
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <ProfileHeader></ProfileHeader>
        </section>
        <div className="section-label">
          <h2 className="section-label-heading">Ongoing Courses...</h2>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                    <div className="product-icon" style={{float:"right"}}>
                        <Link
                          to={`/single-course/${course.id}`}
                          onClick={() => setSingleCourse(course.id)}
                        >
                          <FaSearch className="icon" />
                        </Link>
                        <FaCartPlus
                          className="icon"
                          onClick={() => addToCart(course.id)}
                        ></FaCartPlus>
                      </div>

                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i className="ni ni-check-bold" />
                      </div>
                      <h6 className="text-primary text-uppercase">
                        Full Stack Developer Beginner
                      </h6>
                      <p className="description mt-3">
                        A Complete Guide to Application Development.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="shape shape-style-1 shape-default alpha-4">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="section-label">
          <h2 className="section-label-heading">What to learn next</h2>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                              <i className="ni ni-check-bold" />
                            </div>
                            <h6 className="text-primary text-uppercase">
                              ReactJs Complete Guide
                            </h6>
                            <p className="description mt-3">Master ReactJs.</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                              <i className="ni ni-check-bold" />
                            </div>
                            <h6 className="text-primary text-uppercase">
                              Python For Application Development
                            </h6>
                            <p className="description mt-3">
                              A Completed Guide to Python
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Third slide"></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );

};

export default Profile;
