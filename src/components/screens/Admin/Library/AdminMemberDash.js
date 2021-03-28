import { Grid, Typography, makeStyles, InputBase } from "@material-ui/core";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import AdminMemberList from "./AdminMemberList";

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
    img:{
        position:"fixed",
        bottom:0,
        right:0,
        opacity:"0.5"
    },
    paddingLeft:{
        paddingLeft:"10px",
    },
    textColor:{
        color:"crimson"
    }
}));

export default function AdminStudentDash() {

    const classes = usesStyles();

    return (
        <div>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4" className={classes.textColor}>Member List</Typography>
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
                <AdminMemberList/>
            </Grid>
            
        </div>
    );
}