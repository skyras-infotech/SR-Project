import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { Button, Grid, makeStyles, withStyles, Typography, Dialog, DialogContentText, DialogActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import img from '../../../../Images/16.png';
import SearchBar from "material-ui-search-bar";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "green",
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
    opacity: "0.5"
  },
  textColor: {
    color: "purple"
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

export default function AdminHolidayList() {

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
    { field: 'title', headerName: 'Title', width: 150, headerClassName: 'headerStyle' },
    { field: 'description', headerName: 'Description', width: 150, headerClassName: 'headerStyle' },
    { field: 'startDate', headerName: 'Start Date', width: 150, headerClassName: 'headerStyle' },
    { field: 'endDate', headerName: 'End Date', width: 140, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "holiday/edit-holiday", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 2, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 3, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 4, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 5, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 6, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 7, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 8, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 9, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 10, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 11, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 12, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 13, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 14, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 15, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 16, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 17, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
    { id: 18, title: "Diwali", description: "21 days leave", startDate: "02/10/2020", endDate: '03/11/2020' },
  ];

  const classes = useStyles();
  return (
    <div>
      <Grid>
        <img src={img} width="30%" height="50%" alt="teacher" className={classes.img} />
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Holiday List</Typography>
        </Grid>
        <Grid item>
          <Link to="/holiday/add-holiday" style={{ textDecoration: "none" }}>
            <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
              <AddBoxRoundedIcon fontSize="large" />
              <Typography variant="h6">Add Holiday</Typography>
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
        <div style={{ width: '100%' }} className={classes.root}>
          <DataGrid rows={rows} columns={columns} autoHeight={true} onRowSelected={(item) => setData(item.data)} />
        </div>
        <div>
          <Dialog
            open={deleteOpen}
            onClose={handleDeleteClickClose}>
            <DialogTitle id="alert-dialog-title">Alert! Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure want to delete this holiday {data.title}?
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

