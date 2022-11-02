import image1 from "../../assets/Images/forRent.png"
import image2 from "../../assets/Images/statistics.png"

export default function Section() {
    return(
        <div className="bg-slate-100 my-5 mx-12">
            <div className="bg-stone-800 grid grid-cols-1 md:grid-cols-2">
                <div className="bg-slate-100 col-span-1 m-5 md:m-24 grid grid-cols-1 rounded-2xl border-8 border-cyan-400">
                    <div className="mx-auto my-2 font-bold">
                        <h1 className="font-mainFont text-4xl text-stone-800">Games</h1>
                    </div>
                    <div className="max-w-[15rem] m-auto">
                        <img src={image1}></img>
                    </div>
                    <div className="grid grid-cols-1">
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
                </div>
                <div className="bg-slate-100 col-span-1 m-5 md:m-24 grid grid-cols-1 rounded-2xl border-8 border-cyan-400">
                    <div className="mx-auto my-2 font-bold">
                        <h1 className="font-mainFont text-4xl text-stone-800">Statistics</h1>
                    </div>
                    <div className="max-w-[15rem] m-auto">
                        <img src={image2}></img>
                    </div>

                </div>
            </div>
        </div>
    )
}