import { IconButton } from "@mui/material"
import addressService from "../../Service/AddressService"
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { replace } from "formik";

export default function DeleteButton({id} : {id : number}){
    const navigate = useNavigate();

    const onClick = () =>{
        addressService().deleteAddress(id).then(console.log("address deleted")!).catch(function (error) {
          console.log("error :(")
        })
        navigate("/address", {replace: true})
      }

    return(
        <IconButton onClick={onClick}>
            <DeleteIcon />
          </IconButton>
    )
}