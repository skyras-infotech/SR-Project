import React from 'react';
import { Button,Grid, Select, makeStyles, Typography, FormControl  } from '@material-ui/core';
import clsx from 'clsx';
// import AdminAttendanceComponents from './AdminAttendanceComponents';

const useStyles = makeStyles((theme)=>({
  root: {
    '& .headerStyle': {
      color:"green",
    },
  },
  margin: {
    margin: theme.spacing(0.5),
  },
  marginBottom: {
    
  },
  marginLeft:{
    marginTop:theme.spacing(1),
    marginLeft: theme.spacing(1.5),
  },
  whiteColor:{
    color:"#fff"
},
roundedButton: {
  borderRadius:8,
  marginBottom:theme.spacing(1),
  width:theme.spacing(32)
},
}));


  

export default function AdminAttendanceList() {
  
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

  const classes = useStyles();
    return (
      <Grid container spacing={3}>
          <Grid item container spacing={3} alignItems="flex-end" className={classes.marginBottom}>

            <Grid item direction="column" align="left" xs={12} sm={12} md={2} lg={2}>
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

            <Grid item direction="column" align="left" xs={12} sm={12} md={2} lg={2}>
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select section</Typography>
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

            <Grid item direction="column" align="left" xs={12} sm={12} md={2} lg={2}>
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Exam</Typography>
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
                    <option value={10}>Mid Exam</option>
                    <option value={20}>Mid Exam</option>
                    <option value={30}>Mid Exam</option>
                    </Select>
                </FormControl>
            </Grid> 

            <Grid item xs={12} sm={12} md={3} lg={3} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="body1">Export Mark</Typography>
                        </Button>
            </Grid>


        </Grid>

          {/* <div style={{ height: 700, width: '100%' }} className={clsx(classes.root,classes.marginLeft)}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
        */}
      </Grid>
    );
    
}

