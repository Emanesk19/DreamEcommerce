import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const mainCategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];
const subCategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];

const MainCategoryList: React.FC = () => {
  return (
    <div>
      {mainCategories.map((category, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItemText primary={category} />
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {subCategories.map((subCategory, subIndex) => (
                <ListItem key={subIndex}>
                  <ListItemText primary={subCategory} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default MainCategoryList;