import { Container, Box, Typography } from "@mui/material";
import AddressList from "../Organisms/AddressList";

export default function overviewPage() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ width: 400, height: 400 }}>
          <Typography variant="h2" gutterBottom>
            All Addresses
          </Typography>
          <AddressList />
        </Box>
      </Container>
    </div>
  );
}
