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
    { field: 'feeType', headerName: 'Fee Type', width: 200, headerClassName: 'headerStyle'},
    { field: 'rollNo', headerName: 'Roll N0', width: 150, headerClassName: 'headerStyle'},
    { field: 'studentName', headerName: 'Student Name', width: 200, headerClassName: 'headerStyle'},
    { field: 'class', headerName: 'Class', width: 150, headerClassName: 'headerStyle'},
    { field: 'section', headerName: 'Section', width: 150, headerClassName: 'headerStyle' },
    { field: 'paymentStatus', headerName: 'Payment Status', width: 150, headerClassName: 'headerStyle' },
    { field: 'amount', headerName: 'Amount', width: 150, headerClassName: 'headerStyle' },
    { field: 'dueAmount', headerName: 'Due Amount', width: 150, headerClassName: 'headerStyle' },
    { field: 'year', headerName: 'Year', width: 150, headerClassName: 'headerStyle' },
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
    { id: 1, feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 2, feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 3, feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 4, feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 5, feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 6, feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 7, feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 8, feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 9, feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 10,feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 11,feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 12,feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 13,feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 14,feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 15,feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 16,feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 17,feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
    { id: 18,feeType:"Semester Wise", rollNo:"101",studentName:"Parth Joshi", class: 'class 5',section:"Section A", amount: '5000',paymentStatus:"Pending", dueAmount: '2000',year:"2020"},
  ];

export default function AdminFeesPaymentList() {


  const classes = useStyles();
    return (
      
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
    );
    
}

