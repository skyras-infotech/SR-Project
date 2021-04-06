import React from 'react';
import clsx from 'clsx';
import {
    Grid, Select, makeStyles, TextField,
    Typography, FormControl, MenuItem, FormHelperText, Button, Backdrop, CircularProgress
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

function AdminWeeklyAssessment() {

    let location = useLocation();
    const [data, setData] = React.useState(location.state);

    const handleData = (e) => {
        if (data !== undefined) {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const { register, handleSubmit, control, errors } = useForm();
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Date</Typography>
                        <TextField
                            id="date"
                            name="date"
                            fullWidth
                            type="date"
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter date"
                            })}
                            error={Boolean(errors.date)}
                            helperText={errors.date?.message}
                        />
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
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Subject</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.subject)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">--Select Subject--</MenuItem>
                                        <MenuItem value="Science">Science</MenuItem>
                                        <MenuItem value="English">English</MenuItem>
                                        <MenuItem value="Maths">Maths</MenuItem>
                                        <MenuItem value="Social Science">Social Science</MenuItem>
                                        <MenuItem value="Hindi">Hindi</MenuItem>
                                        <MenuItem value="Sanskrit">Sanskrit</MenuItem>
                                    </Select>
                                )}
                                name="subject"
                                control={control}
                                defaultValue={data == null ? "" : data.subject}
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.p7?.message}</FormHelperText>
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


                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Topic</Typography>
                        <TextField
                            id="topic"
                            name="topic"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter topic"
                            })}
                            value={data == null ? null : data.topic}
                            onChange={handleData}
                            error={Boolean(errors.topic)}
                            helperText={errors.topic?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Assessment Date</Typography>
                        <TextField
                            id="assessmentDate"
                            name="assessmentDate"
                            fullWidth
                            type="date"
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter assessmentDate"
                            })}
                            error={Boolean(errors.assessmentDate)}
                            helperText={errors.assessmentDate?.message}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" type="submit" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{data == null ? "Add Assessment" : "Update Assessment"}</Typography>
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

export default AdminWeeklyAssessment;