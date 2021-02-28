import { RadioGroup,FormControlLabel,Radio, Grid, Select, makeStyles, InputAdornment, TextField, 
    Typography, FormControl, IconButton, OutlinedInput, Button } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { Visibility,VisibilityOff } from '@material-ui/icons';
import placeholder from '../../../../Images/placeholder.jpg';


const usesStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(0.5),
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
      roundedButton: {
        borderRadius:16,
        width:theme.spacing(36)
    },
    imgOptionsSize:{
        width: theme.spacing(14),
        height: theme.spacing(14),
      },
     
}));

function AdminStudent () {

    const classes = usesStyles();

    const [value, setValue] = React.useState('female');

    const handleGender = (event) => {
        setValue(event.target.value);
    };

    const [values, setValues] = React.useState({
        weight: '',
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

      const [state, setState] = React.useState({
        age: '',
        name: 'hai',
        
      });
    
      const handleClass = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    return (
        <Grid container spacing={3} >
             <Grid item container spacing={3}>

             <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select class</Typography>
                <FormControl variant="outlined" fullWidth>
                    <Select
                        native
                        value={state.age}
                        onChange={handleClass}
                      
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Class 8</option>
                    <option value={20}>Class 9</option>
                    <option value={30}>Class 10</option>
                    </Select>
                </FormControl>
            </Grid> 

            <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select class section</Typography>
                <FormControl variant="outlined" fullWidth>
                    <Select
                        native
                        value={state.age}
                        onChange={handleClass}
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Class 8</option>
                    <option value={20}>Class 9</option>
                    <option value={30}>Class 10</option>
                    </Select>
                </FormControl>
            </Grid> 


            <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Roll Number</Typography>
                        <TextField
                            required
                            id="rollNo"
                            name="rollNumber"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>


                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>First Name</Typography>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Middle Name</Typography>
                    <TextField
                            id="middleName"
                            name="middleName"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Last Name</Typography>
                    <TextField
                            id="lastName"
                            name="lastName"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Gender</Typography>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleGender} className={classes.textColor}>
                        <Grid item>
                            <FormControlLabel value="male" control={<Radio color="black"/>} label="Male" />
                            <FormControlLabel value="female" control={<Radio color="black" />} label="Female" />
                        </Grid>
                    </RadioGroup>
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Date of birth</Typography>
                        <TextField
                            id="dob"
                            type="date"
                            variant="outlined"
                            defaultValue="2021-02-13"
                            fullWidth
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
                        />
                </Grid>


                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>City</Typography>
                    <TextField
                            id="city"
                            name="city"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>


                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>State</Typography>
                    <TextField
                            id="state"
                            name="state"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Zip Code</Typography>
                    <TextField
                            id="zipcode"
                            name="zipcode"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>  
                
                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Class</Typography>
                        <FormControl variant="outlined" fullWidth>
                            <Select
                                native
                                value={state.age}
                                onChange={handleClass}
                              
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                            <option aria-label="None" value="" />
                            <option value={10}>Class 8</option>
                            <option value={20}>Class 9</option>
                            <option value={30}>Class 10</option>
                            </Select>
                        </FormControl>
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Mobile number</Typography>
                    <TextField
                            id="mob"
                            name="mob"
                            fullWidth
                            variant="outlined"
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
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Email</Typography>
                    <TextField
                            id="email"
                            name="email"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Username</Typography>
                    <TextField
                            id="username"
                            name="username"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Password</Typography>
                        <FormControl fullWidth>
                            <OutlinedInput
                                id="password"
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
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" color="primary" className={classes.margin}>Choose Image</Button>
                                </label>
                            </Grid>
                            <Grid item>
                                <img src={placeholder} alt="Img" className={classes.imgOptionsSize}/> 
                            </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Add Student</Typography>
                        </Button>
                </Grid>

            </Grid>
        </Grid>
    );
} 

export default AdminStudent;