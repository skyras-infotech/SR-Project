import {
    Grid, makeStyles, TextField, Typography, Button, FormControl, Select,
    MenuItem, FormHelperText,Backdrop,CircularProgress
} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
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

function AdminNoticeboard() {

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
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice Title</Typography>
                        <TextField
                            id="noticeTitle"
                            name="title"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter roll number"
                            })}
                            value={data == null ? null : data.title}
                            onChange={handleData}
                            error={Boolean(errors.noticeTitle)}
                            helperText={errors.noticeTitle?.message}
                        />
                    </Grid>



                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice Comment</Typography>
                        <TextField
                            id="noticeComment"
                            name="noticeComment"
                            fullWidth
                            inputRef={register()}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice Start Date</Typography>
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
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice End Date</Typography>
                        <TextField
                            id="endDate"
                            name="endDate"
                            type="date"
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

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice For</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.noticeFor)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">Select Notice For</MenuItem>
                                        <MenuItem value="All">All</MenuItem>
                                        <MenuItem value="Student">Student</MenuItem>
                                        <MenuItem value="Teacher">Teacher</MenuItem>
                                    </Select>
                                )}
                                name="noticeFor"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please select notice for"
                                }}
                            />
                            <FormHelperText>{errors.noticeFor?.message}</FormHelperText>
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

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" type="submit" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{data == null ? "Add Notice" : "Update Notice"}</Typography>
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

export default AdminNoticeboard;