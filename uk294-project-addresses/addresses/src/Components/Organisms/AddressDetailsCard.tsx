import { Card, CardContent, CardActions, Button, IconButton } from "@mui/material";
import AddressDetails from "../Molecules/AddressDetails";
import DeleteButton from "../Molecules/DeleteButton";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from "react-router-dom";
import { address } from "../../Interfaces/AddressInterface";

export default function AddressDetailsCard(myAddress : address){
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/address", {replace: true})
    }

    return(<Card sx={{ minWidth: 275 }}>

      <CardContent>
      <IconButton onClick={handleClick}>
            <ArrowBackIosIcon />
          </IconButton>
        {AddressDetails(myAddress)}
      </CardContent>
      <CardActions>
      <DeleteButton id={myAddress?.id}/>
       
      </CardActions>
    </Card>)
}