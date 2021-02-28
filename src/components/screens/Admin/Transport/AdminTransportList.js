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
    { field: 'routeName', headerName: 'Route Name', width: 200, headerClassName: 'headerStyle'},
    { field: 'noOfVehicle', headerName: 'Number of Vehicle', width: 150, headerClassName: 'headerStyle'},
    { field: 'vehicleRegNumber', headerName: 'Vehicle Registration Number', width: 150, headerClassName: 'headerStyle'},
    { field: 'driverName', headerName: 'Driver Name', width: 140, headerClassName: 'headerStyle'},
    { field: 'mobile', headerName: 'Mobile no', width: 150, headerClassName: 'headerStyle'},
    { field: 'routeFare', headerName: 'Route Fare', width: 150, headerClassName: 'headerStyle'},
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
    { id: 1, routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Snow Jon', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 2, routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Lannister Cersei', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 3, routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Lannister Jaime', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 4, routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Stark patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 5, routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Targaryen patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 6, routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Melisandre patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 7, routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Clifford patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 8, routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Frances patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 9, routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Roxie patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 10,routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Snow patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 11,routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Lannister patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 12,routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Lannister patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 13,routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Stark patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 14,routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Targaryen patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 15,routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Melisandre patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 16,routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Clifford patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 17,routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Frances patel', mobile:"7600965621",routeFare:"50 Rs"},
    { id: 18,routeName:"Vijalpore to Navsari",noOfVehicle:"2", vehicleRegNumber:"GJ-21-F-5030",driverName: 'Roxie patel', mobile:"7600965621",routeFare:"50 Rs"},
  ];

export default function AdminTranportList() {

  const classes = useStyles();
    return (
     
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
     
    );
    
}

