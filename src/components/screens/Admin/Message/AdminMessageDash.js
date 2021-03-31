import { Grid, Typography, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import img from '../../../../Images/21.png';

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
        backgroundColor: "darkgreen",
        color: "white",
        padding: "20px",
        cursor: "pointer"
    },
    bedBGColor: {
        backgroundColor: "darkblue",
        color: "white",
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
                    <Link to="/message/message-compose" style={{ textDecoration: "none" }}>
                        <Paper elevation={5} className={classes.hostelBGColor}>
                            <Typography variant="h6">Compose</Typography>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/message/message-inbox" style={{ textDecoration: "none" }}>
                        <Paper elevation={5} className={classes.roomBGColor}>
                            <Typography variant="h6">Inbox</Typography>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/message/message-sent" style={{ textDecoration: "none" }}>
                        <Paper elevation={5} className={classes.bedBGColor}>
                            <Typography variant="h6">Sent</Typography>
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}