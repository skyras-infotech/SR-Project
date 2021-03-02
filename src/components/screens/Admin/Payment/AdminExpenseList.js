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
    { field: 'supplierName', headerName: 'Supplier Name', width: 200, headerClassName: 'headerStyle'},
    { field: 'amount', headerName: 'Amount', width: 150, headerClassName: 'headerStyle' },
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
    { id: 1,  supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 2,  supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 3,  supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 4,  supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 5,  supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 6,  supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 7,  supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 8,  supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 9,  supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 10, supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 11, supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 12, supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 13, supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 14, supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 15, supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 16, supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 17, supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
    { id: 18, supplierName:"Parth Joshi", amount: '5000', date:"03/12/2020"},
  ];

export default function AdminExpenseList() {


  const classes = useStyles();
    return (
      
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
    );
    
}

