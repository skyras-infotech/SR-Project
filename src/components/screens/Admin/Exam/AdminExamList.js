import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, makeStyles,Typography,DialogContentText,DialogActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AdminExamDetails from './AdminExamDetails';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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


export default function AdminExamList() {

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
    { field: 'examTitle', headerName: 'Title', width: 150, headerClassName: 'headerStyle' },
    { field: 'className', headerName: 'Class', width: 90, headerClassName: 'headerStyle' },
    { field: 'sectionName', headerName: 'Section', width: 120, headerClassName: 'headerStyle' },
    { field: 'termName', headerName: 'Term', width: 120, headerClassName: 'headerStyle' },
    { field: 'examStartDate', headerName: 'Start Date', width: 130, headerClassName: 'headerStyle' },
    { field: 'examEndDate', headerName: 'End Date', width: 120, headerClassName: 'headerStyle' },
    { field: 'comment', headerName: 'Comment', width: 150, headerClassName: 'headerStyle' },
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
            style={{ marginLeft: 16, backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "/exam/edit-exam", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 2, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 3, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 4, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 5, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 6, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 7, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 8, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 9, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 10, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 11, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 12, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 13, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 14, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 15, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 16, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 17, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
    { id: 18, examTitle: "Mid Term", className: "6", sectionName: "Class A", termName: 'MID TERM', examStartDate: "03/12/2020", examEndDate: "02/03/2021", comment: "No comment" },
  ];

  const classes = useStyles();
  return (
    <>
      <div style={{ width: '100%' }} className={classes.root}>
        <DataGrid rows={rows} columns={columns} autoHeight={true} onRowSelected={(item) => setData(item.data)} />
      </div>
      <div>
        <Dialog fullWidth maxWidth="lg" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Exam Details
                  </DialogTitle>
          <DialogContent dividers>
            <AdminExamDetails details={data} />
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
              Are you sure want to delete this exam {data.examTitle}?
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

