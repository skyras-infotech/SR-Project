import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button,Grid, Select, makeStyles, Typography, FormControl,TextField  } from '@material-ui/core';
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


const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide:true, headerClassName: 'headerStyle'},
    { field: 'rollNo', headerName: 'Roll No', width: 100, headerClassName: 'headerStyle'},
    { field: 'fullName', headerName: 'Name', width: 200, headerClassName: 'headerStyle'},
    { field: 'attendance', headerName: 'Mark Obtained (Out of 100)', width: 200, headerClassName: 'headerStyle',
        renderCell: () => (
           <Grid container>
                        <TextField
                            required
                            id="marks"
                            name="marks"
                            fullWidth
                            variant="outlined"
                        />
           </Grid>
        ), },
    { field: 'comment', headerName: 'Comments', width: 300, headerClassName: 'headerStyle' ,
    renderCell: () => (
      <Grid container>
                   <TextField
                       required
                       id="comment"
                       name="comment"
                       fullWidth
                       variant="outlined"
                   />
      </Grid>
   ),},
    { field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
      <Grid container>
        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{backgroundColor:"lightgreen"}}>
            Update
        </Button>
      </Grid>
  ),},
  ];
  
  const rows = [
    { id: 1, rollNo:101, fullName: 'Snow Jon',  comment:"NA"},
    { id: 2, rollNo:101, fullName: 'Lannister Cersei', comment:"NA"},
    { id: 3, rollNo:101, fullName: 'Lannister Jaime', comment:"NA"},
    { id: 4, rollNo:101, fullName: 'Stark patel', comment:"NA"},
    { id: 5, rollNo:101, fullName: 'Targaryen patel', comment:"NA"},
    { id: 6, rollNo:101, fullName: 'Melisandre patel', comment:"NA"},
    { id: 7, rollNo:101, fullName: 'Clifford patel', comment:"NA"},
    { id: 8, rollNo:101, fullName: 'Frances patel', comment:"NA"},
    { id: 9, rollNo:101, fullName: 'Roxie patel', comment:"NA"},
    { id: 10,rollNo:101, fullName: 'Snow patel', comment:"NA"},
    { id: 11,rollNo:101, fullName: 'Lannister patel', comment:"NA"},
    { id: 12,rollNo:101, fullName: 'Lannister patel', comment:"NA"},
    { id: 13,rollNo:101, fullName: 'Stark patel', comment:"NA"},
    { id: 14,rollNo:101, fullName: 'Targaryen patel', comment:"NA"},
    { id: 15,rollNo:101, fullName: 'Melisandre patel', comment:"NA"},
    { id: 16,rollNo:101, fullName: 'Clifford patel', comment:"NA"},
    { id: 17,rollNo:101, fullName: 'Frances patel', comment:"NA"},
    { id: 18,rollNo:101, fullName: 'Roxie patel', comment:"NA"},
  ];

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

            <Grid item direction="column" align="left" xs={12} sm={12} md={2} lg={2}>
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
                    <option value={10}>SS</option>
                    <option value={20}>Science</option>
                    <option value={30}>English</option>
                    </Select>
                </FormControl>
            </Grid> 

            <Grid item xs={12} sm={12} md={3} lg={3} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="body1">Manage Marks</Typography>
                        </Button>
            </Grid>


        </Grid>

          <div style={{ height: 700, width: '100%' }} className={clsx(classes.root,classes.marginLeft)}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>

        
          <Grid item xs={12} sm={12} md={12} lg={12} align="right">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Update All Marks</Typography>
                        </Button>
                </Grid>
      </Grid>
    );
    
}

