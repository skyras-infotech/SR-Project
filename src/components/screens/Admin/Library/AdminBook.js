import { Grid, Select, makeStyles, TextField, Typography, FormControl,
    MenuItem,FormHelperText,Backdrop,CircularProgress, Button } from '@material-ui/core';
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

function AdminBook() {

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
        <Grid container >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>ISBN Number</Typography>
                        <TextField
                            id="isbn"
                            name="isbn"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter ISBN number"
                            })}
                            value={data == null ? null : data.isbn}
                            onChange={handleData}
                            error={Boolean(errors.isbn)}
                            helperText={errors.isbn?.message}
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
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Book Name</Typography>
                        <TextField
                            id="bookName"
                            name="bookName"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter book name"
                            })}
                            value={data == null ? null : data.bookName}
                            onChange={handleData}
                            error={Boolean(errors.bookName)}
                            helperText={errors.bookName?.message}
                        />
                    </Grid>


                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Author Name</Typography>
                        <TextField
                            id="authorName"
                            name="authorName"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter author name"
                            })}
                            value={data == null ? null : data.authorName}
                            onChange={handleData}
                            error={Boolean(errors.authorName)}
                            helperText={errors.authorName?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Rack Location</Typography>
                        <TextField
                            id="rackLocation"
                            name="rackLocation"
                            fullWidth
                            variant="outlined"
                            inputRef={register()}
                            value={data == null ? null : data.rackLocation}
                            onChange={handleData}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Quantity</Typography>
                        <TextField
                            id="quantity"
                            name="quantity"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter quantity"
                            })}
                            value={data == null ? null : data.quantity}
                            onChange={handleData}
                            error={Boolean(errors.quantity)}
                            helperText={errors.quantity?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Description</Typography>
                        <TextField
                            id="description"
                            name="description"
                            fullWidth
                            variant="outlined"
                            inputRef={register()}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" type="submit" color="primary" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{data == null ? "Add Book" : "Update Book"}</Typography>
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

export default AdminBook;