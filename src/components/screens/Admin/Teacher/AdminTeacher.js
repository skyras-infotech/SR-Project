import {
    RadioGroup, FormControlLabel, Radio, Grid, Select, makeStyles, InputAdornment, TextField,
    Typography, FormControl, FormHelperText, Backdrop, MenuItem, CircularProgress, IconButton, OutlinedInput, Button, Checkbox
} from '@material-ui/core';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import placeholder from '../../../../Images/placeholder.jpg';
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

function AdminTeacher() {

    let location = useLocation();

    let [data, setData] = useState(location.state);

    const [cb, setCB] = useState({
        cv: data !== undefined ? data.cv : false,
        educer: data !== undefined ? data.educer : false,
        excer: data !== undefined ? data.excer : false,
    });

    const handleCheckbox = (e) => {
        setCB({ ...cb, [e.target.name]: e.target.checked });
    };

    const handleData = (e) => {
        if (data !== undefined) {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const [gender, setGender] = React.useState(
        data !== undefined ? data.teacher_gender : "male"
    );
    const handleGender = (event) => {
        setGender(event.target.value);
    };
    const [base64, setBase64] = useState("");


    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => {
        if (errors !== {}) {
            handleToggle();
        }
        data["image"] = base64;
        let teacherData = JSON.stringify(data);
        console.log(teacherData);
    }

    const classes = usesStyles();

    const [file, setFile] = useState(null);

    const decodeImage = (e) => {
        let img = e.target.files[0];
        if (img) {
            const reader = new FileReader();
            reader.onload = (readerEvt) => {
                let binaryString = readerEvt.target.result;
                setBase64(btoa(binaryString))
            }
            reader.readAsBinaryString(img)
        }
        console.log(img);

    }

    const fileHandler = (e) => {
        setFile(e.target.files[0]);
        decodeImage(e);
    };

    const [values, setValues] = React.useState({
        password: '',
    });

    const handlePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(true);
    };

    return (
        <Grid container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item container spacing={3}>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>First Name</Typography>
                        <TextField
                            id="firstName"
                            name="fullName"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter first name"
                            })}
                            value={data == null ? null : data.fullName}
                            onChange={handleData}
                            error={Boolean(errors.firstName)}
                            helperText={errors.firstName?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Middle Name</Typography>
                        <TextField
                            id="middleName"
                            name="middleName"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter middle name"
                            })}
                            error={Boolean(errors.middleName)}
                            helperText={errors.middleName?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Last Name</Typography>
                        <TextField
                            id="lastName"
                            name="lastName"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter last name"
                            })}
                            error={Boolean(errors.lastName)}
                            helperText={errors.lastName?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Gender</Typography>
                        <FormControl error={Boolean(errors.gender)}>
                            <RadioGroup row name="gender" className={classes.textColor} value={gender} onChange={handleGender}>
                                <FormControlLabel value="male" control={<Radio color="black" inputRef={register({ required: "Please select gender" })} />} label="Male" />
                                <FormControlLabel value="female" control={<Radio color="black" inputRef={register({ required: "Please select gender" })} />} label="Female" />
                            </RadioGroup>
                            <FormHelperText>{errors.gender?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Date of Birth</Typography>
                        <TextField
                            id="dob"
                            name="dob"
                            type="date"
                            variant="outlined"
                            defaultValue=""
                            fullWidth
                            inputRef={register({
                                required: "Please enter date of birth"
                            })}
                            error={Boolean(errors.dob)}
                            helperText={errors.dob?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Address</Typography>
                        <TextField
                            id="address"
                            name="address"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter address"
                            })}
                            error={Boolean(errors.address)}
                            helperText={errors.address?.message}
                        />
                    </Grid>


                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>City</Typography>
                        <TextField
                            id="city"
                            name="city"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter city"
                            })}
                            error={Boolean(errors.city)}
                            helperText={errors.city?.message}
                        />
                    </Grid>


                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>State</Typography>
                        <TextField
                            id="state"
                            name="state"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter state"
                            })}
                            error={Boolean(errors.state)}
                            helperText={errors.state?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Zip Code</Typography>
                        <TextField
                            id="zipcode"
                            name="zipcode"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter zipcode"
                            })}
                            error={Boolean(errors.zipcode)}
                            helperText={errors.zipcode?.message}
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
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Mobile number</Typography>
                        <TextField
                            id="mob"
                            name="mob"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter mobile number",
                                pattern: {
                                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                    message: "Please enter valid mobile number"
                                }

                            })}
                            error={Boolean(errors.mob)}
                            helperText={errors.mob?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Alternate mobile number</Typography>
                        <TextField
                            id="amob"
                            name="amob"
                            fullWidth
                            variant="outlined"
                            inputRef={register}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Phone</Typography>
                        <TextField
                            id="phone"
                            name="phone"
                            fullWidth
                            variant="outlined"
                            inputRef={register}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Email</Typography>
                        <TextField
                            id="email"
                            name="email"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter email id",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Please enter valid email id"
                                }
                            })}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Working Hour</Typography>
                        <FormControl variant="outlined" fullWidth>
                            <Controller
                                render={(props) => (
                                    <Select value={props.value} onChange={props.onChange}>
                                        <MenuItem value="">--Select Hours--</MenuItem>
                                        <MenuItem value="Part">Part Time</MenuItem>
                                        <MenuItem value="Full">Full Time</MenuItem>
                                    </Select>
                                )}
                                name="hour"
                                control={control}
                                defaultValue=""
                            />
                        </FormControl>
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Username</Typography>
                        <TextField
                            id="username"
                            name="username"
                            fullWidth
                            variant="outlined"
                            inputRef={register({
                                required: "Please enter username"
                            })}
                            error={Boolean(errors.username)}
                            helperText={errors.username?.message}
                        />
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Password</Typography>
                        <FormControl fullWidth error={Boolean(errors.password)}>
                            <OutlinedInput
                                id="password"
                                name="password"
                                inputRef={register({
                                    required: "Please enter password"
                                })}

                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handlePassword('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText>{errors.password?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Submitted Documents</Typography>
                        <FormControl>
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="cv" checked={cb.cv} onChange={handleCheckbox} />}
                                label="Curriculam Vitae"
                            />
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="educer" checked={cb.educer} onChange={handleCheckbox} />}
                                label="Education Certificate"
                            />
                            <FormControlLabel
                                control={<Checkbox inputRef={register} color="primary" name="excer" checked={cb.excer} onChange={handleCheckbox} />}
                                label="Experience Certificate"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Image</Typography>
                        <Grid item xs={12} container justify="space-between" alignItems="flex-start" spacing={5}>
                            <Grid item>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                    name="image"
                                    ref={register}
                                    onChange={fileHandler}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" color="primary" className={classes.margin}>Choose Image</Button>
                                </label>
                            </Grid>
                            <Grid item>
                                <img src={file ? URL.createObjectURL(file) : placeholder} alt="Img" className={classes.imgOptionsSize} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" type="submit" className={clsx(classes.roundedButton, classes.whiteColor)}>
                            <Typography variant="h6">{data == null ? "Add Teacher" : "Update Teacher"}</Typography>
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

export default AdminTeacher;