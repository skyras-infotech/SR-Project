import { Grid, Typography, makeStyles, InputBase } from "@material-ui/core";
import React from "react";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import AdminStudyHoursList from "./AdminStudyHoursList";

const usesStyles = makeStyles((theme) => ({
    searchBox: {
        borderRadius: "20px",
        padding:"5px 10px",
        backgroundColor: "#ffefec",
        color: "white"
    },
    searchIconColor:{
        color:"black"
    },
    paddingLeft:{
        paddingLeft:"10px",
    },
    textColor:{
        color:"crimson"
    }
}));

export default function AdminStudyHoursDash() {

    const classes = usesStyles();

    return (
        <div>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4" className={classes.textColor}>Study Hours Timetable</Typography>
                </Grid>
                <Grid item>
                    <Link to="/study-hours/add-study-hours" style={{textDecoration:"none"}}>
                    <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor:"pointer" }}>
                        <AddBoxRoundedIcon fontSize="large" />
                        <Typography variant="h6">Add Study Hours</Typography>
                    </Grid>
                    </Link>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center" className={classes.searchBox}>
                        <SearchIcon className={classes.searchIconColor}/>
                        <InputBase
                            className={classes.paddingLeft}
                            id="search"
                            name="search"
                            placeholder="Search...."
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{marginTop:"20px"}}>
                <AdminStudyHoursList/>
            </Grid>
            
        </div>
    );
}