import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, DialogContentText, DialogActions, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "crimson",
    },
  },
  marginBottom: {
    margin: theme.spacing(0),
  },
  whiteColor: {
    color: "#fff"
  },
  roundedButton: {
    borderRadius: 8,
    marginBottom: theme.spacing(1),
    width: theme.spacing(10)
  },
  textColor: {
    color: "crimson"
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

export default function AdminStudentList() {

  const [data, setData] = React.useState("");

  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClickClose = () => {
    setDeleteOpen(false);
  };

  const classes = useStyles();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'headerStyle' },
    { field: 'time', headerName: 'Time', width: 200, headerClassName: 'headerStyle' },
    { field: 'class', headerName: 'Class', width: 120, headerClassName: 'headerStyle' },
    { field: 'section', headerName: 'Section', width: 120, headerClassName: 'headerStyle' },
    { field: 'teacher', headerName: 'Teacher', width: 150, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "/study-hours/edit-study-hours", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 2, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 3, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 4, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 5, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 6, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 7, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 8, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 9, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 10, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 11, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 12, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 13, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 14, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 15, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 16, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 17, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
    { id: 18, time: "07:30 to 08:00 pm", class: '6', section: 'A', teacher: "Sumit Gupta" },
  ];

  return (
    <Grid container>
      <div style={{ width: '100%', marginTop: "20px" }} className={clsx(classes.root, classes.marginBottom)}>
        <DataGrid
          autoHeight={true}
          rows={rows}
          columns={columns}
          onRowSelected={(item) => setData(item.data)}
        />
      </div>
      <div>
        <Dialog
          open={deleteOpen}
          onClose={handleDeleteClickClose}>
          <DialogTitle id="alert-dialog-title">Alert! Are you sure?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure want to delete this?
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
  );

}

