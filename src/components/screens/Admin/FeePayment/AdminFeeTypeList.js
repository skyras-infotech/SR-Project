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
    { field: 'class', headerName: 'Class', width: 150, headerClassName: 'headerStyle'},
    { field: 'section', headerName: 'Section', width: 150, headerClassName: 'headerStyle' },
    { field: 'amount', headerName: 'Amount', width: 150, headerClassName: 'headerStyle' },
    { field: 'description', headerName: 'Description', width: 250, headerClassName: 'headerStyle' },
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
    { id: 1, feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 2, feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 3, feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 4, feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 5, feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 6, feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 7, feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 8, feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 9, feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 10,feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 11,feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 12,feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 13,feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 14,feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 15,feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 16,feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 17,feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
    { id: 18,feeType:"Semester Wise", class: 'class 5',section:"Section A", amount: '5000',description:"NA"},
  ];

export default function AdminFeeTypeList() {


  const classes = useStyles();
    return (
      
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
    );
    
}

