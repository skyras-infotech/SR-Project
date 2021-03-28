import { Grid, Select, makeStyles, TextField, Typography, FormControl,
    MenuItem,FormHelperText,CircularProgress,Backdrop, Button } from '@material-ui/core';
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

function AdminIssueBook() {

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

    return (
        <Grid container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>

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
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select student</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.student)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">Select student</MenuItem>
                                        <MenuItem value="Sumit Gupta">Sumit Gupta</MenuItem>
                                        <MenuItem value="Ramesh Shinde">Ramesh Shinde</MenuItem>
                                        <MenuItem value="Akshay Bhatiya">Akshay Bhatiya</MenuItem>
                                    </Select>
                                )}
                                name="student"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please select student"
                                }}
                            />
                            <FormHelperText>{errors.student?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Issue Date</Typography>
                        <TextField
                            id="issueDate"
                            name="issueDate"
                            type="date"
                            variant="outlined"
                            defaultValue=""
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={register({
                                required: "Please enter issue date"
                            })}
                            error={Boolean(errors.issueDate)}
                            helperText={errors.issueDate?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Period</Typography>
                        <TextField
                            id="period"
                            name="period"
                            fullWidth
                            variant="outlined"
                            inputRef={register()}
                            value={data == null ? null : data.period}
                            onChange={handleData}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Return Date</Typography>
                        <TextField
                            id="returnDate"
                            name="returnDate"
                            type="date"
                            variant="outlined"
                            defaultValue=""
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={register({
                                required: "Please enter return date"
                            })}
                            error={Boolean(errors.returnDate)}
                            helperText={errors.returnDate?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Book Category</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.category)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">--- Select category ---</MenuItem>
                                        <MenuItem value="Education">Education</MenuItem>
                                        <MenuItem value="Social">Social</MenuItem>
                                        <MenuItem value="Comics">Comics</MenuItem>
                                    </Select>
                                )}
                                name="category"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please select category"
                                }}
                            />
                            <FormHelperText>{errors.category?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Book</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.book)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">--- Select book ---</MenuItem>
                                        <MenuItem value="C++">C++</MenuItem>
                                        <MenuItem value="Java">Java</MenuItem>
                                        <MenuItem value="C#">C#</MenuItem>
                                    </Select>
                                )}
                                name="book"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please select book"
                                }}
                            />
                            <FormHelperText>{errors.book?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" type="submit" color="primary" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{data == null ? "Issue Book" : "Edit Issue Book"}</Typography>
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

export default AdminIssueBook;