import Header from "../components/Header"
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function Inventory() {
    const [form, setForm] = useState({gameName:"", launchDate:"", mainCharacter:"", gameDirector:"", producer:"", gamePlatform:""})
    let params = useParams
    const captureInput = (key, value) => {
        let temp = form
        temp[key] = value
        setForm(temp)
    }
    return(
        <div className="bg-slate-100 h-full">
            <Header/>
            <div className="bg-cyan-400 grid grid-cols-1 md:grid-cols-4 md:mx-36 md:my-8 md:rounded-3xl">
                <div id="gameForm" className="mx-auto mt-16 mb-8 col-span-1 md:col-span-2 md:col-start-2 grid grid-cols-1">
                    <label className="font-mainFont mx-auto text-xl" htmlFor="gameName">Name</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="gameName" name="name" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="launchDate">Year</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="launchDate" name="launchDate" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="mainCharacter">Main Character</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="mainCharacter" name="mainCharacter" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="gameDirector">Director</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="gameDirector" name="gameDirector" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="producer">Producer</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="producer" name="producer" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="gamePlatformlatform">Platform</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="gamePlatform" name="platform" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <input className="rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont py-2 text-center mx-16 my-6" type="submit" value="Submit" onClick={ev => {console.log(form)}}></input>
                </div>
            </div>
        </div>
    )
}