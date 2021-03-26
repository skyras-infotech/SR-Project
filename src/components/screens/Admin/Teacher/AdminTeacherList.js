import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, DialogContentText, DialogActions, Grid, makeStyles } from '@material-ui/core';
import AdminTeacherDetails from './AdminTeacherDetails';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    '& .headerStyle': {
      color: "blueviolet",
    },
  },
});

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

export default function AdminTeacherList() {

  const [data, setData] = React.useState("");

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
    { field: 'fullName', headerName: 'Teacher Fullname', width: 200, headerClassName: 'headerStyle' },
    { field: 'email', headerName: 'Teacher Email', width: 200, headerClassName: 'headerStyle' },
    { field: 'mobile', headerName: 'Mobile No', width: 200, headerClassName: 'headerStyle' },
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
            <Link to={{ pathname: "teacher/edit-teacher", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, fullName: 'Snow Jon', email: 'snow@gmail.com', mobile: 9874563215 },
    { id: 2, fullName: 'Lannister Cersei', email: 'Lannister@gmail.com', mobile: 9874563215 },
    { id: 3, fullName: 'Lannister Jaime', email: 'Jaime@gmail.com', mobile: 9874563215 },
    { id: 4, fullName: 'Stark patel', email: 'Daenerys@gmail.com', mobile: 9874563215 },
    { id: 5, fullName: 'Targaryen patel', email: 'snow@gmail.com', mobile: 9874563215 },
    { id: 6, fullName: 'Melisandre patel', email: 'Melisandre@gmail.com', mobile: 9874563215 },
    { id: 7, fullName: 'Clifford patel', email: 'Ferrara@gmail.com', mobile: 9874563215 },
    { id: 8, fullName: 'Frances patel', email: 'Rossini@gmail.com', mobile: 9874563215 },
    { id: 9, fullName: 'Roxie patel', email: 'Harvey@gmail.com', mobile: 9874563215 },
    { id: 10, fullName: 'Snow patel', email: 'snow@gmail.com', mobile: 9874563215 },
    { id: 11, fullName: 'Lannister patel', email: 'Lannister@gmail.com', mobile: 9874563215 },
    { id: 12, fullName: 'Lannister patel', email: 'Jaime@gmail.com', mobile: 9874563215 },
    { id: 13, fullName: 'Stark patel', email: 'Daenerys@gmail.com', mobile: 9874563215 },
    { id: 14, fullName: 'Targaryen patel', email: 'snow@gmail.com', mobile: 9874563215 },
    { id: 15, fullName: 'Melisandre patel', email: 'Melisandre@gmail.com', mobile: 9874563215 },
    { id: 16, fullName: 'Clifford patel', email: 'Ferrara@gmail.com', mobile: 9874563215 },
    { id: 17, fullName: 'Frances patel', email: 'Rossini@gmail.com', mobile: 9874563215 },
    { id: 18, fullName: 'Roxie patel', email: 'Harvey@gmail.com', mobile: 9874563215 },
  ];

  const classes = useStyles();
  return (

    <div style={{ width: '80%' }} className={classes.root}>
      <DataGrid pagination rows={rows} columns={columns} autoHeight={true} onRowSelected={(item) => setData(item.data)} />
      <div>
        <Dialog fullWidth maxWidth="lg" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Teacher Details
                  </DialogTitle>
          <DialogContent dividers>
            <AdminTeacherDetails details={data} />
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
              Are you sure want to delete this teacher {data.fullName}?
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
    </div>
  );

}