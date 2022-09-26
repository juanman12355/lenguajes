import React,{useState} from "react";
import { Info } from "./Info";

const Perl=()=>{
    return(
        <div className="container">
            <div className="card">
                {
                    Info.map((informacion)=>(
                        <div>
                            <div>
                                <img src={informacion.img3}/>
                                <h3 className="texto">{informacion.perl}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Perl;