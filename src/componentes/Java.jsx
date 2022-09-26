import React,{useState} from "react";
import {Info} from './Info'

const Java=()=>{
    return(
        <div className="container">
            <div className="card">
                {
                    Info.map((informacion)=>(
                        <div>
                            <div>
                                <img src={informacion.img1}/>
                                <div className="texto">
                                    <h3>{informacion.java}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Java