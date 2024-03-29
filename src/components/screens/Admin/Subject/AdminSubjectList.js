import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {
  Button, Grid, makeStyles, withStyles, Typography, Dialog,
  DialogContentText, DialogActions
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import img from '../../../../Images/13.png';
import SearchBar from "material-ui-search-bar";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "cadetblue",
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
    color: "cadetblue"
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function AdminSubjectList() {

  const [data, setData] = React.useState("");
  const [searchData, setSearchData] = React.useState("");

  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClickClose = () => {
    setDeleteOpen(false);
  };


  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'headerStyle' },
    { field: 'subjectCode', headerName: 'Subject Code', width: 140, headerClassName: 'headerStyle' },
    { field: 'subjectName', headerName: 'Subject Name', width: 150, headerClassName: 'headerStyle' },
    { field: 'teacherName', headerName: 'Teacher Name', width: 150, headerClassName: 'headerStyle' },
    { field: 'className', headerName: 'Class', width: 90, headerClassName: 'headerStyle' },
    { field: 'sectionName', headerName: 'Section', width: 120, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "lightblue", color: "black" }}>
            <Link to={{ pathname: "subject/edit-subject", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Snow Jon', sectionName: "Class A" },
    { id: 2, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Lannister Cersei', sectionName: "Class A" },
    { id: 3, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Lannister Jaime', sectionName: "Class A" },
    { id: 4, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Stark patel', sectionName: "Class A" },
    { id: 5, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Targaryen patel', sectionName: "Class A" },
    { id: 6, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Melisandre patel', sectionName: "Class A" },
    { id: 7, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Clifford patel', sectionName: "Class A" },
    { id: 8, subjectCode: "SS101", subjectName: "Maths", className: "6", teacherName: 'Frances patel', sectionName: "Class A" },
    { id: 9, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Roxie patel', sectionName: "Class A" },
    { id: 10, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Snow patel', sectionName: "Class A" },
    { id: 11, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Lannister patel', sectionName: "Class A" },
    { id: 12, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Lannister patel', sectionName: "Class A" },
    { id: 13, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Stark patel', sectionName: "Class A" },
    { id: 14, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Targaryen patel', sectionName: "Class A" },
    { id: 15, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Melisandre patel', sectionName: "Class A" },
    { id: 16, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Clifford patel', sectionName: "Class A" },
    { id: 17, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Frances patel', sectionName: "Class A" },
    { id: 18, subjectCode: "SS101", subjectName: "Science", className: "6", teacherName: 'Roxie patel', sectionName: "Class A" },
  ];

  const classes = useStyles();

  return (
    <div>
      <Grid>
        <img src={img} width="30%" height="50%" alt="teacher" className={classes.img} />
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Subject List</Typography>
        </Grid>
        <Grid item>
          <Link to="/subject/add-subject" style={{ textDecoration: "none" }}>
            <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
              <AddBoxRoundedIcon fontSize="large" />
              <Typography variant="h6">Add Subject</Typography>
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
        <div style={{ width: '100%' }} className={classes.root}>
          <DataGrid rows={rows} columns={columns} autoHeight={true} onRowSelected={(item) => setData(item.data)} />
        </div>
        <div>

          <Dialog
            open={deleteOpen}
            onClose={handleDeleteClickClose}>
            <DialogTitle id="alert-dialog-title">Alert! Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure want to delete this subject {data.subjectName}?
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

