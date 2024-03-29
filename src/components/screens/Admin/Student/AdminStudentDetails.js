import { Grid, makeStyles, TableContainer,TableCell,Table,TableRow,TableBody, Typography } from '@material-ui/core';
import placeholder from '../../../../Images/placeholder.jpg';
import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const usesStyles = makeStyles((theme) => ({
    margin: {
      marginRight: theme.spacing(20),
      marginLeft: theme.spacing(1)
    },
    maginTop:{
        marginTop: theme.spacing(5),
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
    table: {
        minWidth: 300,
      },
    roundedButton: {
      borderRadius:16,
      width:theme.spacing(36)
  },
  imgOptionsSize:{
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
   
}));

function createData(name, colon, value, name1, colon1, value1) {
    return { name, colon, value, name1, colon1, value1 };
  }
  
  const rows = [
    createData("Name", ":", "Parth Joshi", "Birthdate", ":","03-12-1998"),
    createData("Gender", ":", "Male", "Roll No", ":","101"),
    createData("Class Name", ":", "Class 1", "Section Name", ":","Section 1"),

  ];

  const contactrows = [
    createData("Address", ":", "Navsari", "City", ":","Navsari"),
    createData("State", ":", "Gujarat", "Zipcode", ":","396445"),
    createData("Phone Number", ":", "7600965621", "", "",""),

  ];

export default function AdminStudentDetails(prop) {

    const classes = usesStyles();

    return(
        <Grid>
             <Grid container spacing={3} alignItems="flex-end" >
                <Grid item container xs={12} sm={12} md={2} lg={2}>
                    <img src={placeholder} alt="Img" className={classes.imgOptionsSize} />
                </Grid>
                <Grid item container align="left" xs={12} sm={12} md={10} lg={10}>
                    <Typography variant="h6">Sumit Gupta</Typography>
                    <Grid container alignItems="flex-end" >
                        <Grid item container xs={12} sm={12} md={4} lg={4}>
                            <Grid item xs={1} sm={1} md={1} lg={1}>
                                <MailIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={11} sm={11} md={11} lg={11}>
                                <Typography variant="body1">skg@skg.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} sm={12} md={4} lg={4}>
                            <Grid item xs={1} sm={1} md={1} lg={1}>
                                <CallIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={11} sm={11} md={11} lg={11}>
                                <Typography variant="body1">7600965621</Typography>
                            </Grid>

                        </Grid>
                        <Grid item container xs={12} sm={12} md={4} lg={4}>
                            <Grid item xs={1} sm={1} md={1} lg={1}>
                                <LocationOnIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={11} sm={11} md={11} lg={11}>
                                <Typography variant="body1">Navsari</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={2} className={classes.maginTop}>
                    <Grid item>
                        <PersonRoundedIcon fontSize="default"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">Personal Information</Typography>
                    </Grid>
            </Grid>

            <hr style={{borderTop: `2px solid`}}/>

            <Grid container xs>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.colon}</TableCell>
                            <TableCell>{row.value}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.name1}
                            </TableCell>
                            <TableCell>{row.colon1}</TableCell>
                            <TableCell>{row.value1}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid container spacing={2} className={classes.maginTop}>
                    <Grid item>
                        <CallIcon fontSize="default"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">Contact Information</Typography>
                    </Grid>
            </Grid>

            <hr style={{borderTop: `2px solid`}}/>

            <Grid container xs>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                        {contactrows.map((contactrows) => (
                            <TableRow key={contactrows.name}>
                            <TableCell component="th" scope="row">
                                {contactrows.name}
                            </TableCell>
                            <TableCell>{contactrows.colon}</TableCell>
                            <TableCell>{contactrows.value}</TableCell>
                            <TableCell component="th" scope="row">
                                {contactrows.name1}
                            </TableCell>
                            <TableCell>{contactrows.colon1}</TableCell>
                            <TableCell>{contactrows.value1}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>
    );
}