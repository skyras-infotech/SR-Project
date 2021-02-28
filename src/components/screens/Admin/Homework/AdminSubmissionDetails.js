import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button,Grid, Select, makeStyles, Typography, FormControl } from '@material-ui/core';
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
    marginBottom: theme.spacing(2),
  },
  whiteColor:{
    color:"#fff"
},
roundedButton: {
  borderRadius:8,
  marginBottom:theme.spacing(1),
  width:theme.spacing(10)
},
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide:true, headerClassName: 'headerStyle'},
    { field: 'title', headerName: 'Title', width: 150, headerClassName: 'headerStyle'},
    { field: 'class', headerName: 'Class', width: 100, headerClassName: 'headerStyle'},
    { field: 'student', headerName: 'Student', width: 150, headerClassName: 'headerStyle' },
    { field: 'subject', headerName: 'Subject', width: 150, headerClassName: 'headerStyle' },
    { field: 'status', headerName: 'Status', width: 150, headerClassName: 'headerStyle' },
    { field: 'submittedDate', headerName: 'Submitted Date', width: 200, headerClassName: 'headerStyle' },
    { field: 'date', headerName: 'Date', width: 150, headerClassName: 'headerStyle' },
    { field: 'action', headerName: 'Actions', width: 120, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          {/* <Button
                variant="contained"
                color="primary"
                size="small"
                style={{backgroundColor:"lightgreen"}}>
              <Link to="/student/view-student-details" style={{ color: "black", textDecoration: "none"}}>View</Link>
          </Button> */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ backgroundColor:"lightblue",color:"black" }}>
            Download
          </Button>
          {/* <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16,backgroundColor:"lightpink",color:"black" }}>
            Delete
          </Button> */}
        </Grid>
    ),},
  ];
  
  const rows = [
    { id: 1, title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020" },
    { id: 2, title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 3, title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 4, title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 5, title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 6, title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 7, title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 8, title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 9, title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 10,title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020" },
    { id: 11,title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 12,title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 13,title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 14,title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 15,title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 16,title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 17,title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
    { id: 18,title:"SS HW", class: '5', student:"Parth Joshi", subject: 'Science',status:"Pending",submittedDate:"03/12/2021",date:"03/02/2020"  },
  ];

export default function AdminSubmissionDetails() {

  const [state, setState] = React.useState({
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
            <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select Homework</Typography>
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
                    <option value={10}>English</option>
                    <option value={20}>Gujarati</option>
                    </Select>
                </FormControl>
            </Grid> 


            <Grid item xs={12} sm={12} md={4} lg={4} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Go</Typography>
                        </Button>
            </Grid>

        </Grid>
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
      </Grid>
    );
    
}

