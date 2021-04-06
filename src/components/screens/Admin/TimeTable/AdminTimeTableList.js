import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, makeStyles,Typography,DialogContentText,DialogActions } from '@material-ui/core';
import AdminTimeTableDetails from './AdminTimeTableDetails';
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
    { field: 'class', headerName: 'Class', width: 120, headerClassName: 'headerStyle' },
    { field: 'section', headerName: 'Section', width: 120, headerClassName: 'headerStyle' },
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
    { id: 1,  class: "6", section: "Section A"},
    { id: 2,  class: "6", section: "Section A"},
    { id: 3,  class: "6", section: "Section A"},
    { id: 4,  class: "6", section: "Section A"},
    { id: 5,  class: "6", section: "Section A"},
    { id: 6,  class: "6", section: "Section A"},
    { id: 7,  class: "6", section: "Section A"},
    { id: 8,  class: "6", section: "Section A"},
    { id: 9,  class: "6", section: "Section A"},
    { id: 10,  class: "6", section: "Section A"},
    { id: 11,  class: "6", section: "Section A"},
    { id: 12,  class: "6", section: "Section A"},
    { id: 13,  class: "6", section: "Section A"},
    { id: 14,  class: "6", section: "Section A"},
    { id: 15,  class: "6", section: "Section A"},
    { id: 16,  class: "6", section: "Section A"},
    { id: 17,  class: "6", section: "Section A"},
    { id: 18,  class: "6", section: "Section A"},
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
            Time Table
                  </DialogTitle>
          <DialogContent dividers>
            <AdminTimeTableDetails details={data} />
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
              Are you sure want to delete this time table?
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

