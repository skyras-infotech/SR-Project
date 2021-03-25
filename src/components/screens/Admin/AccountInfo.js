import React from "react";
import { Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import placeholder from '../../../Images/placeholder.jpg';
import clsx from 'clsx';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { TextField } from '@material-ui/core';
import {useForm} from 'react-hook-form';
import { InputAdornment, FormControl,IconButton, OutlinedInput, FormHelperText,Button } from '@material-ui/core';
import { Visibility,VisibilityOff } from '@material-ui/icons';

const usesStyles = makeStyles((theme) => ({
    margin: {
      marginRight: theme.spacing(20),
      marginLeft: theme.spacing(1)
    },
    maginTop:{
        marginTop: theme.spacing(5),
    },
    maginTop2:{
        marginTop: theme.spacing(1),
    },
    root:{
      backgroundColor:"#F89",
    },
    textColor:{
        color:"#51BEFF"
    },
    whiteColor:{
        color:"#fff"
    },
    table: {
        minWidth: 300,
      },
    padding:{
        padding:theme.spacing(3),
        width:"90%"
    },
    roundedButton: {
      borderRadius:16,
      width:theme.spacing(36)
  },
  imgOptionsSize:{
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
   
}));

export default function AccountInfo() {

    const {register,errors} = useForm();

    const [values, setValues] = React.useState({
        password:'',
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

    const classes = usesStyles();

    return(
        <Grid>
            <Grid container spacing={3} alignItems="flex-end" >
                    <Grid item>
                            <img src={placeholder} alt="Img" className={classes.imgOptionsSize}/> 
                    </Grid>
                    <Grid item direction="column" align="left">
                        <Typography variant="h6">Hello</Typography>
                        <Grid item container justify="space-between" alignItems="flex-end" >
                            <MailIcon fontSize="small"/>
                            <Typography variant="body1" className={clsx(classes.margin)}>skg@skg.com</Typography>
                            <CallIcon  fontSize="small"/>
                            <Typography variant="body1" className={clsx(classes.margin)}>7600965621</Typography>
                            <LocationOnIcon  fontSize="small" />
                            <Typography variant="body1" className={clsx(classes.margin)}>Navsari</Typography>
                        </Grid>
                    </Grid>
            </Grid>

            <hr style={{borderTop: `2px solid`,marginTop:"20px"}} />

            <Grid container className={classes.maginTop} justify="center" spacing={2}>
                <Grid item container lg={6} md={6} xs={12} justify="center">
                    <Paper elevation={4} className={classes.padding}>
                        <Typography variant="h6">Account Setting</Typography>

                        <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                            <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Name</Typography>
                                <TextField
                                        id="middleName"
                                        name="middleName"
                                        fullWidth
                                        variant="outlined"
                                        inputRef={register({
                                            required:"Please enter middle name"
                                        })}
                                        error={Boolean(errors.middleName)}
                                        helperText={errors.middleName?.message}
                                />
                        </Grid>

                        <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                            <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Username</Typography>
                                <TextField
                                        id="middleName"
                                        name="middleName"
                                        fullWidth
                                        variant="outlined"
                                        inputRef={register({
                                            required:"Please enter middle name"
                                        })}
                                        error={Boolean(errors.middleName)}
                                        helperText={errors.middleName?.message}
                                />
                        </Grid>
                        
                        <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                            <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Current Password</Typography>
                                <FormControl fullWidth error={Boolean(errors.password)}>
                                    <OutlinedInput
                                        id="password"
                                        name = "password"
                                        inputRef={register({
                                            required:"Please enter password"
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

                        <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                            <Typography variant="h6" color="primary" className={clsx(classes.margin)}>New Password</Typography>
                                <FormControl fullWidth error={Boolean(errors.password)}>
                                    <OutlinedInput
                                        id="password"
                                        name = "password"
                                        inputRef={register({
                                            required:"Please enter password"
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

                        <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                            <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Confirm Password</Typography>
                                <FormControl fullWidth error={Boolean(errors.password)}>
                                    <OutlinedInput
                                        id="password"
                                        name = "password"
                                        inputRef={register({
                                            required:"Please enter password"
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

                        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.maginTop} align="center">
                            <Button variant="contained" color="primary" type="submit" className={clsx(classes.roundedButton,classes.whiteColor)}>
                                <Typography variant="h6">Save</Typography>
                            </Button>
                        </Grid>

                    </Paper>

                    

                </Grid>

                <Grid item container lg={6} md={6} xs={12} justify="center">
                    <Paper elevation={4} className={classes.padding}>
                        <Typography variant="h6">Other Information</Typography>

                        <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Address</Typography>
                                <TextField
                                        id="address"
                                        name="address"
                                        fullWidth
                                        variant="outlined"
                                        inputRef={register({
                                            required:"Please enter address"
                                        })}
                                        error={Boolean(errors.address)}
                                        helperText={errors.address?.message}
                                    />
                            </Grid>


                            <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>City</Typography>
                                <TextField
                                        id="city"
                                        name="city"
                                        fullWidth
                                        variant="outlined"
                                        inputRef={register({
                                            required:"Please enter city"
                                        })}
                                        error={Boolean(errors.city)}
                                        helperText={errors.city?.message}
                                    />
                            </Grid>


                            <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>State</Typography>
                                <TextField
                                        id="state"
                                        name="state"
                                        fullWidth
                                        variant="outlined"
                                        inputRef={register({
                                            required:"Please enter state"
                                        })}
                                        error={Boolean(errors.state)}
                                        helperText={errors.state?.message}
                                    />
                            </Grid>
                              
                            <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Mobile number</Typography>
                                <TextField
                                        id="mob"
                                        name="mob"
                                        fullWidth
                                        variant="outlined"
                                        inputRef={register({
                                            required:"Please enter mobile number",
                                            pattern: {
                                                value : /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                                message:"Please enter valid mobile number"
                                            }
                                            
                                        })}
                                        error={Boolean(errors.mob)}
                                        helperText={errors.mob?.message}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                        }}
                                    />
                            </Grid>

                            <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12} className={classes.maginTop2}>
                                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Email</Typography>
                                <TextField
                                        id="email"
                                        name="email"
                                        fullWidth
                                        variant="outlined"
                                        inputRef={register({
                                            required:"Please enter email id",
                                            pattern: {
                                                value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message:"Please enter valid email id"
                                            }
                                        })}
                                        error={Boolean(errors.email)}
                                        helperText={errors.email?.message}
                                    />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.maginTop} align="center">
                                <Button variant="contained" color="primary" type="submit" className={clsx(classes.roundedButton,classes.whiteColor)}>
                                    <Typography variant="h6">Save</Typography>
                                </Button>
                            </Grid>


                    </Paper>

                    

                </Grid>

            </Grid>
        </Grid> 
    );
}