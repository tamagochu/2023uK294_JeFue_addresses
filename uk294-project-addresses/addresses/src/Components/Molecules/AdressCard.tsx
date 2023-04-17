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
import { Link, useNavigate } from "react-router-dom";


  
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
              <p>{myAddress.id}</p>
              <p>{myAddress.street_name}</p>
              <p>{myAddress.importdate}</p>
            </CardContent>
      
        </CardActionArea>
        <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <Link to={`/address/${myAddress.id}`}>Details</Link>
        </CardActions>
      </Card>
    );
  }
  