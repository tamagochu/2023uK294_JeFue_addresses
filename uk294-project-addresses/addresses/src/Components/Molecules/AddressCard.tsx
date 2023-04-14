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

export default function addressCard(myAddress: address) {
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
      </CardActions>
    </Card>
  );
}
