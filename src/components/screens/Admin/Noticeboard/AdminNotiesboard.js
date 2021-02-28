import { Grid, makeStyles, TextField, Typography, Button,FormControl,Select,FormGroup,FormControlLabel,Checkbox } from '@material-ui/core';
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

function AdminNoticeboard () {

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
        hw:false,
        
      });

      const handleSubmittedDocuments = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
      const { hw } = state;
    
      const handleClass = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    const classes = usesStyles();

    return (
        <Grid container spacing={3} >
             <Grid item container spacing={3}>

               <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice Title</Typography>
                        <TextField
                            required
                            id="noticeTitle"
                            name="noticeTitle"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice Comment</Typography>
                    <TextField
                            id="noticeComment"
                            name="noticeComment"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice Start Date</Typography>
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
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice End Date</Typography>
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
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Notice For</Typography>
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
                            <option value={10}>All</option>
                            <option value={20}>Student</option>
                            <option value={30}>Teacher</option>
                            </Select>
                        </FormControl>
                </Grid>


                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Class</Typography>
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
                            <option value={10}>All</option>
                            <option value={20}>Class 5</option>
                            <option value={30}>Class 6</option>
                            </Select>
                        </FormControl>
                </Grid>
                
                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Enable Mail</Typography>
                    <FormControl component="fieldset">
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={hw} color="primary" onChange={handleSubmittedDocuments} name="hw" />}
                            label="Enable Send Mail To Parents And Students"
                        />
                        </FormGroup>
                    </FormControl>
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Enable SMS</Typography>
                    <FormControl component="fieldset">
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={hw} color="primary" onChange={handleSubmittedDocuments} name="hw" />}
                            label="Enable Send SMS To Parents And Students"
                        />
                        </FormGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Add Notice</Typography>
                        </Button>
                </Grid>

            </Grid>
        </Grid>
    );
} 

export default AdminNoticeboard;