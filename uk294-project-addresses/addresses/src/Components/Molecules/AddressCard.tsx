import { Card, Box, CardContent, IconButton, CardActionArea } from "@mui/material";
import { address } from "../../Interfaces/AddressInterface";
import DeleteIcon from '@mui/icons-material/Delete';

export default function addressCard(myAddress : address){
    return(
        <Card>
            <CardActionArea>
            <Box>
                <CardContent>
                    <p>{myAddress.id}</p>
                    <p>{myAddress.street_name}</p>
                    <p>{myAddress.importdate}</p>
                </CardContent>
                <Box>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>
            </CardActionArea>
        </Card>
    )
}