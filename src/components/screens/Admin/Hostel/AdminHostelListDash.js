import { Grid, Typography, makeStyles, InputBase } from "@material-ui/core";
import React from "react";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import AdminHostelList from "./AdminHostelList";

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
        opacity: "0.3"
    },
    paddingLeft: {
        paddingLeft: "10px",
    },
    textColor: {
        color: "blue"
    }
}));

export default function AdminHostelListDash() {

    const classes = usesStyles();

    return (
        <div>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4" className={classes.textColor}>Hostel List</Typography>
                </Grid>
                <Grid item>
                    <Link to="/hostel/add-hostel" style={{ textDecoration: "none" }}>
                        <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
                            <AddBoxRoundedIcon fontSize="large" />
                            <Typography variant="h6">Add Hostel</Typography>
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
                <AdminHostelList />
            </Grid>

        </div>
    );
}