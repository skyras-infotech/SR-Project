import {
    Avatar, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton,
    Input, FormHelperText, Backdrop, CircularProgress, InputAdornment, InputLabel, makeStyles, Paper, TextField, Typography
} from "@material-ui/core";
import { AccountCircleOutlined, LockOutlined, Visibility, VisibilityOff } from "@material-ui/icons";
import { React, useState } from "react";
import logo from '../../Images/logo.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    paper: {
       // width: 400,
        // padding: 16,
        // margin: "auto",
        // textAlign: "center",
        // backgroundColor: "#faf4f4",
        // minHeight: "50vh",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    margin: {
        margin: 4,
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


export default function LoginScreen() {

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const classes = useStyles();

    const [values, setValues] = useState({
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


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper className={clsx(classes.paper)} style={{
                    position: "absolute",
                    top: "50%",
                    margin:"auto",
                    left:"50%",
                    width:"400px",
                    transform: "translate(-50%, -50%)",
                    padding: "15px"
                }} elevation={20}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} align="center">
                            <Avatar src={logo} alt="Aogo" className={classes.large} />
                        </Grid>

                        <Grid item xs={12} align="center">
                            <Typography variant="h4">Login</Typography>
                        </Grid>

                        <Grid container spacing={1} alignItems="flex-end" className={classes.margin}>
                            <Grid item>
                                <AccountCircleOutlined />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    id="username"
                                    name="username"
                                    fullWidth
                                    autoFocus
                                    label="Username"
                                    inputRef={register({
                                        required: "Please enter username"
                                    })}
                                    error={Boolean(errors.username)}
                                    helperText={errors.username?.message}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="flex-end" className={classes.margin}>
                            <Grid item>
                                <LockOutlined />
                            </Grid>
                            <Grid item xs>
                                <FormControl fullWidth error={Boolean(errors.password)}>
                                    <InputLabel>Password</InputLabel>
                                    <Input
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
                        </Grid>

                        <Grid item xs={12} container justify="space-between" alignItems="center">
                            <Grid item >
                                <FormControlLabel
                                    control={<Checkbox inputRef={register} color="primary" name="remember" />}
                                    label="Remember Me"
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">Forget Password?</Typography>
                            </Grid>
                        </Grid>


                        <Grid item xs={12} align="center">
                            <Button variant="contained" color="primary" type="submit" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
                                <Typography variant="h6">Login</Typography>
                            </Button>
                        </Grid>

                        <Grid item xs={12} align="left">
                            <Button
                                startIcon={<ArrowBackIcon />}>
                                Back to school
                        </Button>
                        </Grid>
                        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </Grid>
                </Paper>
            </form>
        </Grid>
    );
}