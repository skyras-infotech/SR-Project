import { Grid, makeStyles, TextField, 
    Typography, Button } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';


const usesStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(0.5),
      },
      root:{
        backgroundColor:"#F89",
      },
      textColor:{
          color:"#51BEFF"
      },
      whiteColor:{
          color:"#fff"
      },
      roundedButton: {
        borderRadius:16,
        width:theme.spacing(36)
    },
    imgOptionsSize:{
        width: theme.spacing(14),
        height: theme.spacing(14),
      },
     
}));

function AdminHostel () {

    const classes = usesStyles();


    return (
        <Grid container spacing={3} >
             <Grid item container spacing={3}>

             <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Hostel Name</Typography>
                        <TextField
                            required
                            id="hostelName"
                            name="hostelName"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>


                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Hostel Type</Typography>
                        <TextField
                            required
                            id="hostelType"
                            name="hostelType"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Description</Typography>
                        <TextField
                            required
                            id="description"
                            name="description"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

            
                <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Add Hostel</Typography>
                        </Button>
                </Grid>

            </Grid>
        </Grid>
    );
} 

export default AdminHostel;