import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "../components/Header"

export default function Statistic() {
    const params = useParams();
    const [top1Game, setTop1Game] = useState("");
    const [top1Client, setTop1Client] = useState("");
    const [lessRentedGame, setLessRentedGame] = useState("");
    const [DailySales, setDailySales] = useState([]);

    useEffect(()=>{
        fetch(`https://localhost:7095/api/Rents/topgame`).then(response=>response.json())
            .then(data=>{
                if (data) {
                    setTop1Game(data)
                } else {
                    setTop1Game(<div className="text-lg mx-2 mt-3 mb-5 font-mainFont text-stone-800 col-span-1 md:col-span-1 lg:col-span-1"><h1>Not fount</h1></div>)
                }
            
            }).catch(e => console.log("error"))
    },[params])
    useEffect(()=>{
        fetch(`https://localhost:7095/api/Rents/topuser`).then(response=>response.json())
            .then(data=>{
                if (data) {
                    setTop1Client(data)
                } else {
                    setTop1Client(<div className="text-lg mx-2 mt-3 mb-5 font-mainFont text-stone-800 col-span-1 md:col-span-1 lg:col-span-1"><h1>Not fount</h1></div>)
                }
            
            }).catch(e => console.log("error"))
    },[params])

    useEffect(()=>{
        fetch(`https://localhost:7095/api/Rents/lessgame`).then(response=>response.json())
            .then(data=>{
                if (data) {
                    setLessRentedGame(data)
                } else {
                    setLessRentedGame(<div className="text-lg mx-2 mt-3 mb-5 font-mainFont text-stone-800 col-span-1 md:col-span-1 lg:col-span-1"><h1>Not fount</h1></div>)
                }
            
            }).catch(e => console.log("error" + e))
    },[params])

    useEffect(()=>{
        fetch(`https://localhost:7095/api/Rents/today`).then(response=>response.json())
            .then(data=>{
                if (data) {
                    setDailySales(data)
                } else {
                    setDailySales(<div className="text-lg mx-2 mt-3 mb-5 font-mainFont text-stone-800 col-span-1 md:col-span-1 lg:col-span-1"><h1>Not fount</h1></div>)
                }
            
            }).catch(e => console.log("error" + e))
        
    }, [params])

    const rendertop1game = <h1 className="mx-auto my-5 font-mainFont text-xl text-stone-800">{top1Game.gameName}</h1>
    const rendertop1client = <h1 className="mx-auto my-5 font-mainFont text-sm text-stone-800">{top1Client.fullName}</h1>
    const renderlessrentedgame = <h1 className="mx-auto my-5 font-mainFont text-sm text-stone-800">{lessRentedGame.gameName}</h1>
    const renderdailysales = DailySales.map((element, index) => {
        return <h1 key={index} className="mx-auto font-mainFont text-lg text-stone-800">{element.gameName}</h1>
    })
    return(
        <div className="bg-slate-100 h-screen">
            <Header/>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-2 mx-auto grid grid-cols-1">
                    <h1 className="mx-auto mt-16 font-mainFont text-4xl text-stone-800">Most Rented Game</h1>
                    {rendertop1game}
                </div>
                <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2">
                    <div className="mt-3 col-span-1 max-auto grid grid-cols-1">
                    <h1 className="mx-auto mt-5 font-mainFont text-2xl text-stone-800">Most Frequent Client</h1>
                        {rendertop1client}
                    </div>
                    <div className="mt-3 col-span-1 max-auto grid grid-cols-1">
                    <h1 className="mx-auto mt-5 font-mainFont text-2xl text-stone-800">Less Rented Game</h1>
                        {renderlessrentedgame}
                    </div>
                </div>
                <div className="col-span-2 mx-auto grid grid-cols-1">
                    <h1 className="mx-auto mt-5 mb-5 font-mainFont text-3xl text-stone-800">Daily Sales</h1>
                    {renderdailysales}
                </div>
            </div>
        </div>
    )
}