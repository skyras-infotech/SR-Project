import { Grid, Select, makeStyles, TextField, Typography, FormControl, Button } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';


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

function AdminIssueBook () {

    const classes = usesStyles();

      const [state, setState] = React.useState({
        age: '',
        name: 'hai',
        hw: false,
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
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Student</Typography>
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
                            <option value={10}>Bhavesh Joshi</option>
                            <option value={20}>Parth Joshi</option>
                            <option value={30}>Semester Wise</option>
                            </Select>
                        </FormControl>
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Issue Date</Typography>
                        <TextField
                            id="issueDate"
                            type="issueDate"
                            variant="outlined"
                            defaultValue="2021-02-13"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Period</Typography>
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
                            <option value={10}>2</option>
                            <option value={20}>2</option>
                            <option value={30}>2</option>
                            </Select>
                        </FormControl>
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Return Date</Typography>
                        <TextField
                            id="returnDate"
                            type="returnDate"
                            variant="outlined"
                            defaultValue="2021-02-13"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                </Grid>
                
                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Book Category</Typography>
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
                            <option value={10}>Educational</option>
                            <option value={20}>Gaming</option>
                            <option value={30}>History</option>
                            </Select>
                        </FormControl>
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Book Name</Typography>
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
                            <option value={10}>C++</option>
                            <option value={20}>C++</option>
                            <option value={30}>C++</option>
                            </Select>
                        </FormControl>
                </Grid>

              
                <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Issue Book</Typography>
                        </Button>
                </Grid>

            </Grid>
        </Grid>
    );
} 

export default AdminIssueBook;