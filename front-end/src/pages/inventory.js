import Header from "../components/Header"
import { json, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Inventory() {
    const [form, setForm] = useState({gameId:13, gameName:"e", launchDate:2020, mainCharacter:"2", gameDirector:"2", producer:"e", gamePlatform:"Nintendo", gamePrice:0, stock:0,})
    let params = useParams
    const captureInput = (key, value) => {
        let temp = form
        temp[key] = value
        setForm(temp)
    }

    const postGame = () => {
        fetch(`https://localhost:7095/api/Game`, {method:"POST", body:JSON.stringify(form), headers: {
            'Content-Type': 'application/json',
            }}).then(response=>response)
            .then(data=>{
                alert("Status: " + data.status)
            }).catch(e => console.log("Bad: request " + e))
    }

    return(
        <div className="bg-slate-100 h-screen">
            <Header/>
            <div className="bg-cyan-400 grid grid-cols-1 md:grid-cols-4 md:mx-36 md:my-8 md:rounded-3xl">
                <div id="gameForm" className="mx-auto mt-16 mb-8 col-span-1 md:col-span-2 md:col-start-2 grid grid-cols-1">
                    <label className="font-mainFont mx-auto text-xl" htmlFor="gameName">Name</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="GameName" name="name" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="launchDate">Year</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="LaunchDate" name="launchDate" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="mainCharacter">Main Character</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="MainCharacter" name="mainCharacter" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="gameDirector">Director</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="GameDirector" name="gameDirector" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="producer">Producer</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="Producer" name="producer" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="gamePlatformlatform">Platform</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="GamePlatform" name="platform" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="price">Price</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="GamePrice" name="price" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <label className="font-mainFont mx-auto text-xl" htmlFor="stock">Stock</label>
                    <input className="py-0.5 rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont p-auto text-center" type="text" id="Stock" name="stock" onChange={ev => {captureInput(ev.target.id, ev.target.value)}}></input>
                    <button className="rounded-2xl mb-4 bg-stone-800 text-slate-100 font-mainFont py-2 text-center mx-16 my-6" onClick={postGame}>Add</button>
                </div>
            </div>
        </div>
    )
}