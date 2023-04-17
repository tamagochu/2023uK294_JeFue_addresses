import {
    Card,
    Box,
    CardContent,
    IconButton,
    CardActionArea,
    CardActions,
  } from "@mui/material";
  import { address } from "../../Interfaces/AddressInterface";
  import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import addressService from "../../Service/AddressService";


  
  export default function AddressDetails({id} : {id : string}) {


    const [data, setData] = useState<address>()

    useEffect(() => {
        addressService().getAddressByIndex(parseInt(id)).then((data) => setData(data))
    }, )
      
    return (
      <div>
        <p>{data?.id}</p>
        <p>{data?.city}</p>
        <p>{data?.country_id}</p>
        <p>{data?.importdate}</p>
        <p>{data?.street_name}</p>
        <p>{data?.street_number}</p>
      </div>
    );
  }
  