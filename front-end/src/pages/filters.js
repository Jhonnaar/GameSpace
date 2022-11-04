import Header from "../components/Header"
import { useParams } from "react-router-dom"

export default function Filters() {
    let params = useParams()
    let rendergames;
    //https://localhost:7095/api/Game
    fetch(`https://localhost:7095/api/Game/${params.keyFilter}/${params.valueFilter}`).then(response=>response.json())
    .then(data=>{
        rendergames = data.map((element, index) => {
            return <h1 key={index} className="mx-auto font-mainFont text-lg text-stone-800 col-span-1 md:col-span-1 lg:col-span-2">{element}</h1>
        })
        
    }).catch(e => console.log("error"))
    console.log(rendergames)
    return(
        <div className="bg-slate-100 h-full">
            <Header/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-5">
                {rendergames}

            </div>
        </div>
    )
}