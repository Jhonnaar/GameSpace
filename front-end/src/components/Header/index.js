import React from "react";
import Logo from "../../assets/Logo2.png"
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-7 bg-stone-800">
            <div className="col-span-2 w-32 mx-auto md:mx-12">
                <Link to="/"><img className="" src={Logo} alt="" ></img></Link>
            </div>
            <div className="col-span-3 my-auto">
                <div className="grid grid-cols-8 border-2 border-cyan-400">
                    <div className="col-span-7 text-stone-700 font-normal ml-3 mt-1">Search</div>
                    <div className="col-span-1 mx-auto mt-1"><a href="#"><box-icon name='search-alt-2' color='#22d3ee'></box-icon></a></div>
                </div>
            </div>
        </div>
    )
}