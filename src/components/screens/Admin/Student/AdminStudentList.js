import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid, Select, DialogContentText, DialogActions, makeStyles, Typography, FormControl } from '@material-ui/core';
import { MenuItem, FormHelperText } from '@material-ui/core';
import clsx from 'clsx';
import AdminStudentDetails from './AdminStudentDetails';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import img from '../../../../Images/12.png';
import SearchBar from "material-ui-search-bar";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "crimson",
    },
  },
  marginBottom: {
    margin: theme.spacing(0),
  },
  whiteColor: {
    color: "#fff"
  },
  roundedButton: {
    borderRadius: 8,
    marginBottom: theme.spacing(1),
    width: theme.spacing(10)
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
  img: {
    position: "fixed",
    bottom: 0,
    right: 0,
    opacity: "0.5"
  }
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

export default function AdminStudentList() {

  const [showList, setShowList] = React.useState(false);
  const [searchData, setSearchData] = React.useState("");

  const { handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    if (data != null) {
      setShowList(true);
    }
  };

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

  const classes = useStyles();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'headerStyle' },
    { field: 'rollNo', headerName: 'Roll No', width: 100, headerClassName: 'headerStyle' },
    { field: 'fullName', headerName: 'Student Fullname', width: 200, headerClassName: 'headerStyle' },
    { field: 'email', headerName: 'Student Email', width: 200, headerClassName: 'headerStyle' },
    { field: 'mobile', headerName: 'Mobile No', width: 150, headerClassName: 'headerStyle' },
    {
      field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
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
            <Link to={{ pathname: "/student/edit-student", state: data }} style={{ textDecoration: "none", color: 'black' }}>Edit</Link>
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
    { id: 1, rollNo: 101, fullName: 'Snow Jon', email: 'snow@gmail.com', mobile: 9874563215 },
    { id: 2, rollNo: 101, fullName: 'Lannister Cersei', email: 'Lannister@gmail.com', mobile: 9874563215 },
    { id: 3, rollNo: 101, fullName: 'Lannister Jaime', email: 'Jaime@gmail.com', mobile: 9874563215 },
    { id: 4, rollNo: 101, fullName: 'Stark patel', email: 'Daenerys@gmail.com', mobile: 9874563215 },
    { id: 5, rollNo: 101, fullName: 'Targaryen patel', email: 'snow@gmail.com', mobile: 9874563215 },
    { id: 6, rollNo: 101, fullName: 'Melisandre patel', email: 'Melisandre@gmail.com', mobile: 9874563215 },
    { id: 7, rollNo: 101, fullName: 'Clifford patel', email: 'Ferrara@gmail.com', mobile: 9874563215 },
    { id: 8, rollNo: 101, fullName: 'Frances patel', email: 'Rossini@gmail.com', mobile: 9874563215 },
    { id: 9, rollNo: 101, fullName: 'Roxie patel', email: 'Harvey@gmail.com', mobile: 9874563215 },
    { id: 10, rollNo: 101, fullName: 'Snow patel', email: 'snow@gmail.com', mobile: 9874563215 },
    { id: 11, rollNo: 101, fullName: 'Lannister patel', email: 'Lannister@gmail.com', mobile: 9874563215 },
    { id: 12, rollNo: 101, fullName: 'Lannister patel', email: 'Jaime@gmail.com', mobile: 9874563215 },
    { id: 13, rollNo: 101, fullName: 'Stark patel', email: 'Daenerys@gmail.com', mobile: 9874563215 },
    { id: 14, rollNo: 101, fullName: 'Targaryen patel', email: 'snow@gmail.com', mobile: 9874563215 },
    { id: 15, rollNo: 101, fullName: 'Melisandre patel', email: 'Melisandre@gmail.com', mobile: 9874563215 },
    { id: 16, rollNo: 101, fullName: 'Clifford patel', email: 'Ferrara@gmail.com', mobile: 9874563215 },
    { id: 17, rollNo: 101, fullName: 'Frances patel', email: 'Rossini@gmail.com', mobile: 9874563215 },
    { id: 18, rollNo: 101, fullName: 'Roxie patel', email: 'Harvey@gmail.com', mobile: 9874563215 },
  ];

  return (
    <div>
      <Grid>
        <img src={img} width="30%" height="50%" alt="teacher" className={classes.img} />
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.textColor}>Student List</Typography>
        </Grid>
        <Grid item>
          <Link to="/student/add-student" style={{ textDecoration: "none" }}>
            <Grid container xs alignItems="center" className={classes.textColor} style={{ cursor: "pointer" }}>
              <AddBoxRoundedIcon fontSize="large" />
              <Typography variant="h6">Add Student</Typography>
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
        <Grid container>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>

            <Grid item container spacing={2} alignItems="flex-end" className={classes.marginBottom}>

              <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" className={classes.textColor}>Select class</Typography>
                <FormControl variant="outlined" fullWidth error={Boolean(errors.class)}>
                  <Controller
                    render={(props) => (
                      <Select value={props.value} onChange={props.onChange}>
                        <MenuItem value="">Select class</MenuItem>
                        <MenuItem value="Class 1">Class 1</MenuItem>
                        <MenuItem value="Class 2">Class 2</MenuItem>
                        <MenuItem value="Class 3">Class 3</MenuItem>
                      </Select>
                    )}
                    name="class"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Please select class"
                    }}
                  />
                  <FormHelperText>{errors.class?.message}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item align="left" xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" className={classes.textColor}>Select section</Typography>
                <FormControl variant="outlined" fullWidth error={Boolean(errors.section)}>
                  <Controller
                    render={(props) => (
                      <Select value={props.value} onChange={props.onChange}>
                        <MenuItem value="">Select section</MenuItem>
                        <MenuItem value="Section A">Section A</MenuItem>
                        <MenuItem value="Section B">Section B</MenuItem>
                        <MenuItem value="Section C">Section C</MenuItem>
                      </Select>
                    )}
                    name="section"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Please select section"
                    }}
                  />
                  <FormHelperText>{errors.section?.message}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={4} lg={4} align="left">
                <Button variant="contained" type="submit" className={clsx(classes.roundedButton, classes.textColor, classes.whiteColor)}>
                  <Typography variant="h6">Go</Typography>
                </Button>
              </Grid>

            </Grid>
          </form>
          {showList &&
            <div style={{ width: '1005%', marginTop: "20px" }} className={clsx(classes.root, classes.marginBottom)}>
              <DataGrid
                autoHeight={true}
                rows={rows}
                columns={columns}
                onRowSelected={(item) => setData(item.data)}
              />
            </div>
          }
          <div>
            <Dialog fullWidth maxWidth="lg" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Student Details
            </DialogTitle>
              <DialogContent dividers>
                <AdminStudentDetails details={data} />
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
                  Are you sure want to delete this teacher {data.fullName}?
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
      </Grid>
    </div>
  );
}

