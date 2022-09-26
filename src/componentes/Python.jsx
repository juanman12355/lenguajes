import React,{useState} from "react";
import { Info } from "./Info";

const Python=()=>{
    return(
        <div className="container">
            <div className="card">
                {
                    Info.map((informacion)=>(
                        <div>
                            <div>
                                <img src={informacion.img2}/>
                                <h3 className="texto">{informacion.python}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Python;