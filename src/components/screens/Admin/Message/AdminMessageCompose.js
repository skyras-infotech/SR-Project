import React from 'react';
import clsx from 'clsx';
import {
    Grid, Select, makeStyles, TextField, Typography, FormControl, MenuItem, FormHelperText,
    Button, Backdrop, CircularProgress
} from '@material-ui/core';
import { Autocomplete } from "@material-ui/lab";
import { useForm, Controller } from 'react-hook-form';

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

function AdminMessageCompose() {

    const usersList = [
        { username: "Sumit Gupta" },
        { username: "Sanjay Rathod" },
        { username: "Mika Singh" },
        { username: "Sonam Singh" },
        { username: "Vishal Rathod" },
        { username: "Sanjana Singh" },
        { username: "Ramesh Rathod" },
    ];


    const { register, handleSubmit, control, errors } = useForm({
        defaultValues:{
            listOfUsers : null,
        }
    });
    const onSubmit = (data) => console.log(data);

    const classes = usesStyles();

    const [file, setFile] = React.useState([]);

    const fileHandler = (e) => {
        setFile(e.target.files);
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const [showClassSection, setShowClassSection] = React.useState(true);
    const [selectUsers, setSelectUsers] = React.useState("");

    const handleMessageTo = (event) => {
        setSelectUsers(event.target.textContent);
        if (event.target.textContent === "Teachers" || event.target.textContent === "Admin") {
            setShowClassSection(false);
        }
        else {
            setShowClassSection(true);
        }
    }


    return (
        <Grid container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>

                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Message To</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.messageTo)}>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange} onClose={handleMessageTo}>
                                        <MenuItem value=""> --Select person--</MenuItem>
                                        <MenuItem value="Students">Students</MenuItem>
                                        <MenuItem value="Admin">Admin</MenuItem>
                                        <MenuItem value="Teachers">Teachers</MenuItem>
                                        <MenuItem value="Parents">Parents</MenuItem>
                                    </Select>
                                )}
                                name="messageTo"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Please select message to"
                                }}
                            />
                            <FormHelperText>{errors.messageTo?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    {showClassSection &&
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
                                    defaultValue=""
                                    rules={{
                                        required: "Please select class"
                                    }}
                                />
                                <FormHelperText>{errors.class?.message}</FormHelperText>
                            </FormControl>
                        </Grid>
                    }
                    {showClassSection &&
                        <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                            <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select section</Typography>
                            <FormControl variant="outlined" fullWidth error={Boolean(errors.section)}>
                                <Controller
                                    render={(props) => (
                                        <Select value={props.value} onChange={props.onChange}>
                                            <MenuItem value="">--Select section--</MenuItem>
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
                    }

                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select {selectUsers === "" ? "users" : selectUsers}</Typography>
                        <FormControl variant="outlined" fullWidth error={Boolean(errors.listOfUsers)}>
                            <Controller
                                render={(props) => (
                                    <Autocomplete
                                        multiple
                                        options={usersList}
                                        getOptionLabel={(option) => option.username}
                                        getOptionSelected={(option,value) => option.username === value.username}
                                        filterSelectedOptions
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder={selectUsers === "" ? "users" : selectUsers}
                                            />
                                        )}
                                        onChange={(_, data) => props.onChange(data)}
                                    />
                                )}
                                name="listOfUsers"
                                control={control}
                                rules={{
                                    required: "Please select users"
                                }}
                            />
                            <FormHelperText>{errors.listOfUsers?.message}</FormHelperText>
                        </FormControl>
                    </Grid>


                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Subject</Typography>
                        <TextField
                            id="subject"
                            name="subject"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter subject"
                            })}
                            error={Boolean(errors.subject)}
                            helperText={errors.subject?.message}
                        />
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Description</Typography>
                        <TextField

                            id="description"
                            name="description"
                            fullWidth
                            multiline={true}
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter description"
                            })}
                            error={Boolean(errors.description)}
                            helperText={errors.description?.message}
                        />
                    </Grid>

                    <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Attachment</Typography>
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
                                    multiple
                                    onChange={fileHandler}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" color="primary" className={classes.margin}>Choose File</Button>
                                </label>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" color="primary" className={clsx(classes.margin)}>{
                                [...file].map((item) => item.name + "\n")
                            }</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" type="submit" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">Send Message</Typography>
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

export default AdminMessageCompose;