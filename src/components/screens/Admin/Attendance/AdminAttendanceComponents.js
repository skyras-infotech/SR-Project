import React from 'react';
import { Grid, makeStyles, Typography, RadioGroup,FormControlLabel,Radio } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    margin: {
        margin: theme.spacing(0.5),
      },
      textColor:{
          color:"#51BEFF"
      },
  }));

export default function AdminAttendanceComponents() {

    const [value, setValue] = React.useState('female');

    const handleGender = (event) => {
        setValue(event.target.value);
    };

    const classes = useStyles();

    <Grid container>
    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
     <Typography variant="h6" color="primary" className={classes.margin}>Gender</Typography>
         <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleGender} className={classes.textColor}>
             <Grid item>
                 <FormControlLabel value="male" control={<Radio color="black"/>} label="Male" />
                 <FormControlLabel value="female" control={<Radio color="black" />} label="Female" />
             </Grid>
         </RadioGroup>
     </Grid>
    </Grid>
}