import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, makeStyles, Dialog, DialogContentText, withStyles, Typography, DialogActions } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "blue",
    },
  },
  margin: {
    margin: theme.spacing(0.5),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  searchBox: {
    borderRadius: "20px",
    padding: "5px 10px",
    backgroundColor: "#ffefec",
    color: "white"
  },
  img: {
    position: "fixed",
    bottom: 0,
    right: 0,
    opacity: "0.3"
  },
  textColor: {
    color: "blue"
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function AdminRoomList() {

  const [data, setData] = React.useState("");
  const [searchData, setSearchData] = React.useState("");

  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClickClose = () => {
    setDeleteOpen(false);
  };


  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'headerStyle' },
    { field: 'roomUniqueID', headerName: 'Unique ID', width: 130, headerClassName: 'headerStyle' },
    { field: 'hostelName', headerName: 'Hostel Name', width: 150, headerClassName: 'headerStyle' },
    { field: 'roomCategory', headerName: 'Category', width: 120, headerClassName: 'headerStyle' },
    { field: 'bedCapacity', headerName: 'Bed Capacity', width: 140, headerClassName: 'headerStyle' },
    { field: 'availability', headerName: 'Availability', width: 150, headerClassName: 'headerStyle' },
    { field: 'description', headerName: 'Description', width: 150, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "/room/edit-room", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleDeleteClickOpen}
            style={{ marginLeft: 16, backgroundColor: "lightpink", color: "black" }}>
            Delete
          </Button>
        </Grid>
      ),
    },
  ];

  const rows = [
    { id: 1, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 2, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 3, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 4, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 5, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 6, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 7, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 8, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 9, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 10, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 11, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 12, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 13, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 14, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 15, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 16, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 17, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
    { id: 18, roomUniqueID: "RM001", hostelName: "Sky Hostel", roomCategory: "VIP", bedCapacity: "2", availability: "Available", description: "All facilities available" },
  ];


  const classes = useStyles();
  return (
    <div>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Room List</Typography>
        </Grid>
        <Grid item>
          <Link to="/room/add-room" style={{ textDecoration: "none" }}>
            <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
              <AddBoxRoundedIcon fontSize="large" />
              <Typography variant="h6">Add Room</Typography>
            </Grid>
          </Link>
        </Grid>
        <Grid item>
          <Grid container xs alignItems="center" >
            <SearchBar
              className={classes.searchBox}
              value={searchData}
              onChange={(newValue) => setSearchData(newValue)}
              onRequestSearch={() => console.log(searchData)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "20px" }}>
        <div style={{ height: 700, width: '100%' }} className={classes.root}>
          <DataGrid rows={rows} columns={columns} autoHeight={true} onRowSelected={(item) => setData(item.data)} />
        </div>
        <div>
          <Dialog
            open={deleteOpen}
            onClose={handleDeleteClickClose}>
            <DialogTitle id="alert-dialog-title">Alert! Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure want to delete this room {data.roomUniqueID}?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteClickClose} color="primary">
                No
            </Button>
              <Button onClick={handleDeleteClickClose} color="primary" autoFocus>
                Yes
            </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </div>
  );

}

