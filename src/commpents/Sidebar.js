
// import React, { Component } from "react";
import Slider from "react-slick";
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar(){
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
                <h1 className="up">Upcomming Movies</h1>
            </div>

            <div className="col-md-6 hone">
                <h4 className="hfourall">
                  <Link style={{textDecoration:"none" , color:"red"}} to="/movies">view all</Link>
                </h4>
            </div>

        </div>
    </div>







    <div className="slider-container">
      <Slider {...settings}>
        <div className="back-one">
          <h1 className="back-one-h1">my office boss</h1>
          <p className="back-one-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>



        <div className="back-two">
        <h1 className="back-two-h1">shadowe</h1>
          <p className="back-two-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>


        
        <div className="back-there">
        <h1 className="back-there-h1">another danger</h1>
          <p className="back-there-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>



        <div className="back-four">
        <h1 className="back-four-h1">one man army</h1>
          <p className="back-four-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>


        <div className="back-five">
        <h1 className="back-five-h1">jumbo queen</h1>
          <p className="back-five-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>


        <div className="back-six">
        <h1 className="back-six-h1">king of jungle</h1>
          <p className="back-six-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>

        <div className="back-seven">
        <h1 className="back-seven-h1">the illusion</h1>
          <p className="back-seven-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>
      </Slider>
    </div>



    <div className="container mov-con">
        <div className="row">
            <div className="col-md-6 ">
                <h1 style={{color:"white" , textTransform:"uppercase"}}>latest movies</h1>
            </div>

            <div className="col-md-6 hone">
                <h4 className="all">
                <Link style={{textDecoration:"none" , color:"red"}} to="/movies">view all</Link>
                </h4>
            </div>

        </div>
    </div>


    <div className="slider-container" >
      <Slider {...settings}>
        <div className="back-one">
          <h1 className="back-one-h1">my office boss</h1>
          <p className="back-one-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>



        <div className="back-two">
        <h1 className="back-two-h1">shadowe</h1>
          <p className="back-two-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>


        
        <div className="back-there">
        <h1 className="back-there-h1">another danger</h1>
          <p className="back-there-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>



        <div className="back-four">
        <h1 className="back-four-h1">one man army</h1>
          <p className="back-four-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>


        <div className="back-five">
        <h1 className="back-five-h1">jumbo queen</h1>
          <p className="back-five-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>


        <div className="back-six">
        <h1 className="back-six-h1">king of jungle</h1>
          <p className="back-six-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>

        <div className="back-seven">
        <h1 className="back-seven-h1">the illusion</h1>
          <p className="back-seven-p">22hr:38mins</p>
          <button className="back-one-bnt">play now</button>
        </div>
      </Slider>
    </div>


        </>
    )
}

