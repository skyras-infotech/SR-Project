import { Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { Link } from "react-router-dom";
import AdminTeacherList from "./AdminTeacherList";
import img from '../../../../Images/11.png';
import SearchBar from "material-ui-search-bar";

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
        opacity: "0.5"
    },
    paddingLeft: {
        paddingLeft: "10px",
    },
    textColor: {
        color: "blueviolet"
    }
}));

export default function AdminTeacherDash() {

    const classes = usesStyles();
    const [searchData, setSearchData] = useState("");

    return (
        <div>
            <Grid>
                <img src={img} width="30%" height="50%" alt="teacher" className={classes.img} />
            </Grid>
            <Grid container xs={12} justify="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4" className={classes.textColor}>Teacher List</Typography>
                </Grid>
                <Grid item>
                    <Link to="/teacher/add-teacher" style={{ textDecoration: "none" }}>
                        <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
                            <AddBoxRoundedIcon fontSize="large" />
                            <Typography variant="h6">Add Teacher</Typography>
                        </Grid>
                    </Link>
                </Grid>
                <Grid item>
                    <Grid container xs alignItems="center" >
                        <SearchBar
                            className={classes.searchBox}
                            value={searchData}
                            onChange={(newValue) => setSearchData(newValue)}
                            onRequestSearch={() => console.log(searchData)}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{ marginTop: "20px" }}>
                <AdminTeacherList />
            </Grid>

        </div>
    );
}