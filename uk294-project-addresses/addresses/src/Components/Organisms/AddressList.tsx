import { useEffect, useState } from "react";
import { address } from "../../Interfaces/AddressInterface";
import addressService from "../../Service/AddressService";
import AddressCard from "../Molecules/AdressCard";



export default function AddressList(){
    const [data, setData] = useState<address[]>()

    useEffect(() => {
        addressService().getAllAddresses().then((data : address[]) => setData(data))
    }, )


    return (
        <div>
            {data?.map((address) =>{
                return(
                    <div key={address.id}>
                        {AddressCard(address)}
                    </div>
                )
            })}
        </div>
    )
}