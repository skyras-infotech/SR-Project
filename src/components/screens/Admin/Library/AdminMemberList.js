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
import SearchBar from "material-ui-search-bar";

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
  table: {
    minWidth: 300,
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

export default function AdminMemberList() {

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
    { field: 'rollNo', headerName: 'Roll No', width: 100, headerClassName: 'headerStyle' },
    { field: 'fullName', headerName: 'Student Name', width: 200, headerClassName: 'headerStyle' },
    { field: 'email', headerName: 'Student Email', width: 200, headerClassName: 'headerStyle' },
    { field: 'class', headerName: 'Class', width: 120, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
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
            onClick={handleDeleteClickOpen}
            style={{ marginLeft: 16, backgroundColor: "lightpink", color: "black" }}>
            Delete
          </Button>
        </Grid>
      ),
    },
  ];

  const rows = [
    { id: 1, rollNo: 101, class: "Class 5", fullName: 'Snow Jon', email: 'snow@gmail.com' },
    { id: 2, rollNo: 101, class: "Class 5", fullName: 'Lannister Cersei', email: 'Lannister@gmail.com' },
    { id: 3, rollNo: 101, class: "Class 5", fullName: 'Lannister Jaime', email: 'Jaime@gmail.com' },
    { id: 4, rollNo: 101, class: "Class 5", fullName: 'Stark patel', email: 'Daenerys@gmail.com' },
    { id: 5, rollNo: 101, class: "Class 5", fullName: 'Targaryen patel', email: 'snow@gmail.com' },
    { id: 6, rollNo: 101, class: "Class 5", fullName: 'Melisandre patel', email: 'Melisandre@gmail.com' },
    { id: 7, rollNo: 101, class: "Class 5", fullName: 'Clifford patel', email: 'Ferrara@gmail.com' },
    { id: 8, rollNo: 101, class: "Class 5", fullName: 'Frances patel', email: 'Rossini@gmail.com' },
    { id: 9, rollNo: 101, class: "Class 5", fullName: 'Roxie patel', email: 'Harvey@gmail.com' },
    { id: 10, rollNo: 101, class: "Class 5", fullName: 'Snow patel', email: 'snow@gmail.com' },
    { id: 11, rollNo: 101, class: "Class 5", fullName: 'Lannister patel', email: 'Lannister@gmail.com' },
    { id: 12, rollNo: 101, class: "Class 5", fullName: 'Lannister patel', email: 'Jaime@gmail.com' },
    { id: 13, rollNo: 101, class: "Class 5", fullName: 'Stark patel', email: 'Daenerys@gmail.com' },
    { id: 14, rollNo: 101, class: "Class 5", fullName: 'Targaryen patel', email: 'snow@gmail.com' },
    { id: 15, rollNo: 101, class: "Class 5", fullName: 'Melisandre patel', email: 'Melisandre@gmail.com' },
    { id: 16, rollNo: 101, class: "Class 5", fullName: 'Clifford patel', email: 'Ferrara@gmail.com' },
    { id: 17, rollNo: 101, class: "Class 5", fullName: 'Frances patel', email: 'Rossini@gmail.com' },
    { id: 18, rollNo: 101, class: "Class 5", fullName: 'Roxie patel', email: 'Harvey@gmail.com' },
  ];

  const classes = useStyles();
  return (
    <div>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Member List</Typography>
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
          <Dialog fullWidth maxWidth="sm" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Member Details
                  </DialogTitle>
            <DialogContent dividers>
              <Grid container>
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                      <StyledTableRow key={data.rollNo}>
                        <StyledTableCell >Roll No : {data.rollNo}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.fullName}>
                        <StyledTableCell >Member Name : {data.fullName}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.email}>
                        <StyledTableCell >Member Email : {data.email}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.class}>
                        <StyledTableCell >Class : {data.class}</StyledTableCell>
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
                Are you sure want to delete this member {data.fullName}?
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

