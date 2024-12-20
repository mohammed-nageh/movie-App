


import "./Footer.css"

export default function Footer(){
    return(
        <>
        <div className="container footerAll" id="here">
            <div className="row">
                <div className="col-md-8 first">
                <p>terms of use</p>
                <p>privacy-policy</p>
                <p>blog</p>
                <p>faq</p>
                <p>watch list</p>
                </div>

                <div className="col-md-2">
                
                </div>


                <div className="col-md-2 footerThere">
                <p>follow us</p>
                </div>

            </div>





            <div className="row">



            <div className="col-md-6 foot">
            <p className="p-foot">
            © 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the 
            property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
            </p>

            </div>





            <div className="col-md-6">
            <div class="social">
            <a href="/"><i class="fa-brands fa-facebook"></i></a>
            <a href="/"><i class="fa-brands fa-instagram"></i></a>
            <a href="/"><i class="fa-brands fa-twitter"></i></a>
            <a href="/"><i class="fa-brands fa-youtube"></i></a>
          </div>

            </div>
            <div className="col-md-6">

            </div>

            </div>

        </div>
        

        </>
    )
}