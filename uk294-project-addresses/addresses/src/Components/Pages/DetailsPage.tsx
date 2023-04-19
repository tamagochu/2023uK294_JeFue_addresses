import { Link, useNavigate, useParams } from "react-router-dom";
import AddressDetails from "../Molecules/AddressDetails";
import { Button, Card, CardActions, CardContent, IconButton } from "@mui/material";

import DeleteButton from "../Molecules/DeleteButton";
import AddressDetailsCard from "../Organisms/AddressDetailsCard";
import { useState, useEffect } from "react";
import { address } from "../../Interfaces/AddressInterface";
import addressService from "../../Service/AddressService";
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function DetailsPage() {
  let { id } = useParams();
  const [newAddress, setNewAddress] = useState<address>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/address", {replace: true})
  }

    useEffect(() => {
        addressService()
        .getAddressByIndex(parseInt(id!)).then((result : address) => {
            console.log(id)
            setNewAddress(result);
            setIsLoaded(true)
        })
    }, []);

      
    useEffect( () => {
      console.log("use state updated, information is now here")
      console.log(newAddress)
    }, [newAddress])

    // return AddressDetailsCard(data!)
return (
    <>
    {/* {AddressDetailsCard(newAddress!)} */}
    
    <Card sx={{ minWidth: 275 }}>

      <CardContent>
      <IconButton onClick={handleClick}>
            <ArrowBackIosIcon />
          </IconButton>
        {isLoaded && AddressDetails(newAddress!)}
      </CardContent>
      <CardActions>
      <DeleteButton id={newAddress?.id!}/>
      </CardActions>
    </Card>

    </>
);

}
