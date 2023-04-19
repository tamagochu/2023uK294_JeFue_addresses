import { Container, Box, Typography, IconButton } from "@mui/material";
import AddressList from "../Organisms/AddressList";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export default function OverviewPage() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/new", {replace: true})
  }

  return (
    <div>
      <Container maxWidth="sm">
      <IconButton onClick={handleClick}>
            <AddIcon />
          </IconButton>
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
