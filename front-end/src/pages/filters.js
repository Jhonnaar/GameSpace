import Header from "../components/Header"
import { useParams } from "react-router-dom"
import "boxicons"

export default function Filters() {
    let params = useParams()
    return(
        <div>
            <Header/>
        </div>
    )
}