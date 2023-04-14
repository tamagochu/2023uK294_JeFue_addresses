import { Link, useParams } from "react-router-dom";

export default function DetailsPage(){
    let { id } = useParams();
    return(
        <div>
            <h1>pretend there r details for id number {id} here omg wowwwwwwwwwwwwww</h1>
            <Link to="/login">come and login here</Link>
            <Link to="/">overview</Link>
        </div>
    )
}