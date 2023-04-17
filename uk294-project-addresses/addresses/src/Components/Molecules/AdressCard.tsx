import {
    Card,
    Box,
    CardContent,
    IconButton,
    CardActionArea,
    CardActions,
  } from "@mui/material";
  import { address } from "../../Interfaces/AddressInterface";
  
import { Link, useNavigate } from "react-router-dom";
import addressService from "../../Service/AddressService";
import DeleteButton from "./DeleteButton";


  
  export default function AddressCard(myAddress: address) {
    
  //let navigate = useNavigate(); 
      
  
      /*const RouteChange = () =>{
        
          let path = `/address/${myAddress.id}`
          navigate(path);
          console.log("hiiiiiiiii")
      }*/
      
      
    return (
      <Card variant="outlined" sx={{ display: "flex", flexDirection: "column" }}>
        <CardActionArea>
            <CardContent>
              <p>ID: {myAddress.id}</p>
              <p>Street name: {myAddress.street_name}</p>
              <p>Import Date: {myAddress.importdate}</p>
            </CardContent>
      
        </CardActionArea>
        <CardActions>
          <DeleteButton id={myAddress.id} />
          <Link to={`/address/${myAddress.id}`}>Details</Link>
        </CardActions>
      </Card>
    );
  }
  