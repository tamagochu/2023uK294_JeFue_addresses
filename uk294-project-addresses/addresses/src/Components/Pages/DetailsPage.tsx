import { Link, useParams } from "react-router-dom";
import AddressDetails from "../Organisms/AddressDetails";

export default function DetailsPage(){
    
    let { id } = useParams();
    return(
        <AddressDetails id={id!}/>
    )
}