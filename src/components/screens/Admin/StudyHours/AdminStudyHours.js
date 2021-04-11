import React from 'react';
import clsx from 'clsx';
import {
    Grid, Select, makeStyles, Typography, FormControl, MenuItem, 
    FormHelperText, Button, Backdrop, CircularProgress
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useLocation } from "react-router-dom";

const usesStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0.5),
    },
    topleftmargin: {
        marginLeft: theme.spacing(0.2),
        marginTop: theme.spacing(0.5),
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
    imgOptionsSize: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function AdminStudyHours() {

    let location = useLocation();
    let data = location.state;

    const { handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    const classes = usesStyles();

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <Grid container>
            <form onSubmit={handleSubmit(onSubmit)} style={{width:"100%"}}>
                <Grid item container spacing={3}>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Time</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.time)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">Select Time</MenuItem>
                                        <MenuItem value="07:00 to 07:30 pm">07:00 to 07:30 pm</MenuItem>
                                        <MenuItem value="07:30 to 08:00 pm">07:30 to 08:00 pm</MenuItem>
                                        <MenuItem value="08:00 to 08:30 pm">08:00 to 08:30 pm</MenuItem>
                                        <MenuItem value="08:30 to 09:00 pm">08:30 to 09:00 pm</MenuItem>
                                    </Select>
                                )}
                                name="time"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please select time"
                                }}
                            />
                            <FormHelperText>{errors.time?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select class</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.class)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">Select class</MenuItem>
                                        <MenuItem value="Class 1">Class 1</MenuItem>
                                        <MenuItem value="Class 2">Class 2</MenuItem>
                                        <MenuItem value="Class 3">Class 3</MenuItem>
                                    </Select>
                                )}
                                name="class"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please select class"
                                }}
                            />
                            <FormHelperText>{errors.class?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select section</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.section)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">Select section</MenuItem>
                                        <MenuItem value="Section A">Section A</MenuItem>
                                        <MenuItem value="Section B">Section B</MenuItem>
                                        <MenuItem value="Section C">Section C</MenuItem>
                                    </Select>
                                )}
                                name="section"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please select section"
                                }}
                            />
                            <FormHelperText>{errors.section?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Teacher</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.teacher)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">--Select Teacher--</MenuItem>
                                        <MenuItem value="Sumit Gupta">Sumit Gupta</MenuItem>
                                        <MenuItem value="Ramesh Chaudhari">Ramesh Chaudhari</MenuItem>
                                        <MenuItem value="Mika Singh">Mika Singh</MenuItem>
                                    </Select>
                                )}
                                name="teacher"
                                control={control}
                                defaultValue={data == null ? "" : data.teacher}
                                rules={{
                                    required: "Please select teacher"
                                }}
                            />
                            <FormHelperText>{errors.p7?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" type="submit" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{data == null ? "Add Study hours" : "Update Study hours"}</Typography>
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

export default AdminStudyHours;