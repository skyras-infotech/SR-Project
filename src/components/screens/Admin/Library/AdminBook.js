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

function AdminBook () {

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
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>ISBN Number</Typography>
                        <TextField
                            required
                            id="isbn"
                            name="isbn"
                            fullWidth
                            variant="outlined"
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
                    <option value={20}>Educational</option>
                    <option value={30}>Educational</option>
                    </Select>
                </FormControl>
            </Grid> 

            <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Book Name</Typography>
                        <TextField
                            required
                            id="bookName"
                            name="bookName"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>


                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Author Name</Typography>
                        <TextField
                            required
                            id="authorName"
                            name="authorName"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

            <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Rack Location</Typography>
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
                    <option value={10}>25</option>
                    <option value={20}>25</option>
                    <option value={30}>25</option>
                    </Select>
                </FormControl>
            </Grid> 

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Price</Typography>
                        <TextField
                            required
                            id="price"
                            name="price"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Quantity</Typography>
                        <TextField
                            required
                            id="quantity"
                            name="quantity"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Description</Typography>
                        <TextField
                            required
                            id="description"
                            name="description"
                            fullWidth
                            variant="outlined"
                        />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Create Book Entry</Typography>
                        </Button>
                </Grid>

            </Grid>
        </Grid>
    );
} 

export default AdminBook;