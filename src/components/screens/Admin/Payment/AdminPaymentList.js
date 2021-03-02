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
    { field: 'rollNo', headerName: 'Roll N0', width: 150, headerClassName: 'headerStyle'},
    { field: 'studentName', headerName: 'Student Name', width: 200, headerClassName: 'headerStyle'},
    { field: 'class', headerName: 'Class', width: 150, headerClassName: 'headerStyle'},
    { field: 'title', headerName: 'Title', width: 150, headerClassName: 'headerStyle' },
    { field: 'amount', headerName: 'Amount', width: 150, headerClassName: 'headerStyle' },
    { field: 'status', headerName: 'Status', width: 150, headerClassName: 'headerStyle' },
    { field: 'date', headerName: 'Date', width: 150, headerClassName: 'headerStyle' },
    { field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
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
    { id: 1, rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 2, rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 3, rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 4, rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 5, rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 6, rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 7, rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 8, rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 9, rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 10,rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 11,rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 12,rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 13,rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 14,rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 15,rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 16,rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 17,rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
    { id: 18,rollNo:"101",studentName:"Parth Joshi", class: 'class 5',title:"Mid", amount: '5000',status:"Paid", date:"03/12/2020"},
  ];

export default function AdminPaymentList() {


  const classes = useStyles();
    return (
      
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
    );
    
}

