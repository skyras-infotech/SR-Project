import {
    Grid, makeStyles, TextField,Typography, Button, CircularProgress, Backdrop
} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useLocation } from "react-router-dom";


const usesStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0.5),
    },
    root: {
        backgroundColor: "#F89",
    },
    textColor: {
        color: "#51BEFF"
    },
    whiteColor: {
        color: "#fff"
    },
    roundedButton: {
        borderRadius: 16,
        width: theme.spacing(36)
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }

}));

function AdminHostel() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    let location = useLocation();
    const [data, setData] = React.useState(location.state);

    const handleData = (e) => {
        if (data !== undefined) {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    const classes = usesStyles();


    return (
        <Grid container >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Hostel Name</Typography>
                        <TextField
                            id="hostelName"
                            name="hostelName"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter hostel name"
                            })}
                            value={data == null ? null : data.hostelName}
                            onChange={handleData}
                            error={Boolean(errors.hostelName)}
                            helperText={errors.hostelName?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Hostel Type</Typography>
                        <TextField
                            id="hostelType"
                            name="hostelType"
                            fullWidth
                            inputRef={register()}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Description</Typography>
                        <TextField
                            id="description"
                            name="description"
                            fullWidth
                            inputRef={register()}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" type="submit" color="primary" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{data == null ? "Add Hostel" : "Update Hostel"}</Typography>
                        </Button>
                    </Grid>

                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                        <CircularProgress color="inherit" />
                    </Backdrop>

                </Grid>
            </form>
        </Grid>
    );
}

export default AdminHostel;