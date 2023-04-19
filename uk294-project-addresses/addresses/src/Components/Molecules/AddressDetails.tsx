import {
  Box,
  Typography,
  Container,
} from "@mui/material";
import { address } from "../../Interfaces/AddressInterface";
import addressService from "../../Service/AddressService";
import { Field, Formik,  Form } from "formik";

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
              <Typography variant="body2">ID</Typography>
              <Field type="id" name="id" />
              <br />
              <Typography variant="body2">Street Name</Typography>
              <Field type="street_name" name="street_name" />
              <br />
              <Typography variant="body2">Street Number</Typography>
              <Field type="street_number" name="street_number" />
              <br />
              <Typography variant="body2">City</Typography>
              <Field type="city" name="city" />
              <br />
              <Typography variant="body2">Country ID</Typography>
              <Field type="country_id" name="country_id" />
              <br />
              <Typography variant="body2">Import Date</Typography>
              <Field type="importdate" name="importdate" />
              <button type="submit" disabled={isSubmitting || !isValid}>
            Save
          </button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
    </>
  );
}
