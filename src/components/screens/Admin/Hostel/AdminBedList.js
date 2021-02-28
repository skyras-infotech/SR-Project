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
    { field: 'bedUniqueID', headerName: 'Bed Unique ID', width: 150, headerClassName: 'headerStyle'},
    { field: 'roomUniqueID', headerName: 'Bed Unique ID', width: 150, headerClassName: 'headerStyle'},
    { field: 'availability', headerName: 'Availability', width: 150, headerClassName: 'headerStyle'},
    { field: 'description', headerName: 'Description', width: 200, headerClassName: 'headerStyle'},
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
    { id: 1, roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 2, roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 3, roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 4, roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 5, roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 6, roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 7, roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 8, roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 9, roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 10,roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 11,roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 12,roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 13,roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 14,roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 15,roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 16,roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 17,roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
    { id: 18,roomUniqueID:"RM001",bedUniqueID:"BD001",availability:"Available", description:"All facilities available"},
  ];

export default function AdminBedList() {

  const classes = useStyles();
    return (
     
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
     
    );
    
}

