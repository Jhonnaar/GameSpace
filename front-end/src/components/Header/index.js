import React from "react";
import Logo from "../../assets/Logo2.png"
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <div className="grid grid-cols-1 bg-stone-800">
            <div className="col-span-1 w-62 mx-auto">
                <Link to="/"><img className="" src={Logo} alt="" ></img></Link>
            </div>
        </div>
    )
}