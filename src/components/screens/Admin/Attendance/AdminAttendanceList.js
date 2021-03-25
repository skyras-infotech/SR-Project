import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button,Grid, Select,makeStyles, Typography, FormControl,TextField,FormGroup,FormControlLabel,Checkbox  } from '@material-ui/core';
import clsx from 'clsx';

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
  textColor:{
    color:"#51BEFF"
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
    hw:false,
    
  });

  const handleClass = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmittedDocuments = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { hw } = state;

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide:true, headerClassName: 'headerStyle'},
    { field: 'rollNo', headerName: 'Roll No', width: 100, headerClassName: 'headerStyle'},
    { field: 'fullName', headerName: 'Student', width: 200, headerClassName: 'headerStyle'},
    { field: 'attendance', headerName: 'Attendance', width: 300, headerClassName: 'headerStyle',
        renderCell: () => (
           <Grid container>
                  <FormControl>
                      <FormControlLabel
                              control={<Checkbox color="primary" name="Hello" />}
                        />
                  </FormControl>
           </Grid>
        ), },
    { field: 'comment', headerName: 'Comments', width: 200, headerClassName: 'headerStyle' },
  ];
  
  const rows = [
    { id: 1,  rollNo:101, attendance:"present", fullName: 'Snow Jon',  comment:"NA" },
    { id: 2,  rollNo:101, attendance:"present", fullName: 'Lannister Cersei', comment:"NA" },
    { id: 3,  rollNo:101, attendance:"present", fullName: 'Lannister Jaime', comment:"NA" },
    { id: 4,  rollNo:101, attendance:"present", fullName: 'Stark patel', comment:"NA" },
    { id: 5,  rollNo:101, attendance:"present", fullName: 'Targaryen patel', comment:"NA" },
    { id: 6,  rollNo:101, attendance:"present", fullName: 'Melisandre patel', comment:"NA" },
    { id: 7,  rollNo:101, attendance:"present", fullName: 'Clifford patel', comment:"NA" },
    { id: 8,  rollNo:101, attendance:"present", fullName: 'Frances patel', comment:"NA" },
    { id: 9,  rollNo:101, attendance:"present", fullName: 'Roxie patel', comment:"NA" },
    { id: 10, rollNo:101, attendance:"present", fullName: 'Snow patel', comment:"NA" },
    { id: 11, rollNo:101, attendance:"present", fullName: 'Lannister patel', comment:"NA" },
    { id: 12, rollNo:101, attendance:"present", fullName: 'Lannister patel', comment:"NA" },
    { id: 13, rollNo:101, attendance:"present", fullName: 'Stark patel', comment:"NA" },
    { id: 14, rollNo:101, attendance:"present", fullName: 'Targaryen patel', comment:"NA" },
    { id: 15, rollNo:101, attendance:"present", fullName: 'Melisandre patel', comment:"NA" },
    { id: 16, rollNo:101, attendance:"present", fullName: 'Clifford patel', comment:"NA" },
    { id: 17, rollNo:101, attendance:"present", fullName: 'Frances patel', comment:"NA" },
    { id: 18, rollNo:101, attendance:"present", fullName: 'Roxie patel', comment:"NA" },
  ];

  const classes = useStyles();
    return (
      <Grid container spacing={3}>
          <Grid item container spacing={3} alignItems="flex-end" className={classes.marginBottom}>

          <Grid item direction="column" align="left" xs={12} sm={12} md={3} lg={3}>
                    <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Date</Typography>
                        <TextField
                            id="date"
                            type="date"
                            variant="outlined"
                            defaultValue="2021-02-13"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
          </Grid>


            <Grid item direction="column" align="left" xs={12} sm={12} md={3} lg={3}>
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

            <Grid item direction="column" align="left" xs={12} sm={12} md={3} lg={3}>
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

            <Grid item xs={12} sm={12} md={3} lg={3} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="body1">Take/View Attendance</Typography>
                        </Button>
            </Grid>


        </Grid>

          <Grid container spacing={2} className={classes.marginLeft}>
                  <Grid item>
                      <Typography variant="h5">Class 1, Date : 03/12/2020</Typography>
                  </Grid>
          </Grid>
          <div style={{ height: 700, width: '100%' }} className={clsx(classes.root,classes.marginLeft)}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder
                onRowSelected={(item) => console.log(item)} />
          </div>

          <Grid item direction="column" align="left" xs={12} sm={12} md={12} lg={12}>
                    <FormControl component="fieldset">
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={hw} color="primary" onChange={handleSubmittedDocuments} name="hw" />}
                            label="If student absent then Send SMS to his/her parents"
                        />
                        </FormGroup>
                    </FormControl>
            </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Save Attendance</Typography>
                        </Button>
                </Grid>
      </Grid>
    );
    
}

