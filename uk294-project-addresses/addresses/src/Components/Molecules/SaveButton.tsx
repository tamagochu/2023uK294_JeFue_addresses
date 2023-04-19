import { Button, IconButton } from "@mui/material"
import addressService from "../../Service/AddressService"
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { replace } from "formik";
import { address } from "../../Interfaces/AddressInterface";
import SendIcon from '@mui/icons-material/Send';

export default function SaveButton({myAddress} : {myAddress : address}){
    const onClick = () =>{
        addressService().putAddress(myAddress).then(console.log("address updated")!).catch(function (error) {
            console.log("error :(")
          })
      }

    return(
        <Button variant="contained" endIcon={<SendIcon />}>
          Save
        </Button>
    )
}