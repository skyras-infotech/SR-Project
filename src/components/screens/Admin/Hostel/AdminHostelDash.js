import { Grid, Typography, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import img from '../../../../Images/14.png';

const usesStyles = makeStyles((theme) => ({

    img: {
        position: "fixed",
        bottom: 0,
        right: 0,
        opacity: "0.7"
    },
    paddingLeft: {
        paddingLeft: "10px",
    },
    hostelBGColor: {
        backgroundColor: "aqua",
        color: "black",
        padding: "20px",
        cursor: "pointer"
    },
    bedBGColor: {
        backgroundColor: "pink",
        color: "black",
        padding: "20px",
        cursor: "pointer"
    },
    roomBGColor: {
        backgroundColor: "orange",
        color: "white",
        padding: "20px",
        cursor: "pointer"
    },
}));

export default function AdminHostelDash() {

    const classes = usesStyles();

    return (
        <div>
            <Grid>
                <img src={img} width="40%" height="60%" alt="teacher" className={classes.img} />
            </Grid>
            <Grid container justify="space-around" alignItems="center">
                <Grid item>
                    <Link to="/hostel/hostel-list" style={{ textDecoration: "none" }}>
                        <Paper elevation={5} className={classes.hostelBGColor}>
                            <Typography variant="h6">Hostel List</Typography>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/room/room-list" style={{ textDecoration: "none" }}>
                        <Paper elevation={5} className={classes.roomBGColor}>
                            <Typography variant="h6">Room List</Typography>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/bed/bed-list" style={{ textDecoration: "none" }}>
                        <Paper elevation={5} className={classes.bedBGColor}>
                            <Typography variant="h6">Bed List</Typography>
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}