import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { purple } from '@mui/material/colors';
import FORM_MESES from '../../db/form';

function RadioBtns({controlProps}) {

  return (
    <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                >
                    {
                        FORM_MESES.map((item,index)=>(
                            <FormControlLabel key={index} value={`${item}`} control={<Radio 
                                {...controlProps(item)}
                                    sx={{
                                    color: purple[800],
                                    '&.Mui-checked': {
                                        color: purple[600],
                                    },
                                    }}
                                />} label={`${item}`} labelPlacement="bottom"/>
                        ))
                    }
            </RadioGroup>
  </FormControl>
    );
};

export default RadioBtns;
