import { Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core';
import placeholder from '../../../../Images/placeholder.jpg';
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

function AdminTransport () {

    const classes = usesStyles();

    return (
        <Grid container spacing={3} >
             <Grid item container spacing={3}>

             <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Route Name</Typography>
                        <TextField
                            required
                            id="routeName"
                            name="routeName"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Route Fare</Typography>
                    <TextField
                            id="routeFare"
                            name="routeFare"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Vehicle Identifier</Typography>
                        <TextField
                            required
                            id="vehicleIndentifier"
                            name="vehicleIndentifier"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>


                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Vehicle Registration Number</Typography>
                        <TextField
                            required
                            id="registrationNumber"
                            name="registrationNumber"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Driver Name</Typography>
                        <TextField
                            required
                            id="driverName"
                            name="driverName"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Driver Mobile No</Typography>
                        <TextField
                            required
                            id="driverMob"
                            name="driverMob"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Driver Address</Typography>
                        <TextField
                            required
                            id="driverAddress"
                            name="driverAddress"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

        
                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Description</Typography>
                    <TextField
                            id="description"
                            name="description"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Image</Typography>
                    <Grid item xs={12} container justify="space-between" alignItems="flex-start" spacing={5}>
                            <Grid item>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" color="primary" className={classes.margin}>Choose Image</Button>
                                </label>
                            </Grid>
                            <Grid item>
                                <img src={placeholder} alt="Img" className={classes.imgOptionsSize}/> 
                            </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Add Transport</Typography>
                        </Button>
                </Grid>

            </Grid>
        </Grid>
    );
} 

export default AdminTransport;