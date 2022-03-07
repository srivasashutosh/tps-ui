import React, { useRef, useState } from "react";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Course() {
  const product = {
    image: "",
  };

  const setSingleProduct = () => {};

  const addToCart = () => {};

  return (
    <CourseWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card">
        <div className="img-container">
          <img
            src={product.image}
            alt="product"
            className="card-img-top p-5"
            style={{ height: "320px" }}
          />
          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
            <i className="ni ni-check-bold" />
          </div>
          <h6 className="text-primary text-uppercase">
            Full Stack Developer Beginner
          </h6>
          <p className="description mt-3">
            A Complete Guide to Application Development.
          </p>
          <div className="product-icon">
            <Link
              to={`/products/${product.id}`}
              onClick={() => setSingleProduct(product.id)}
            >
              <FaSearch className="icon" />
            </Link>
            <FaCartPlus
              className="icon"
              onClick={() => addToCart(product.id)}
            ></FaCartPlus>
          </div>
        </div>
        <div className="card-body d-flex justify-content-between">
          <p className="mb-0">{product.title}</p>
          <p className="mb-0 text-main">${product.price}</p>
        </div>
      </div>
    </CourseWrapper>
  );
}

const CourseWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .card-img-top {
    transition: var(--mainTransition);
  }

  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }

  .img-container {
    position: relative;
  }

  .product-icon {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }

  .card:hover .product-icon {
    opacity: 1;
  }

  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
