import { Grid, Typography, makeStyles, InputBase } from "@material-ui/core";
import React from "react";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import AdminVideoUpdationList from "./AdminVideoUpdationList";
import img from '../../../../Images/20.png';

const usesStyles = makeStyles((theme) => ({
    searchBox: {
        borderRadius: "20px",
        padding: "5px 10px",
        backgroundColor: "#ffefec",
        color: "white"
    },
    searchIconColor: {
        color: "black"
    },
    img: {
        position: "fixed",
        bottom: 0,
        right: 0,
    },
    paddingLeft: {
        paddingLeft: "10px",
    },
    textColor: {
        color: "purple"
    }
}));

export default function AdminHolidayDash() {

    const classes = usesStyles();

    return (
        <div>
            <Grid>
                <img src={img} width="30%" height="50%" alt="teacher" className={classes.img} />
            </Grid>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4" className={classes.textColor}>VideoLink List</Typography>
                </Grid>
                <Grid item>
                    <Link to="/video-updation/add-video-updation" style={{ textDecoration: "none" }}>
                        <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
                            <AddBoxRoundedIcon fontSize="large" />
                            <Typography variant="h6">Add VideoLink</Typography>
                        </Grid>
                    </Link>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center" className={classes.searchBox}>
                        <SearchIcon className={classes.searchIconColor} />
                        <InputBase
                            className={classes.paddingLeft}
                            id="search"
                            name="search"
                            placeholder="Search...."
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{ marginTop: "20px" }}>
                <AdminVideoUpdationList />
            </Grid>

        </div>
    );
}