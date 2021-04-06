import { Avatar, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, Input, InputAdornment, InputLabel, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { AccountCircleOutlined, LockOutlined, Visibility, VisibilityOff } from "@material-ui/icons";
import { React, useState } from "react";
import logo from '../../Images/logo.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 16,
        width: 400,
        magin: "auto",
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
    roundedButton: {
        borderRadius: 56,
    }

}));


export default function LoginScreen() {

    const classes = useStyles();

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <Grid align="center">
            <Paper className={classes.paper} elevation={20}>
                <Grid xs={12} container spacing={3}>
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
                            <TextField id="input-with-icon-grid" label="Username" fullWidth autoFocus />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end" className={classes.margin}>
                        <Grid item>
                            <LockOutlined />
                        </Grid>
                        <Grid item xs>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
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
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justify="space-between" alignItems="center">
                        <Grid item >
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Remember Me"
                            />
                        </Grid>

                        <Grid item>
                            <Typography variant="subtitle1">Forget Password?</Typography>
                        </Grid>
                    </Grid>


                    <Grid item xs={12} align="center">
                        <Button variant="contained" color="primary" fullWidth className={classes.roundedButton}>
                            <Typography variant="h6">Login</Typography>
                        </Button>
                    </Grid>

                    <Grid item xs={12} align="left">
                        <Button
                            startIcon={<ArrowBackIcon />}>
                            Back to school
                        </Button>
                    </Grid>



                </Grid>
            </Paper>

        </Grid>
    );
}