import React from "react";
import { red } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./styles.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Checkboxes() {
  return (

    <div className="flexbox-checkbox">
      <div className="flexbox-check-item checkbox">

    <FormGroup>
      <FormControlLabel 
        labelPlacement="start"
        control={
        <div>
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          // color: white[800],
          '&.Mui-checked': {
            // color: red[600],
          },
        }}
      />
    </div>
    } label="Marvel" />

    <FormControlLabel 
      labelPlacement="start"
      control={
        <div>
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          // color: red[800],
          '&.Mui-checked': {
            // color: red[600],
          },
        }}
      />
    </div>
    } label="DC Comics" />
    </FormGroup>
    </div>

    </div>
  );
}

export default Checkboxes;
