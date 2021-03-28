import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, makeStyles, DialogContentText, DialogActions, Typography,
  TableContainer, TableCell, Table, TableRow, TableBody } from '@material-ui/core';
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
  margin: {
    margin: theme.spacing(0.5),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "lightgray",
    color: "black",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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


export default function AdminIssueBookList() {

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
    { field: 'isbn', headerName: 'ISBN', width: 100, headerClassName: 'headerStyle' },
    { field: 'bookName', headerName: 'Book Name', width: 150, headerClassName: 'headerStyle' },
    { field: 'studentName', headerName: 'Student', width: 150, headerClassName: 'headerStyle' },
    { field: 'issueDate', headerName: 'Issue Date', width: 130, headerClassName: 'headerStyle' },
    { field: 'returnDate', headerName: 'Return Date', width: 140, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 280, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClickOpen}
            style={{ backgroundColor: "lightgreen", color: "black" }}>
            View
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "/library/edit-issue-book", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 2, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 3, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 4, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 5, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 6, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 7, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 8, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 9, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 10, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 11, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 12, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 13, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 14, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 15, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 16, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 17, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
    { id: 18, isbn: "87852", bookName: "C++", studentName: "Parth Joshi", issueDate: '03/12/2020', returnDate: '03/01/2021' },
  ];


  const classes = useStyles();
  return (
    <>
      <div style={{ width: '85%' }} className={classes.root}>
        <DataGrid rows={rows} columns={columns} autoHeight={true} onRowSelected={(item) => setData(item.data)}/>
      </div>
      <div>
        <Dialog fullWidth maxWidth="lg" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Book Details
                  </DialogTitle>
          <DialogContent dividers>
          <Grid container>
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                      <StyledTableRow key={data.isbn}>
                        <StyledTableCell >ISBN Number : {data.isbn}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.bookName}>
                        <StyledTableCell >Book Name : {data.bookName}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.studentName}>
                        <StyledTableCell >Student Name : {data.studentName}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.class}>
                        <StyledTableCell >Class : {data.class}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.issueDate}>
                        <StyledTableCell >Issue Date : {data.issueDate}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.returnDate}>
                        <StyledTableCell >Return Date : {data.returnDate}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.category}>
                        <StyledTableCell >Category : {data.category}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.period}>
                        <StyledTableCell >Period : {data.period}</StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
            </Grid>
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
              Are you sure want to delete this issue book from student {data.studentName}?
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

