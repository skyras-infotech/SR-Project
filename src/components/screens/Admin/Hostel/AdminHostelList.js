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
    { field: 'hostelName', headerName: 'Hostel Name', width: 150, headerClassName: 'headerStyle'},
    { field: 'hostelType', headerName: 'Hostel Type', width: 150, headerClassName: 'headerStyle'},
    { field: 'description', headerName: 'Description', width: 300, headerClassName: 'headerStyle'},
    { field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ backgroundColor:"lightblue",color:"black" }}>
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
    { id: 1, hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 2, hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 3, hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 4, hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 5, hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 6, hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 7, hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 8, hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 9, hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 10,hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 11,hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 12,hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 13,hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 14,hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 15,hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 16,hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 17,hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
    { id: 18,hostelName:"Sky Hostel",hostelType:"Full Type", description:"All facilities available"},
  ];

export default function AdminHostelList() {

  const classes = useStyles();
    return (
     
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
     
    );
    
}

