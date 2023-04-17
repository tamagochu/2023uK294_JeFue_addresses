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


  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/address", {replace: true})
  }

    useEffect(() => {
        addressService()
        .getAddressByIndex(parseInt(id!)).then((result : address) => {
            console.log(id)
            setNewAddress(result);
            console.log(newAddress)
        })
    }, []);

    // return AddressDetailsCard(data!)
return (
    <>
    {/* {AddressDetailsCard(newAddress!)} */}
    
    <Card sx={{ minWidth: 275 }}>

      <CardContent>
      <IconButton onClick={handleClick}>
            <ArrowBackIosIcon />
          </IconButton>
        {AddressDetails(newAddress!)}
      </CardContent>
      <CardActions>
      <DeleteButton id={newAddress?.id!}/>
        <Button variant="contained" endIcon={<SendIcon />}>
          Save
        </Button>
      </CardActions>
    </Card>

    </>
);

}
