import image1 from "../../assets/Images/forRent.png"
import image2 from "../../assets/Images/statistics.png"
import image3 from "../../assets/Images/inventory.png"
import image4 from "../../assets/Images/clientInformation.png"
import { Link } from "react-router-dom"

export default function Section() {
    return(
        <div className="bg-slate-100 my-5 mx-12">
            <div className="bg-stone-800 grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-slate-100 col-span-1 m-5 md:m-24 grid grid-cols-1 rounded-2xl border-8 border-cyan-400">
                    <div className="mx-auto my-2 font-bold">
                        <h1 className="font-mainFont text-4xl text-stone-800">Games</h1>
                    </div>
                    <div className="max-w-[15rem] m-auto">
                        <Link to="/"><img className="" src={image1} alt="" ></img></Link>
                    </div>
                    <div className="col-span-1 mx-auto my-2 font-mainFont text-xs text-stone-800">
                        <form>
                            <select name="filter" className="bg-cyan-400 rounded-2xl p-1">
                                <option>Game director</option>
                                <option>Main character</option>
                                <option>Producer</option>
                                <option>Launch date</option>
                            </select>
                        </form>
                    </div>
                    <div className="col-span-1 mx-auto my-2 font-mainFont text-xs text-stone-800">
                        <form>
                            <input type="Text" className="bg-cyan-400 rounded-2xl p-1"></input>
                        </form>
                    </div>
                </div>
                <div className="bg-slate-100 col-span-1 m-5 md:m-24 grid grid-cols-1 rounded-2xl border-8 border-cyan-400">
                    <div className="mx-auto my-2 font-bold">
                        <h1 className="font-mainFont text-4xl text-stone-800">Statistics</h1>
                    </div>
                    <div className="max-w-[15rem] m-auto">
                        <Link to="/statistics"><img className="" src={image2} alt="" ></img></Link>
                    </div>
                </div>
                <div className="bg-slate-100 col-span-1 m-5 md:m-24 grid grid-cols-1 rounded-2xl border-8 border-cyan-400">
                    <div className="mx-auto my-2 font-bold">
                        <h1 className="font-mainFont text-4xl text-stone-800">Inventory</h1>
                    </div>
                    <div className="max-w-[15rem] m-auto">
                        <Link to="/"><img className="" src={image3} alt="" ></img></Link>
                    </div>
                    <div className="col-span-1 mx-auto my-2 font-mainFont text-xs text-stone-800">
                        <form>
                            <select name="filter" className="bg-cyan-400 rounded-2xl p-1">
                                <option>Add Game</option>
                                <option>Edit Game</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="bg-slate-100 col-span-1 m-5 md:m-24 grid grid-cols-1 rounded-2xl border-8 border-cyan-400">
                    <div className="mx-auto my-2 font-bold">
                        <h1 className="font-mainFont text-4xl text-stone-800">User</h1>
                    </div>
                    <div className="max-w-[15rem] m-auto">
                        <Link to="/"><img className="" src={image4} alt="" ></img></Link>
                    </div>
                    <div className="col-span-1 mx-auto my-2 font-mainFont text-xs text-stone-800">
                        <form>
                            <input type="Text" className="bg-cyan-400 rounded-2xl p-1"></input>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}