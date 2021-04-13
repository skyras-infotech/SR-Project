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
import img from '../../../../Images/19.png';
import SearchBar from "material-ui-search-bar";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "darksalmon",
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
    color: "darksalmon"
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



export default function AdminHomeworkList() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'headerStyle' },
    { field: 'title', headerName: 'Title', width: 150, headerClassName: 'headerStyle' },
    { field: 'class', headerName: 'Class', width: 100, headerClassName: 'headerStyle' },
    { field: 'subject', headerName: 'Subject', width: 130, headerClassName: 'headerStyle' },
    { field: 'submissionDate', headerName: 'Submission Date', width: 170, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 270, headerClassName: 'headerStyle', renderCell: () => (
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
            <Link to={{ pathname: "/homework/edit-homework", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 2, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 3, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 4, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 5, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 6, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 7, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 8, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 9, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 10, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 11, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 12, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 13, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 14, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 15, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 16, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 17, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
    { id: 18, title: "SS HW", class: '5', subject: 'Science', submissionDate: "03/12/2021" },
  ];

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

  const classes = useStyles();
  return (
    <div>
      <Grid>
        <img src={img} width="30%" height="50%" alt="teacher" className={classes.img} />
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Homework List</Typography>
        </Grid>
        <Grid item>
          <Link to="/homework/add-homework" style={{ textDecoration: "none" }}>
            <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
              <AddBoxRoundedIcon fontSize="large" />
              <Typography variant="h6">Add Homework</Typography>
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
        <div style={{ width: '75%' }} className={classes.root}>
          <DataGrid rows={rows} columns={columns} autoHeight={true} onRowSelected={(item) => setData(item.data)} />
        </div>
        <div>
          <Dialog fullWidth maxWidth="sm" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Homework
                  </DialogTitle>
            <DialogContent dividers>
              <Grid container>
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                      <StyledTableRow key={data.title}>
                        <StyledTableCell >Title : {data.title}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.class}>
                        <StyledTableCell >Class : {data.class}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.subject}>
                        <StyledTableCell >Subject : {data.subject}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.submissionDate}>
                        <StyledTableCell >Submission Date : {data.submissionDate}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.content}>
                        <StyledTableCell >Content : {data.content}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow key={data.downloadDoc}>
                        <StyledTableCell >Download Document : {data.downloadDoc}</StyledTableCell>
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
                Are you sure want to delete this homework {data.title}?
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

