import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { Button, Grid, makeStyles, withStyles, Typography, Dialog, DialogContentText, DialogActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import img from '../../../../Images/20.png';
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
    { field: 'class', headerName: 'Class', width: 110, headerClassName: 'headerStyle' },
    { field: 'section', headerName: 'Section', width: 110, headerClassName: 'headerStyle' },
    { field: 'videoLink', headerName: 'Video Link', width: 180, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "/video-updation/edit-video-updation", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 2, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 3, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 4, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 5, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 6, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 7, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 8, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 9, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 10, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 11, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 12, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 13, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 14, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 15, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 16, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 17, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
    { id: 18, class: "Class 5", section: "Section A", videoLink: "http://www.google.com" },
  ];

  const classes = useStyles();
  return (
    <div>
      <Grid>
        <img src={img} width="30%" height="50%" alt="teacher" className={classes.img} />
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>VideoLink List</Typography>
        </Grid>
        <Grid item>
          <Link to="/video-updation/add-video-updation" style={{ textDecoration: "none" }}>
            <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
              <AddBoxRoundedIcon fontSize="large" />
              <Typography variant="h6">Add VideoLink</Typography>
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
                Are you sure want to delete this video link?
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

