
// import React, { Component } from "react";
import Slider from "react-slick";
import "./sidetwo.css"
import { Link } from "react-router-dom";

export default function Sidetwo(){
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 2,
        speed: 500,
        arrows:true
      };
    return(
        <>
        <div className="container mov-con">
        <div className="row">
            <div className="col-md-6 ">
                <h1 className="up">Recommended Movies</h1>
            </div>

            <div className="col-md-6 hone">
                <h4 className="hfour">
                <Link style={{textDecoration:"none" , color:"red"}} to="/series">view all</Link>
                </h4>
            </div>

        </div>
    </div>







    <div className="slider-container">
      <Slider {...settings}>
        <div className="back-one-second">
          <h1 className="back-one-h1">my office boss</h1>
          <p className="back-one-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>



        <div className="back-two-second">
        <h1 className="back-two-h1">shadowe</h1>
          <p className="back-two-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>


        
        <div className="back-there-second">
        <h1 className="back-there-h1">another danger</h1>
          <p className="back-there-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>



        <div className="back-four-second">
        <h1 className="back-four-h1">one man army</h1>
          <p className="back-four-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>


      </Slider>
    </div>




        </>
    )
}