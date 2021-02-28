import { FormControlLabel,Grid, Select, makeStyles, TextField, 
    Typography, FormControl, Button,FormGroup,Checkbox } from '@material-ui/core';
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

function AdminHomework () {

    const classes = usesStyles();

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

    return (
        <Grid container spacing={3} >
             <Grid item container spacing={3}>


             <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Title</Typography>
                        <TextField
                            required
                            id="title"
                            name="title"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

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
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Subject</Typography>
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
                    <option value={10}>Science</option>
                    <option value={20}>English</option>
                    <option value={30}>Science</option>
                    </Select>
                </FormControl>
            </Grid> 

            <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Homework Document</Typography>
                    <p className={clsx(classes.margin)}>Upload in PDF format only*</p>
                    <Grid item xs={12} container justify="space-between" alignItems="flex-start" spacing={5}>
                            <Grid item>
                                <input
                                    accept="file/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" color="primary" className={classes.margin}>Choose File</Button>
                                </label>
                            </Grid>
                    </Grid>
                </Grid>


            <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Content</Typography>
                        <TextField
                            required
                            id="content"
                            name="content"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>
                
                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Submission Date</Typography>
                        <TextField
                            id="submissionDate"
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
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Enable</Typography>
                    <FormControl component="fieldset">
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={hw} color="primary" onChange={handleSubmittedDocuments} name="hw" />}
                            label="Enable Send Mail To Parents And Students"
                        />
                        </FormGroup>
                    </FormControl>
                </Grid>


                <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Save Homework</Typography>
                        </Button>
                </Grid>

            </Grid>
        </Grid>
    );
} 

export default AdminHomework;