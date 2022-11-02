import Header from "../components/Header"
import { useParams } from "react-router-dom"

export default function Filters() {
    let params = useParams()
    return(
        <div>
            <Header/>
        </div>
    )
}