import React,{useState} from "react";
import { Info } from "./Info";

const Reacte=()=>{
    return(
        <div className="container">
            <div className="card">
                {
                    Info.map((informacion)=>(
                        <div>
                            <div>
                                <img src={informacion.img4}/>
                                <h3 className="texto">{informacion.react}</h3>
                            </div>
                            <div>
                                <p className="carta2">{informacion.info4}</p>    
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reacte;