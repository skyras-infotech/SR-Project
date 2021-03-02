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
    { field: 'authorName', headerName: 'Author Name', width: 170, headerClassName: 'headerStyle'},
    { field: 'rackLocation', headerName: 'Rack Location', width: 150, headerClassName: 'headerStyle' },
    { field: 'quantity', headerName: 'Quantity', width: 150, headerClassName: 'headerStyle' },
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
    { id: 1, isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 2, isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 3, isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 4, isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 5, isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 6, isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 7, isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 8, isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 9, isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 10,isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 11,isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 12,isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 13,isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 14,isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 15,isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 16,isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 17,isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
    { id: 18,isbn:"87852", bookName:"C++", authorName:"Parth Joshi", rackLocation: '25', quantity:"4"},
  ];

export default function AdminBookList() {


  const classes = useStyles();
    return (
      
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
    );
    
}

