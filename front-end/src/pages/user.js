import { getElementError } from "@testing-library/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"

export default function User() {
    const params = useParams()
    const [user, setUser] = useState([])
    const [games, setGames] = useState([])
    const [rents, setRents] = useState([])
    const [gameId, setGameId] = useState(0)
    const [enable, setEnable] = useState(true)
    let renderUser;
    let rendergames;
    let renderRents;

    useEffect(()=>{
        fetch(`https://localhost:7095/api/User/${params.id}`).then(response=>response.json())
            .then(data=>{
                if (data) {
                    setUser(data)
                } else {
                    renderUser = <div className="text-lg mx-2 mt-3 mb-5 font-mainFont text-stone-800 col-span-1 md:col-span-1 lg:col-span-1"><h1>Not fount</h1></div>
                }
            
            }).catch(e => console.log("error" + e))
        
    }, [params])
    
    useEffect(()=>{
        fetch(`https://localhost:7095/api/Rents/${params.id}`).then(response=>response.json())
            .then(data=>{
                setRents(data)
            }).catch(e => console.log("error" + e))
        
    }, [params])

    useEffect(()=>{
        rents.forEach(rent => {
            fetch(`https://localhost:7095/api/Game/${rent.gameId}`).then(response=>response.json())
            .then(data=>{
                rendergames =  <div key={data.gameId} className="rounded-2xl border-4 border-stone-800 p-3 bg-cyan-400 mx-2 mt-3 mb-5 font-mainFont text-stone-800 col-span-1 md:col-span-1 lg:col-span-1 grid grid-cols-1">
                                <h2 className="text-xs mb-2">{data.gameId}</h2>
                                <h1 className="text-lg">Name: {data.gameName}</h1>
                                <h2 className="text-xs">Launch Date: {data.launchDate}</h2>
                                <h2 className="text-xs">Main character: {data.mainCharacter}</h2>
                                <h2 className="text-xs">Director: {data.gameDirector}</h2>
                                <h2 className="text-xs">Producer: {data.producer}</h2>
                                <h2 className="text-xs">Platform: {data.gamePlatform}</h2>
                                <h2 className="text-xs">Price: {data.gamePrice}</h2>
                            </div>
                setGames(games.concat(rendergames))
            
            }).catch(e => {
                setGames(<div className="text-lg mx-2 mt-3 mb-5 font-mainFont text-stone-800 col-span-1 md:col-span-1 lg:col-span-1"><h1>Not fount</h1></div>)
                console.log(e)})
        });
    },[rents])
    
    renderRents = rents.map((rent, index) => {
        return  <div key={index} className="grid grid-cols-1 md:grid-cols-4 col-span-1">
                    <h1 className="col-span-2">Rented date: {rent.rentedDate}</h1>
                </div>
    })
    
    return(
        <div className="bg-slate-100 h-screen">
            <Header/>
            <div className="grid grid-cols-1 m-5 bg-stone-800 p-5">
                {renderUser}
                <div className="mx-auto rounded-2xl bg-cyan-400 p-5 grid grid-cols-1">
                    <h1 className="mt-5 font-mainFont text-xs text-stone-800 col-span-1">Id: {user.userId}</h1>
                    <h1 className="mx-auto font-mainFont text-4xl text-stone-800 p-5 col-span-1">Name: {user.fullName}</h1>
                    {renderRents}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-5">
                        {games}
                    </div>
                </div>
            </div>
        </div>
    )
}