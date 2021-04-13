import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  Button, Grid, makeStyles, DialogContentText, DialogActions, Typography,
  TableContainer, TableCell, Table, TableRow, TableBody
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

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
    color: "crimson"
  }
}));

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


export default function AdminBookList() {

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
    { field: 'isbn', headerName: 'ISBN', width: 100, headerClassName: 'headerStyle' },
    { field: 'bookName', headerName: 'Book Name', width: 150, headerClassName: 'headerStyle' },
    { field: 'authorName', headerName: 'Author Name', width: 150, headerClassName: 'headerStyle' },
    { field: 'rackLocation', headerName: 'Rack Location', width: 150, headerClassName: 'headerStyle' },
    { field: 'quantity', headerName: 'Quantity', width: 120, headerClassName: 'headerStyle' },
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
            <Link to={{ pathname: "/library/edit-book", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 2, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 3, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 4, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 5, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 6, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 7, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 8, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 9, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 10, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 11, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 12, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 13, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 14, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 15, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 16, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 17, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
    { id: 18, isbn: "87852", bookName: "C++", authorName: "Parth Joshi", rackLocation: '25', quantity: "4" },
  ];

  const classes = useStyles();

  return (
    <div>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Book List</Typography>
        </Grid>
        <Grid item>
          <Link to="/library/add-book" style={{ textDecoration: "none" }}>
            <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
              <AddBoxRoundedIcon fontSize="large" />
              <Typography variant="h6">Add Book</Typography>
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
        <div style={{ width: '85%' }} className={classes.root}>
          <DataGrid rows={rows} columns={columns} autoHeight={true} onRowSelected={(item) => setData(item.data)} />
        </div>
        <div>
          <Dialog fullWidth maxWidth="sm" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
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
                      <StyledTableRow key={data.authorName}>
                        <StyledTableCell >Author Name : {data.authorName}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.rackLocation}>
                        <StyledTableCell >Rack Location : {data.rackLocation}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.quantity}>
                        <StyledTableCell >Quantity : {data.quantity}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.category}>
                        <StyledTableCell >Category : {data.category}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.description}>
                        <StyledTableCell >Description : {data.description}</StyledTableCell>
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
                Are you sure want to delete this book {data.bookName}?
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

