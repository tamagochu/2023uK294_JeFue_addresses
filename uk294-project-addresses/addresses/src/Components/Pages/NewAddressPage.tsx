import { Field, Form, Formik } from "formik";
import addressService from "../../Service/AddressService";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function NewAddressPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/address", {replace: true})
    }
  return (
    <div>
        <IconButton onClick={handleClick}>
            <ArrowBackIosIcon />
          </IconButton>
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
          id: undefined,
          street_name: "",
          street_number: "",
          city: "",
          country_id: 0,
          importdate: "",
        }}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          addressService()
            .postAddress(values.street_name, values.street_number, values.country_id, values.importdate, values.city)
            .then(response => {navigate(`/address/${response.id}`, {replace: true})});

            

        }}
      >
{({ isSubmitting, isValid }) => (
            <Form>
              <Typography variant="h5" component="div">
                New Address
              </Typography>
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
            Submit
          </button>
            </Form>
          )}

      </Formik>
      </Box>
      </Container>
    </div>
  );
}
