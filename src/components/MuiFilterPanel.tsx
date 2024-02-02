import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import Checkbox from "@material-ui/core/Checkbox";


const mainCategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];
const subCategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];

const MuiFilterPannel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "start",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
/*         height: "85vh",
 */     height:"fit-content",   
        width: "18vw",
        padding: "10px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Filter
      </Typography>
      <br />
      <div>
      {mainCategories.map((category, index) => (
        <Accordion key={index} sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Checkbox />
            <ListItemText primary={category} />
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {subCategories.map((subCategory, subIndex) => (
                <ListItem key={subIndex}>
                    <Checkbox />
                  <ListItemText primary={subCategory} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>



      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Filter
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Price
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <TextField
          id="start-price"
          label="Start Price"
          type="number"
          variant="filled"
          inputProps={{
            min: "10",
          }}
        />
        <TextField
          id="end-price"
          label="End Price"
          type="number"
          variant="filled"
        />
      </Stack>
    </Box>
  );
};

export default MuiFilterPannel;
