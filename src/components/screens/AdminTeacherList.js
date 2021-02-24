import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid,makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    '& .headerStyle': {
      color:"green",
    },
  },
});

const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide:true, headerClassName: 'headerStyle'},
    { field: 'fullName', headerName: 'Teacher Fullname', width: 200, headerClassName: 'headerStyle'},
    { field: 'email', headerName: 'Teacher Email', width: 200, headerClassName: 'headerStyle' },
    { field: 'mobile', headerName: 'Mobile No', width: 200, headerClassName: 'headerStyle' },
    { field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Link to="/teacher/viewteachardetails">View</Link>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16,backgroundColor:"lightblue",color:"black" }}>
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16,backgroundColor:"lightpink",color:"black" }}>
            Delete
          </Button>
        </Grid>
    ),},
  ];
  
  const rows = [
    { id: 1, fullName: 'Snow Jon',  email: 'snow@gmail.com',mobile:9874563215},
    { id: 2, fullName: 'Lannister Cersei', email: 'Lannister@gmail.com' ,mobile:9874563215},
    { id: 3, fullName: 'Lannister Jaime', email: 'Jaime@gmail.com' ,mobile:9874563215},
    { id: 4, fullName: 'Stark patel', email: 'Daenerys@gmail.com' ,mobile:9874563215},
    { id: 5, fullName: 'Targaryen patel', email: 'snow@gmail.com' ,mobile:9874563215},
    { id: 6, fullName: 'Melisandre patel', email: 'Melisandre@gmail.com' ,mobile:9874563215},
    { id: 7, fullName: 'Clifford patel', email: 'Ferrara@gmail.com' ,mobile:9874563215},
    { id: 8, fullName: 'Frances patel', email: 'Rossini@gmail.com' ,mobile:9874563215},
    { id: 9, fullName: 'Roxie patel', email: 'Harvey@gmail.com' ,mobile:9874563215},
    { id: 10, fullName: 'Snow patel', email: 'snow@gmail.com',mobile:9874563215},
    { id: 11, fullName: 'Lannister patel', email: 'Lannister@gmail.com' ,mobile:9874563215},
    { id: 12, fullName: 'Lannister patel', email: 'Jaime@gmail.com' ,mobile:9874563215},
    { id: 13, fullName: 'Stark patel', email: 'Daenerys@gmail.com' ,mobile:9874563215},
    { id: 14, fullName: 'Targaryen patel', email: 'snow@gmail.com' ,mobile:9874563215},
    { id: 15, fullName: 'Melisandre patel', email: 'Melisandre@gmail.com' ,mobile:9874563215},
    { id: 16, fullName: 'Clifford patel', email: 'Ferrara@gmail.com' ,mobile:9874563215},
    { id: 17, fullName: 'Frances patel', email: 'Rossini@gmail.com' ,mobile:9874563215},
    { id: 18, fullName: 'Roxie patel', email: 'Harvey@gmail.com' ,mobile:9874563215},
  ];

export default function AdminTeacherList() {
  const classes = useStyles();
    return (
        <div style={{ height: 700, width: '100%' }} className={classes.root}>
        <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
        </div>
    );
    
}