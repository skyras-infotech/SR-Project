import { Grid, makeStyles, TextField, Typography, Button, Backdrop, CircularProgress } from '@material-ui/core';
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
    },

}));

function AdminHoliday() {

    let location = useLocation();
    const [data, setData] = React.useState(location.state);

    const handleData = (e) => {
        if (data !== undefined) {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const classes = usesStyles();

    return (
        <Grid container >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Holiday Title</Typography>
                        <TextField
                            id="title"
                            name="title"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter holiday title"
                            })}
                            value={data == null ? null : data.title}
                            onChange={handleData}
                            error={Boolean(errors.title)}
                            helperText={errors.title?.message}
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

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Start Date</Typography>
                        <TextField
                            id="startDate"
                            name="startDate"
                            type="date"
                            variant="outlined"
                            defaultValue=""
                            fullWidth
                            inputRef={register({
                                required: "Please enter start date"
                            })}
                            error={Boolean(errors.startDate)}
                            helperText={errors.startDate?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>End Date</Typography>
                        <TextField
                            id="endDate"
                            type="date"
                            name="endDate"
                            variant="outlined"
                            defaultValue=""
                            fullWidth
                            inputRef={register({
                                required: "Please enter end date"
                            })}
                            error={Boolean(errors.endDate)}
                            helperText={errors.endDate?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" type="submit" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{data == null ? "Add Holiday" : "Update Holiday"}</Typography>
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

export default AdminHoliday;