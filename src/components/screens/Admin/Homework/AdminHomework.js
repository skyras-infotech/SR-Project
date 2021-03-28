import {
    Grid, Select, makeStyles, TextField,
    Typography, FormControl, Button, MenuItem, FormHelperText, CircularProgress, Backdrop
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
    }
}));

function AdminHomework() {

    const classes = usesStyles();

    let location = useLocation();
    const [data, setData] = React.useState(location.state);

    const handleData = (e) => {
        if (data !== undefined) {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const [file, setFile] = React.useState(null);

    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }


    return (
        <Grid container >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>


                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Title</Typography>
                        <TextField
                            id="title"
                            name="title"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter title"
                            })}
                            value={data == null ? null : data.title}
                            onChange={handleData}
                            error={Boolean(errors.title)}
                            helperText={errors.title?.message}
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


                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select subject</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.subject)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">--- Select subject ---</MenuItem>
                                        <MenuItem value="Social Science">Social Science</MenuItem>
                                        <MenuItem value="Maths">Maths</MenuItem>
                                        <MenuItem value="Hindi">Hindi</MenuItem>
                                    </Select>
                                )}
                                name="subject"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please select subject"
                                }}
                            />
                            <FormHelperText>{errors.subject?.message}</FormHelperText>
                        </FormControl>
                    </Grid>


                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Homework Document</Typography>
                        <Typography variant="body1" className={clsx(classes.margin)}>Upload in PDF format only*</Typography>
                        <Grid item xs={12} container justify="space-between" alignItems="flex-start" spacing={5}>
                            <Grid item>
                                <input
                                    accept="file/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                    name="file"
                                    ref={register}
                                    onChange={fileHandler}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" color="primary" className={classes.margin}>Choose File</Button>
                                </label>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" color="primary" className={clsx(classes.margin)}>{file ? file.name : ""}</Typography>
                        </Grid>
                    </Grid>


                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Content</Typography>
                        <TextField
                            id="content"
                            name="content"
                            fullWidth
                            inputRef={register()}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Submission Date</Typography>
                        <TextField
                            id="submissionDate"
                            name="submissionDate"
                            type="date"
                            variant="outlined"
                            defaultValue=""
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={register({
                                required: "Please enter submission date"
                            })}
                            error={Boolean(errors.submissionDate)}
                            helperText={errors.submissionDate?.message}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" type="submit" color="primary" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{data == null ? "Add Homework" : "Update Homework"}</Typography>
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

export default AdminHomework;