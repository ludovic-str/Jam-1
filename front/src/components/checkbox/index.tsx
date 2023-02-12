import React, { useState, useEffect, useRef, useCallback } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./styles.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Checkboxes() {
  const [marvel, setMarvelState] = useState<string | null>(localStorage.getItem('marvel') || 'true');
  const [dc, setDcState] = useState<string | null>(localStorage.getItem('dc') || 'true');

  const setLocalStorage = (type: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (localStorage.getItem(type) === 'false') {
      localStorage.setItem(type, 'true')
      if (type === 'marvel')
        setMarvelState('true')
      else
        setDcState('true')
    } else {
      localStorage.setItem(type, 'false')
      if (type === 'marvel')
        setMarvelState('false')
      else
        setDcState('false')
    }
  };

  return (

    <div className="flexbox-checkbox">
      <div className="flexbox-check-item checkbox">

    <FormGroup>
      <FormControlLabel 
        labelPlacement="start"
        control={
        <div>
      <Checkbox
        checked={marvel === 'true'}
        {...label}
        onClick={(e) => setLocalStorage('marvel', e)}
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
        checked={dc === 'true'}
        onClick={(e) => setLocalStorage('dc', e)}
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
