import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import React from "react";

export const AccordionComponent = ({
  SummaryIcon,
  ExpandIcon,
  SummarySuccessIcon,
}: {
  SummaryIcon: React.ReactNode;
  ExpandIcon: React.ReactNode;
  SummarySuccessIcon: React.ReactNode;
}) => {
  return (
    <>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={ExpandIcon} aria-controls="panel1a-content" id="panel1a-header">
          <Box display="flex" alignItems="baseline">
            {SummaryIcon}
            <Box ml={2}>
              <Typography className="accordion-title">Group 1</Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Typography mr={1} className="accordion-expand-title">
              Show
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox disableRipple defaultChecked />} label="Task 1" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={ExpandIcon} aria-controls="panel3a-content" id="panel2a-header">
          <Box display="flex" alignItems="baseline">
            {SummaryIcon}
            <Box ml={2}>
              <Typography className="accordion-title">Group 1</Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Typography mr={1} className="accordion-expand-title">
              Show
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked disableRipple />} label="Task 2" />
            <FormControlLabel control={<Checkbox disableRipple />} label="Task 2.5" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={ExpandIcon} aria-controls="panel3a-content" id="panel3a-header">
          <Box display="flex" alignItems="baseline">
            {SummarySuccessIcon}
            <Box ml={2}>
              <Typography className="accordion-title success">Group 1</Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Typography mr={1} className="accordion-expand-title">
              Show
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox disableRipple defaultChecked />} label="Task 3" />
            <FormControlLabel control={<Checkbox disableRipple defaultChecked />} label="Task 3.5" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
