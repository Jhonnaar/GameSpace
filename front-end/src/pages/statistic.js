import Header from "../components/Header"

export default function Statistic() {

    const top1Game = "Call of Dutty"
    const top1Client = "Pedro Perez"
    const lessRentedGame = "GTA 5"
    const DailySales = ["Call of Dutty", "Fifa 23"]
    const rendertop1game = <h1 className="mx-auto my-5 font-mainFont text-xl text-stone-800">{top1Game}</h1>
    const rendertop1client = <h1 className="mx-auto my-5 font-mainFont text-sm text-stone-800">{top1Client}</h1>
    const renderlessrentedgame = <h1 className="mx-auto my-5 font-mainFont text-sm text-stone-800">{lessRentedGame}</h1>
    const renderdailysales = DailySales.map((element, index) => {
        return <h1 key={index} className="mx-auto font-mainFont text-lg text-stone-800">{element}</h1>
    })

    return(
        <div className="bg-slate-100 h-full">
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