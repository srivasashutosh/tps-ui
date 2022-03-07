import React, { useState, useRef } from "react";
import data from "../../assets/data/course";
import { Link } from "react-router-dom";
import { image } from "../../assets/img/brand/java.jpg";
import { ProfileHeader } from "./Profile";
import CardsFooter from "components/Footers/CardsFooter.js";

export default function SingleCourse() {
  const [course, setCourse] = useState(data);
  const addToCart = () => {
    console.log("added to cart");
  };
  return (
    <div>
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
      <section className="py-5">
        <div className="container">
          <div style={{ textAlign: "center", textDecoration: "underline" }}>
            <h2>Course Details</h2>
            <div className="underline"></div>
          </div>
          <div className="row">
            <div
              className="col-10 mx-auto col-sm-8 col-md-6 my-3"
              style={{ paddingTop: "3rem" }}
            >
              <img
                src={require("assets/img/brand/java.jpg")}
                alt="single product"
                className="img-fluid"
              />
            </div>
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
              <h5 className="text-title mb-4">{course.title} </h5>
              <h5 className="text-main text-capitalize mb-4">
                Brief Introduction : Java Basic Guide
              </h5>
              <h5 className="text-main text-capitalize mb-4">
                Duration : 3 months
              </h5>
              <h5 className="text-main text-capitalize mb-4">
                price : 25K
              </h5>
              <p className="text-capitalize text-title mt-4">
                some info about course :
              </p>
              <p>A complete comprehensive in depth course designed to deliver the basic concepts of Java Programming. This course will help to understand the basic deatils with hands on experience.  </p>

              <div>
                <button
                  type="button"
                  className="btn"
                  style={{ margin: "0.75rem" }}
                  onClick={() => addToCart(course.id)}
                >
                  add to cart
                </button>
                <Link
                  to="/profile-page"
                  className="btn"
                  style={{ margin: "0.75rem" }}
                >
                  back to courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardsFooter />
    </div>
  );
}
