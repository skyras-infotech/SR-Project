import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, makeStyles,Typography,DialogContentText,DialogActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AdminReportsAndRecordsDetails from './AdminReportsAndRecordsDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "orange",
    },
  },
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


export default function AdminReportsAndRecordsList() {

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
    { field: 'weekDate', headerName: 'Report Date', width: 180, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 260, headerClassName: 'headerStyle', renderCell: () => (
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
            onClick={handleDeleteClickOpen}
            style={{ marginLeft: 16, backgroundColor: "lightpink", color: "black" }}>
            Delete
          </Button>
        </Grid>
      ),
    },
  ];

  const rows = [
    { id: 1, weekDate: "03/12/2021"},
    { id: 2, weekDate: "03/12/2021"},
    { id: 3, weekDate: "03/12/2021"},
    { id: 4, weekDate: "03/12/2021"},
    { id: 5, weekDate: "03/12/2021"},
    { id: 6, weekDate: "03/12/2021"},
    { id: 7, weekDate: "03/12/2021"},
    { id: 8, weekDate: "03/12/2021"},
    { id: 9, weekDate: "03/12/2021"},
    { id: 10, weekDate: "03/12/2021"},
    { id: 11, weekDate: "03/12/2021"},
    { id: 12, weekDate: "03/12/2021"},
    { id: 13, weekDate: "03/12/2021"},
    { id: 14, weekDate: "03/12/2021"},
    { id: 15, weekDate: "03/12/2021"},
    { id: 16, weekDate: "03/12/2021"},
    { id: 17, weekDate: "03/12/2021"},
    { id: 18, weekDate: "03/12/2021"},
  ];

  const classes = useStyles();
  return (
    <>
      <div style={{ width: '40%' }} className={classes.root}>
        <DataGrid rows={rows} columns={columns} autoHeight={true} onRowSelected={(item) => setData(item.data)} />
      </div>
      <div>
        <Dialog fullWidth maxWidth="lg" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Weekly Reports and Records Details
                  </DialogTitle>
          <DialogContent dividers>
            <AdminReportsAndRecordsDetails details={data} />
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
              Are you sure want to delete this records?
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
    </>
  );

}

