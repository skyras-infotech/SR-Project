import {
    Grid, Select, makeStyles, Backdrop, CircularProgress,
    Typography, FormControl, Button, MenuItem, FormHelperText
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
    imgOptionsSize: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

function AdminExam() {

    let location = useLocation();
    const data = location.state;

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

    const [day, setDay] = React.useState("");
    const getSelectedDay = (e) => {
        setDay(e.target.textContent);
    }

    return (
        <Grid container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>

                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
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
                                defaultValue={data == null ? "" :data.class}
                                rules={{
                                    required: "Please select class"
                                }}
                            />
                            <FormHelperText>{errors.class?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
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
                                defaultValue={data == null ? "" :data.section}
                                rules={{
                                    required: "Please select section"
                                }}
                            />
                            <FormHelperText>{errors.section?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Day</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.day)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange} onClose={getSelectedDay}>
                                        <MenuItem value="">--Select Day--</MenuItem>
                                        <MenuItem value="Monday">Monday</MenuItem>
                                        <MenuItem value="Tuesday">Tuesday</MenuItem>
                                        <MenuItem value="Wednesday">Wednesday</MenuItem>
                                        <MenuItem value="Thursday">Thursday</MenuItem>
                                        <MenuItem value="Friday">Friday</MenuItem>
                                        <MenuItem value="Saturday">Saturday</MenuItem>
                                    </Select>
                                )}
                                name="day"
                                control={control}
                                defaultValue={data == null ? "" :data.day}
                                rules={{
                                    required: "Please select day"
                                }}
                            />
                            <FormHelperText>{errors.day?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={3} lg={3}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Period 1</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.p1)}>
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
                                name="p1"
                                control={control}
                                defaultValue={data == null ? "" :data.p1}
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.p1?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={3} lg={3}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Period 2</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.p2)}>
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
                                name="p2"
                                control={control}
                                defaultValue={data == null ? "" :data.p2}
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.p2?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={3} lg={3}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Period 3</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.p3)}>
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
                                name="p3"
                                control={control}
                                defaultValue={data == null ? "" :data.p3}
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.p3?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={3} lg={3}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Period 4</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.p4)}>
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
                                name="p4"
                                control={control}
                                defaultValue={data == null ? "" :data.p4}
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.p4?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={3} lg={3}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Period 5</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.p5)}>
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
                                name="p5"
                                control={control}
                                defaultValue={data == null ? "" :data.p5}
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.p5?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={3} lg={3}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Period 6</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.p6)}>
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
                                name="p6"
                                control={control}
                                defaultValue={data == null ? "" :data.p6}
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.p6?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={3} lg={3}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Period 7</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.p7)}>
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
                                name="p7"
                                control={control}
                                defaultValue={data == null ? "" :data.p7}
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.p7?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={3} lg={3}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Period 8</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.p8)}>
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
                                name="p8"
                                control={control}
                                defaultValue={data == null ? "" :data.p8}
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.p8?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" type="submit" onClick={handleToggle} color="primary" className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">Add {day}</Typography>
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

export default AdminExam;