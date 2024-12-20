

import "./login.css"

export default function Login(){
    return(
        <>
        <div className="back-login">
            <div className="container login-mov">
                <div className="row ">
                    <div className="col-md-12 parent-login">

                    <div className="login">
                
                    <i class="fa-solid fa-circle-user"></i>
                    <div className="inps">
                    <input className="text" type="text" placeholder="user name"/>
                    <input className="password" type="password" placeholder="password"/>
                    </div>
                    <div className="btns">
                        <button className="first-login">login</button>
                        <button className="first-reset">reset</button>
                    </div> 
                    </div>

                    </div>

                </div>

            </div>
        </div>
        </>
    )
}