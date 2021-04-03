import { Grid, makeStyles, Button, withStyles, Typography, DialogContentText, DialogActions } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react';
import clsx from 'clsx';

const usesStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "orange",
    },
  },
  whiteColor: {
    color: "#fff"
  },
  roundedButton: {
    borderRadius: 16,
    width: theme.spacing(36)
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

export default function AdminReportsAndRecordsDetails(prop) {

  const classes = usesStyles();

  const [data, setData] = React.useState("");

  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClickClose = () => {
    setDeleteOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'headerStyle' },
    { field: 'teacher', headerName: 'TeacherName', width: 150, headerClassName: 'headerStyle' },
    { field: 'hw', headerName: 'H.W.', width: 80, headerClassName: 'headerStyle' },
    { field: 'nc', headerName: 'N.C.', width: 80, headerClassName: 'headerStyle' },
    { field: 'lp', headerName: 'L.P.', width: 80, headerClassName: 'headerStyle' },
    { field: 'rc', headerName: 'R.C.', width: 80, headerClassName: 'headerStyle' },
    { field: 'act', headerName: 'Act.', width: 80, headerClassName: 'headerStyle' },
    { field: 'dc', headerName: 'D.C.', width: 80, headerClassName: 'headerStyle' },
    { field: 'od', headerName: 'O.D.', width: 80, headerClassName: 'headerStyle' },
    { field: 'bc', headerName: 'B.C.', width: 80, headerClassName: 'headerStyle' },
    { field: 'cca', headerName: 'CCA', width: 85, headerClassName: 'headerStyle' },
    { field: 'ass', headerName: 'Ass.', width: 80, headerClassName: 'headerStyle' },
    { field: 'ap', headerName: 'A.P.', width: 80, headerClassName: 'headerStyle' },
    { field: 'cc', headerName: 'C.C.', width: 80, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 180, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "/reports-records/edit-reports-records", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, teacher: "Priyanka Patel", hw: true, nc: true, lp: true, rc: true, act: true, dc: true, od: true, bc: false, cca: true, ass: true, ap: true, cc: false },
    { id: 2, teacher: "Sumit Gupta", hw: false, nc: true, lp: false, rc: true, act: false, dc: false, od: false, bc: true, cca: true, ass: true, ap: false, cc: true },
    { id: 3, teacher: "Yogesh Patel", hw: true, nc: true, lp: true, rc: false, act: true, dc: true, od: true, bc: false, cca: true, ass: true, ap: true, cc: true },
  ];

  return (
    <>
      <div className={classes.root}>
        <DataGrid
          rows={rows}
          columns={columns}
          hideFooterPagination
          hideFooterSelectedRowCount
          hideFooterRowCount
          autoHeight={true}
          onRowSelected={(item) => setData(item.data)} />
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12} align="right">
        <Button variant="contained" type="submit" color="primary" className={clsx(classes.roundedButton, classes.whiteColor)}>
          <Typography variant="h6">Download PDF</Typography>
        </Button>
      </Grid>
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