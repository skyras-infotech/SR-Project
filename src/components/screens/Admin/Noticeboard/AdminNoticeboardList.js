import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, makeStyles, Typography, DialogActions, DialogContentText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import AdminNoticeboardDetails from './AdminNoticeboardDetails';
import img from '../../../../Images/15.png';
import SearchBar from "material-ui-search-bar";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "orange",
    },
  },
  margin: {
    margin: theme.spacing(0.5),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  whiteColor: {
    color: "#fff"
  },
  searchBox: {
    borderRadius: "20px",
    padding: "5px 10px",
    backgroundColor: "#ffefec",
    color: "white"
  },
  img: {
    position: "fixed",
    bottom: 25,
    right: 25,
    opacity: "0.5"
  },
  textColor: {
    color: "orange"
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function AdminNoticeboardList() {

  const [data, setData] = React.useState("");
  const [searchData, setSearchData] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClickClose = () => {
    setDeleteOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'headerStyle' },
    { field: 'title', headerName: 'Title', width: 200, headerClassName: 'headerStyle' },
    { field: 'comment', headerName: 'Comment', width: 150, hide: true, headerClassName: 'headerStyle' },
    { field: 'startDate', headerName: 'Start Date', width: 150, headerClassName: 'headerStyle' },
    { field: 'endDate', headerName: 'End Date', width: 140, headerClassName: 'headerStyle' },
    { field: 'noticeFor', headerName: 'Notice For', width: 150, headerClassName: 'headerStyle' },
    { field: 'class', headerName: 'Class', width: 90, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClickOpen}
            style={{ backgroundColor: "lightgreen" }}>
            View
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "noticeboard/edit-noticeboard", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 2, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 3, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 4, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 5, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 6, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 7, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 8, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 9, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 10, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 11, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 12, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 13, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 14, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 15, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 16, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 17, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
    { id: 18, title: "Notice for leave", comment: "NA", startDate: "02/10/2020", endDate: '03/11/2020', noticeFor: "Student", class: "6" },
  ];

  const classes = useStyles();
  return (
    <div>
      <Grid>
        <img src={img} width="20%" height="45%" alt="teacher" className={classes.img} />
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Noticeboard List</Typography>
        </Grid>
        <Grid item>
          <Link to="/noticeboard/add-noticeboard" style={{ textDecoration: "none" }}>
            <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
              <AddBoxRoundedIcon fontSize="large" />
              <Typography variant="h6">Add Notice</Typography>
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
          <Dialog fullWidth maxWidth="lg" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Notice Details
                  </DialogTitle>
            <DialogContent dividers>
              <AdminNoticeboardDetails details={data} />
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <Dialog
            open={deleteOpen}
            onClose={handleDeleteClickClose}>
            <DialogTitle id="alert-dialog-title">Alert! Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure want to delete this notice {data.title}?
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

