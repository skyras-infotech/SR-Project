import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button,Grid, Select, makeStyles, Typography, FormControl } from '@material-ui/core';
import clsx from 'clsx';
import AdminStudentDetails from './AdminStudentDetails';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
  root: {
    '& .headerStyle': {
      color:"green",
    },
  },
  margin: {
    margin: theme.spacing(0),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  whiteColor:{
    color:"#fff"
},
roundedButton: {
  borderRadius:8,
  marginBottom:theme.spacing(1),
  width:theme.spacing(10)
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

export default function AdminStudentList() {
  
  const [data,setData] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    name: 'hai',
  });

  const handleClass = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const classes = useStyles();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide:true,headerClassName: 'headerStyle'},
    { field: 'rollNo', headerName: 'Roll No', width: 100, headerClassName: 'headerStyle'},
    { field: 'fullName', headerName: 'Student Fullname', width: 200, headerClassName: 'headerStyle'},
    { field: 'email', headerName: 'Student Email', width: 200, headerClassName: 'headerStyle' },
    { field: 'mobile', headerName: 'Mobile No', width: 200, headerClassName: 'headerStyle' },
    { field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleClickOpen}
                style={{backgroundColor:"lightgreen"}}>
                View
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16,backgroundColor:"lightblue",color:"black" }}>
            <Link to={{pathname:'/students',state:{val:1}}} style={{ color: "black", textDecoration: "none"}}>Edit</Link>
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16,backgroundColor:"lightpink",color:"black" }}>
            Delete
          </Button>
        </Grid>
    ),},
  ];
  
  const rows = [
    { id: 1,  rollNo:101, fullName: 'Snow Jon',  email: 'snow@gmail.com',mobile:9874563215},
    { id: 2,  rollNo:101, fullName: 'Lannister Cersei', email: 'Lannister@gmail.com' ,mobile:9874563215},
    { id: 3,  rollNo:101, fullName: 'Lannister Jaime', email: 'Jaime@gmail.com' ,mobile:9874563215},
    { id: 4,  rollNo:101, fullName: 'Stark patel', email: 'Daenerys@gmail.com' ,mobile:9874563215},
    { id: 5,  rollNo:101, fullName: 'Targaryen patel', email: 'snow@gmail.com' ,mobile:9874563215},
    { id: 6,  rollNo:101, fullName: 'Melisandre patel', email: 'Melisandre@gmail.com' ,mobile:9874563215},
    { id: 7,  rollNo:101, fullName: 'Clifford patel', email: 'Ferrara@gmail.com' ,mobile:9874563215},
    { id: 8,  rollNo:101, fullName: 'Frances patel', email: 'Rossini@gmail.com' ,mobile:9874563215},
    { id: 9,  rollNo:101, fullName: 'Roxie patel', email: 'Harvey@gmail.com' ,mobile:9874563215},
    { id: 10, rollNo:101, fullName: 'Snow patel', email: 'snow@gmail.com',mobile:9874563215},
    { id: 11, rollNo:101, fullName: 'Lannister patel', email: 'Lannister@gmail.com' ,mobile:9874563215},
    { id: 12, rollNo:101, fullName: 'Lannister patel', email: 'Jaime@gmail.com' ,mobile:9874563215},
    { id: 13, rollNo:101, fullName: 'Stark patel', email: 'Daenerys@gmail.com' ,mobile:9874563215},
    { id: 14, rollNo:101, fullName: 'Targaryen patel', email: 'snow@gmail.com' ,mobile:9874563215},
    { id: 15, rollNo:101, fullName: 'Melisandre patel', email: 'Melisandre@gmail.com' ,mobile:9874563215},
    { id: 16, rollNo:101, fullName: 'Clifford patel', email: 'Ferrara@gmail.com' ,mobile:9874563215},
    { id: 17, rollNo:101, fullName: 'Frances patel', email: 'Rossini@gmail.com' ,mobile:9874563215},
    { id: 18, rollNo:101, fullName: 'Roxie patel', email: 'Harvey@gmail.com' ,mobile:9874563215},
  ];

    return (
      <Grid container spacing={3}>
          <Grid item container spacing={3} alignItems="flex-end" className={classes.marginBottom}>
            <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select class</Typography>
                <FormControl variant="outlined" fullWidth>
                    <Select
                        native
                        value={state.age}
                        onChange={handleClass}
                      
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Class 8</option>
                    <option value={20}>Class 9</option>
                    <option value={30}>Class 10</option>
                    </Select>
                </FormControl>
            </Grid> 

            <Grid item direction="column" align="left" xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h6" color="primary" className={clsx(classes.margin)}>Select class section</Typography>
                <FormControl variant="outlined" fullWidth>
                    <Select
                        native
                        value={state.age}
                        onChange={handleClass}
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Class 8</option>
                    <option value={20}>Class 9</option>
                    <option value={30}>Class 10</option>
                    </Select>
                </FormControl>
            </Grid> 

            <Grid item xs={12} sm={12} md={4} lg={4} align="left">
                        <Button variant="contained" color="primary" className={clsx(classes.roundedButton,classes.whiteColor)}>
                            <Typography variant="h6">Go</Typography>
                        </Button>
            </Grid>

        </Grid>
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid 
                  pagination 
                  rows={rows} 
                  columns={columns} 
                  pageSize={10} 
                  showCellRightBorder
                  onRowSelected={(item)=> setData(item.data)}
               />
          </div>
          <div>
                <Dialog fullWidth maxWidth="lg" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                  <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Student Details
                  </DialogTitle>
                  <DialogContent dividers>
                      <AdminStudentDetails details={data}/>
                    </DialogContent>
                </Dialog>
           </div>   
      </Grid>
    );
    
}

