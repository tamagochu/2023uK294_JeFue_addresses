import {
  Card,
  Box,
  CardContent,
  IconButton,
  CardActionArea,
  CardActions,
  Typography,
  TextField,
  Container,
} from "@mui/material";
import { address } from "../../Interfaces/AddressInterface";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import addressService from "../../Service/AddressService";

export default function AddressDetails(myAddress : address) {


  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{  
              m: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
        <Typography variant="h5" component="div">
          Address Details
        </Typography>
        <TextField
          id="outlined-read-only-input"
          label="ID"
          defaultValue={myAddress?.id}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Street Name"
          defaultValue={myAddress?.street_name}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Street Number"
          defaultValue={myAddress?.street_number}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="City"
          defaultValue={myAddress?.city}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Country ID"
          defaultValue={myAddress?.country_id}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Import Date"
          defaultValue={myAddress?.importdate}
          InputProps={{
            readOnly: true,
          }}
        />
        </Box>
        </Container>
  );
}
