import { Field, Form, Formik } from "formik";
import { address } from "../../Interfaces/AddressInterface";
import addressService from "../../Service/AddressService";
import { Typography } from "@mui/material";

export default function NewAddressPage() {
  return (
    <div>
      <Formik
        initialValues={{
          id: null,
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
            .then(response => {console.log(response.id)});
        }}
      >
{({ isSubmitting, isValid }) => (
            <Form>
              <Typography variant="h5" component="div">
                New Address
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
    </div>
  );
}
