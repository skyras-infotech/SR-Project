import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, DialogContentText, DialogActions, makeStyles, Typography,
  TableContainer, TableCell, Table, TableRow, TableBody } from '@material-ui/core';
import clsx from 'clsx';
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
  marginBottom: {
    margin: theme.spacing(0),
  },
  textColor: {
    color: "crimson"
  },
  searchBox: {
    borderRadius: "20px",
    padding: "5px 10px",
    backgroundColor: "#ffefec",
    color: "white"
  },
  searchIconColor: {
    color: "black"
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

export default function AdminMessageSent() {

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

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'headerStyle' },
    { field: 'messageFor', headerName: 'Message For', width: 160, headerClassName: 'headerStyle' },
    { field: 'class', headerName: 'Class', width: 150, headerClassName: 'headerStyle' },
    { field: 'subject', headerName: 'Subject', width: 150, headerClassName: 'headerStyle' },
    { field: 'attachment', headerName: 'Attachment', width: 140, headerClassName: 'headerStyle' },
    { field: 'dateAndTime', headerName: 'Date & Time', width: 150, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
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
    { id: 1,  messageFor: 'Snow Jon', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 2,  messageFor: 'Lannister Cersei', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 3,  messageFor: 'Lannister Jaime', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 4,  messageFor: 'Stark patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 5,  messageFor: 'Targaryen patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 6,  messageFor: 'Melisandre patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 7,  messageFor: 'Clifford patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 8,  messageFor: 'Frances patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 9,  messageFor: 'Roxie patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 10,  messageFor: 'Snow patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 11,  messageFor: 'Lannister patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 12,  messageFor: 'Lannister patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 13,  messageFor: 'Stark patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 14,  messageFor: 'Targaryen patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 15,  messageFor: 'Melisandre patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 16,  messageFor: 'Clifford patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 17,  messageFor: 'Frances patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 18,  messageFor: 'Roxie patel', class: "Class 5", subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
  ];

  return (
    <Grid container>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Sent</Typography>
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

      <div style={{ width: '100%', marginTop: "20px" }} className={clsx(classes.root, classes.marginBottom)}>
        <DataGrid
          autoHeight={true}
          rows={rows}
          columns={columns}
          onRowSelected={(item) => setData(item.data)}
        />
      </div>

      <div>
        <Dialog fullWidth maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Sent Message ({data.subject})
                  </DialogTitle>
          <DialogContent dividers>
            <Grid container>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <StyledTableRow key={data.messageFor}>
                      <StyledTableCell >Message For : {data.messageFor}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={data.class}>
                      <StyledTableCell >Class : {data.class}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={data.subject}>
                      <StyledTableCell >Subject : {data.subject}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={data.description}>
                      <StyledTableCell >Description : {data.description}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={data.attachment}>
                      <StyledTableCell >Attachment : {data.attachment}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={data.dateAndTime}>
                      <StyledTableCell >Date and Time : {data.dateAndTime}</StyledTableCell>
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
              Are you sure want to delete this message?
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