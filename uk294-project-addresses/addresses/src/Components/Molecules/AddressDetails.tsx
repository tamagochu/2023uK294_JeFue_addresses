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
  Button,
} from "@mui/material";
import { address } from "../../Interfaces/AddressInterface";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import addressService from "../../Service/AddressService";
import { Field, Formik, useFormik, Form } from "formik";

export default function AddressDetails(myAddress: address) {

  return (
    <>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          m: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{
            id: myAddress.id,
            street_name: myAddress.street_name,
            street_number: myAddress.street_number,
            city: myAddress.city,
            country_id: myAddress.country_id,
            importdate: myAddress.importdate,
          }}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            const myAddress : address = {
              id: values.id,
              street_name: values.street_name,
              street_number: values.street_number,
              city: values.city,
              country_id: values.country_id,
              importdate: values.importdate
            }
              addressService().putAddress(myAddress).then((() => console.log("successfully put")))
            
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Typography variant="h5" component="div">
                Address Details
              </Typography>
              <Field type="id" name="id" />
              <br />
              <Field type="street_name" name="street_name" />
              <br />
              <Field type="street_number" name="street_number" />
              <br />
              <Field type="city" name="city" />
              <br />
              <Field type="country_id" name="country_id" />
              <br />
              <Field type="importdate" name="importdate" />
              <button type="submit" disabled={isSubmitting || !isValid}>
            Submit
          </button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
    </>
  );
}
