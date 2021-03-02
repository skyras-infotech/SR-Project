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
    { field: 'isbn', headerName: 'ISBN', width: 130, headerClassName: 'headerStyle'},
    { field: 'bookName', headerName: 'Book Name', width: 170, headerClassName: 'headerStyle'},
    { field: 'studentName', headerName: 'Student Name', width: 170, headerClassName: 'headerStyle'},
    { field: 'issueDate', headerName: 'Issue Date', width: 170, headerClassName: 'headerStyle'},
    { field: 'returnDate', headerName: 'Return Date', width: 150, headerClassName: 'headerStyle' },
    { field: 'period', headerName: 'Period', width: 150, headerClassName: 'headerStyle' },
    { field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
           <Button
                variant="contained"
                color="primary"
                size="small"
                style={{backgroundColor:"lightgreen",color:"black" }}>
             View
          </Button>
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
    { id: 1, isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 2, isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 3, isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 4, isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 5, isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 6, isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 7, isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 8, isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 9, isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 10,isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 11,isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 12,isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 13,isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 14,isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 15,isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 16,isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 17,isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
    { id: 18,isbn:"87852", bookName:"C++", studentName:"Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021', period:"NA"},
  ];

export default function AdminIssueBookList() {


  const classes = useStyles();
    return (
      
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
    );
    
}

