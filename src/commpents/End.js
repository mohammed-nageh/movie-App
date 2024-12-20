import "./End.css"
import "./Header.css"
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


export default function End(){
    return(
        <>
 <Swiper navigation={true} modules={[Navigation]} className="mySwiper second">
     
     <SwiperSlide>
     <div className="img-oneSecond ">
         <div className="container move">
         <div className="row">
             <div className="col-md-6 col-sm-6">
             <div className="mo">
             <h1 className="hd" style={{textTransform:"uppercase"}}>the dinsoaur</h1>
             <p style={{marginTop:"15px" , color:"yellow"}}>4.7(imdb)</p>
             <p style={{marginTop:"15px" , color:"yellow"}}>2hr:22mins</p>
             
         </div>
       <div className="plsheader">
       <p className="head-p">
        Lorem ipsum dolor sit amet consectetur 
        Labore inventore quos adipisci quia voluptates.<br/> Quod necessitatibus labore, minus laudantium quisquam omnis.
        </p>
        <p style={{color:"white"}}><span style={{color:"red"}}>starring</span> karen gilchrist , james earljones</p>
        <p style={{color:"white"}}><span style={{color:"red"}}>genres</span> action</p>
        <p style={{color:"white"}}><span style={{color:"red"}}>tags</span> action , adventures , horror</p>
       </div>
         <div>
         <button className="bnt">play now</button>
         </div>
              </div>


 
               
         
              
             </div>

         </div>
        

     </div>
         
   
        

    

     </SwiperSlide>
     
 
     <SwiperSlide>
     <div className="img-twoSecond">
     <div className="container move">
         <div className="row">
             <div className="col-md-6 col-sm-6">
             <div className="mo">
             <h1 className="hd" style={{textTransform:"uppercase"}}>the gread emperor</h1>
             <p style={{marginTop:"15px" , color:"yellow"}}>4.6(imdb)</p>
             <p style={{marginTop:"15px" , color:"yellow"}}>2hr:22mins</p>
             
         </div>
        <div className="plsheader">
        <p className="head-p">
        Lorem ipsum dolor sit amet consectetur 
        Labore inventore quos adipisci quia voluptates.<br/> Quod necessitatibus labore, minus laudantium quisquam omnis.
        </p>
        <p style={{color:"white"}}><span style={{color:"red"}}>starring</span> karen gilchrist , james earljones</p>
        <p style={{color:"white"}}><span style={{color:"red"}}>genres</span> action</p>
        <p style={{color:"white"}}><span style={{color:"red"}}>tags</span> action , adventures , horror</p>
        </div>
         <div>
         <button className="bnt">play now</button>
         </div>
              </div>


              <div className="col-md-6">
                 
              </div>
               
         
              
             </div>

         </div>

     </div>
     </SwiperSlide>
     
     <SwiperSlide>
     <div className="img-thereSecond">
     <div className="container move">
         <div className="row">
             <div className="col-md-6 col-sm-6">
             <div className="mo">
             <h1 className="hd" style={{textTransform:"uppercase"}}>jumbo queen</h1>
             <p style={{marginTop:"15px" , color:"yellow"}}>4.8(imdb)</p>
             <p style={{marginTop:"15px" , color:"yellow"}}>2hr:22mins</p>
             
         </div>
        <div className="plsheader">
        <p className="head-p">
        Lorem ipsum dolor sit amet consectetur 
        Labore inventore quos adipisci quia voluptates.<br/> Quod necessitatibus labore, minus laudantium quisquam omnis.
        </p>
        <p style={{color:"white"}}><span style={{color:"red"}}>starring</span> karen gilchrist , james earljones</p>
        <p style={{color:"white"}}><span style={{color:"red"}}>genres</span> action</p>
        <p style={{color:"white"}}><span style={{color:"red"}}>tags</span> action , adventures , horror</p>
        </div>
         <div>
         <button className="bnt">play now</button>
         </div>
              </div>


              <div className="col-md-6">

              </div>
               
         
              
             </div>

         </div>

     </div>
     </SwiperSlide>
 
     

   
     
   </Swiper>
        </>
    )
}