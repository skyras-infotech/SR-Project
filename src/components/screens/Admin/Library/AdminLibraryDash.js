import { Grid, Typography, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import img from '../../../../Images/18.png';

const usesStyles = makeStyles((theme) => ({

    img: {
        position: "fixed",
        bottom: 25,
        right: 25,
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
                <img src={img} width="50%" height="50%" alt="teacher" className={classes.img} />
            </Grid>
            <Grid container justify="space-around" alignItems="center">
                <Grid item>
                    <Link to="/library/member-list" style={{ textDecoration: "none" }}>
                        <Paper elevation={5} className={classes.hostelBGColor}>
                            <Typography variant="h6">Member List</Typography>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/library/book-list" style={{ textDecoration: "none" }}>
                        <Paper elevation={5} className={classes.roomBGColor}>
                            <Typography variant="h6">Book List</Typography>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/library/issue-book-list" style={{ textDecoration: "none" }}>
                        <Paper elevation={5} className={classes.bedBGColor}>
                            <Typography variant="h6">Issue Book List</Typography>
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}