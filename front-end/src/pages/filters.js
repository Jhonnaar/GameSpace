import Header from "../components/Header"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Filters() {
    const params = useParams()
    const [games, setGames] = useState("")
    let rendergames;
    //https://localhost:7095/api/Game
    useEffect(()=>{
        fetch(`https://localhost:7095/api/Game/${params.keyFilter}/${params.valueFilter}`).then(response=>response.json())
            .then(data=>{
                if (data.length>0) {
                    rendergames = data.map((element, index) => {
                        return <div key={index} className="rounded-2xl border-4 border-stone-800 p-3 bg-cyan-400 mx-2 mt-3 mb-5 font-mainFont text-stone-800 col-span-1 md:col-span-1 lg:col-span-1 grid grid-cols-1">
                                    <h2 className="text-xs mb-2">{element.gameId}</h2>
                                    <h1 className="text-lg">{element.gameName}</h1>
                                    <h2 className="text-xs">{element.launchDate}</h2>
                                    <h2 className="text-xs">{element.mainCharacter}</h2>
                                    <h2 className="text-xs">{element.gameDirector}</h2>
                                    <h2 className="text-xs">{element.producer}</h2>
                                    <h2 className="text-xs">{element.gamePlatform}</h2>
                                    <h2 className="text-xs">{element.gamePrice}</h2>
                                    <h2 className="text-xs mt-2">Stock: {element.stock}</h2>
                                </div>
                        
                    })
                    setGames(rendergames)
                } else {
                    console.log("aja")
                    setGames(<div className="text-lg mx-2 mt-3 mb-5 font-mainFont text-stone-800 col-span-1 md:col-span-1 lg:col-span-1"><h1>Not fount</h1></div>)
                }
            
            }).catch(e => console.log("error"))
    },[params])
    return(
        <div className="bg-slate-100 h-screen">
            <Header/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-5">
                {games}
            </div>
        </div>
    )
}