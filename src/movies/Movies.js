

import "./movies.css"
import MoviesBody from "./MoviesBody"

export default function Movies(){
    return(
        <>
         <div className="backgrounds-movies">
        <div className="container parentSeries">
            <div className="row">
                <div className="col-md-12 backseries-movies">
                    <h1>movies</h1>

                </div>

            </div>
        </div>
        </div>

        <MoviesBody/>
        </>
    )
}