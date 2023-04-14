import { useEffect, useState } from "react";
import { address } from "../../Interfaces/AddressInterface";
import addressService from "../../Service/AddressService";
import AddressCard2 from "../Molecules/AdressCard";



export default function AddressList(){
    const [data, setData] = useState<address[]>()

    useEffect(() => {
        addressService().getAllAddresses().then((data) => setData(data))
    }, )


    return (
        <div>
            {data?.map((address) =>{
                return(
                    <div>
                        {AddressCard2(address)}
                    </div>
                )
            })}
        </div>
    )
}