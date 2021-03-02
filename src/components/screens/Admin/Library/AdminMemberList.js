import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button,Grid, makeStyles } from '@material-ui/core';

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
    { field: 'rollNo', headerName: 'Roll No', width: 100, headerClassName: 'headerStyle'},
    { field: 'fullName', headerName: 'Student Name', width: 200, headerClassName: 'headerStyle'},
    { field: 'email', headerName: 'Student Email', width: 200, headerClassName: 'headerStyle' },
    { field: 'class', headerName: 'Class', width: 200, headerClassName: 'headerStyle'},
    { field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
                variant="contained"
                color="primary"
                size="small"
                style={{backgroundColor:"lightgreen"}}>
             View
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
    { id: 1, rollNo:101, class:"Class 5", fullName: 'Snow Jon',  email: 'snow@gmail.com'},
    { id: 2, rollNo:101, class:"Class 5", fullName: 'Lannister Cersei', email: 'Lannister@gmail.com' },
    { id: 3, rollNo:101, class:"Class 5", fullName: 'Lannister Jaime', email: 'Jaime@gmail.com' },
    { id: 4, rollNo:101, class:"Class 5", fullName: 'Stark patel', email: 'Daenerys@gmail.com' },
    { id: 5, rollNo:101, class:"Class 5", fullName: 'Targaryen patel', email: 'snow@gmail.com' },
    { id: 6, rollNo:101, class:"Class 5", fullName: 'Melisandre patel', email: 'Melisandre@gmail.com' },
    { id: 7, rollNo:101, class:"Class 5", fullName: 'Clifford patel', email: 'Ferrara@gmail.com' },
    { id: 8, rollNo:101, class:"Class 5", fullName: 'Frances patel', email: 'Rossini@gmail.com' },
    { id: 9, rollNo:101, class:"Class 5", fullName: 'Roxie patel', email: 'Harvey@gmail.com' },
    { id: 10,rollNo:101, class:"Class 5", fullName: 'Snow patel', email: 'snow@gmail.com'},
    { id: 11,rollNo:101, class:"Class 5", fullName: 'Lannister patel', email: 'Lannister@gmail.com' },
    { id: 12,rollNo:101, class:"Class 5", fullName: 'Lannister patel', email: 'Jaime@gmail.com' },
    { id: 13,rollNo:101, class:"Class 5", fullName: 'Stark patel', email: 'Daenerys@gmail.com' },
    { id: 14,rollNo:101, class:"Class 5", fullName: 'Targaryen patel', email: 'snow@gmail.com' },
    { id: 15,rollNo:101, class:"Class 5", fullName: 'Melisandre patel', email: 'Melisandre@gmail.com' },
    { id: 16,rollNo:101, class:"Class 5", fullName: 'Clifford patel', email: 'Ferrara@gmail.com' },
    { id: 17,rollNo:101, class:"Class 5", fullName: 'Frances patel', email: 'Rossini@gmail.com' },
    { id: 18,rollNo:101, class:"Class 5", fullName: 'Roxie patel', email: 'Harvey@gmail.com' },
  ];

export default function AdminMemberList() {

  const classes = useStyles();
    return (
      
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
     
    );
    
}

