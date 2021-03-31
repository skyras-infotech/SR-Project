import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, makeStyles, Typography,DialogActions,DialogContentText } from '@material-ui/core';
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
      color: "orange",
    },
  },
  margin: {
    margin: theme.spacing(0.5),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  whiteColor: {
    color: "#fff"
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

export default function AdminMaterialList() {

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
    { field: 'class', headerName: 'Class', width: 120, headerClassName: 'headerStyle' },
    { field: 'section', headerName: 'Section', width: 120, headerClassName: 'headerStyle' },
    { field: 'subject', headerName: 'Subject', width: 180, headerClassName: 'headerStyle' },
    { field: 'material', headerName: 'Material Link', width: 150, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "material/edit-material", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 2, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 3, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 4, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 5, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 6, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 7, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 8, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 9, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 10, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 11, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 12, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 13, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 14, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 15, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 16, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 17, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
    { id: 18, class: "Class 6", section: "Section A", subject: "Maths", material: 'link of file' },
  ];

  const classes = useStyles();
  return (
    <>
      <div style={{ width: '70%' }} className={classes.root}>
        <DataGrid rows={rows} columns={columns} autoHeight={true}  onRowSelected={(item) => setData(item.data)} />
      </div>
      <div>
        <Dialog
          open={deleteOpen}
          onClose={handleDeleteClickClose}>
          <DialogTitle id="alert-dialog-title">Alert! Are you sure?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure want to delete this material {data.title}?
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

