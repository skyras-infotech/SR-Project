import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  Button, Grid, DialogContentText, DialogActions, makeStyles, Typography,
  TableContainer, TableCell, Table, TableRow, TableBody
} from '@material-ui/core';
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

export default function AdminMessageInbox() {

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
    { field: 'messageFrom', headerName: 'Message From', width: 150, headerClassName: 'headerStyle' },
    { field: 'messageFor', headerName: 'Message For', width: 160, headerClassName: 'headerStyle' },
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
    { id: 1, messageFrom: "Snow Jaime", messageFor: 'Snow Jon', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 2, messageFrom: "Snow Jaime", messageFor: 'Lannister Cersei', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 3, messageFrom: "Snow Jaime", messageFor: 'Lannister Jaime', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 4, messageFrom: "Snow Jaime", messageFor: 'Stark patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 5, messageFrom: "Snow Jaime", messageFor: 'Targaryen patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 6, messageFrom: "Snow Jaime", messageFor: 'Melisandre patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 7, messageFrom: "Snow Jaime", messageFor: 'Clifford patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 8, messageFrom: "Snow Jaime", messageFor: 'Frances patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 9, messageFrom: "Snow Jaime", messageFor: 'Roxie patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 10, messageFrom: "Snow Jaime", messageFor: 'Snow patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 11, messageFrom: "Snow Jaime", messageFor: 'Lannister patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 12, messageFrom: "Snow Jaime", messageFor: 'Lannister patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 13, messageFrom: "Snow Jaime", messageFor: 'Stark patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 14, messageFrom: "Snow Jaime", messageFor: 'Targaryen patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 15, messageFrom: "Snow Jaime", messageFor: 'Melisandre patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 16, messageFrom: "Snow Jaime", messageFor: 'Clifford patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 17, messageFrom: "Snow Jaime", messageFor: 'Frances patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
    { id: 18, messageFrom: "Snow Jaime", messageFor: 'Roxie patel', subject: 'about leave', attachment: "file", dateAndTime: "03-02-2020" },
  ];

  return (
    <Grid container>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Inbox</Typography>
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
            Inbox Message ({data.subject})
                  </DialogTitle>
          <DialogContent dividers>
            <Grid container>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <StyledTableRow key={data.messageFrom}>
                      <StyledTableCell >Message From : {data.messageFrom}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={data.messageFor}>
                      <StyledTableCell >Message For : {data.messageFor}</StyledTableCell>
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

