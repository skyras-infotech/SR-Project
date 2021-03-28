import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  Button, Grid, Select, makeStyles, Backdrop, CircularProgress, MenuItem, FormHelperText,
  Typography, FormControl, TextField, Checkbox, FormControlLabel
} from '@material-ui/core';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .headerStyle': {
      color: "chocolate",
    },
  },
  margin: {
    margin: theme.spacing(0.5),
  },
  textColor: {
    color: "#51BEFF"
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  whiteColor: {
    color: "#fff"
  },
  roundedButton: {
    borderRadius: 8,
    marginBottom: theme.spacing(1),
    width: theme.spacing(32)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  textColor1: {
    color: "chocolate"
  }
}));


export default function AdminAttendanceList() {

  const [showList, setShowList] = React.useState(false);
  const [data, setData] = React.useState("");

  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    if (data != null) {
      console.log(data);
      setData(data);
      setShowList(true);
    }
  };


  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'headerStyle' },
    { field: 'rollNo', headerName: 'Roll No', width: 100, headerClassName: 'headerStyle' },
    { field: 'fullName', headerName: 'Student', width: 200, headerClassName: 'headerStyle' },
    { field: 'comment', headerName: 'Comments', width: 250, headerClassName: 'headerStyle' },
  ];

  const rows = [
    { id: 1, rollNo: 101,  fullName: 'Snow Jon', comment: "NA" },
    { id: 2, rollNo: 101,  fullName: 'Lannister Cersei', comment: "NA" },
    { id: 3, rollNo: 101,  fullName: 'Lannister Jaime', comment: "NA" },
    { id: 4, rollNo: 101,  fullName: 'Stark patel', comment: "NA" },
    { id: 5, rollNo: 101,  fullName: 'Targaryen patel', comment: "NA" },
    { id: 6, rollNo: 101,  fullName: 'Melisandre patel', comment: "NA" },
    { id: 7, rollNo: 101,  fullName: 'Clifford patel', comment: "NA" },
    { id: 8, rollNo: 101,  fullName: 'Frances patel', comment: "NA" },
    { id: 9, rollNo: 101,  fullName: 'Roxie patel', comment: "NA" },
    { id: 10, rollNo: 101,  fullName: 'Snow patel', comment: "NA" },
    { id: 11, rollNo: 101,  fullName: 'Lannister patel', comment: "NA" },
    { id: 12, rollNo: 101,  fullName: 'Lannister patel', comment: "NA" },
    { id: 13, rollNo: 101,  fullName: 'Stark patel', comment: "NA" },
    { id: 14, rollNo: 101,  fullName: 'Targaryen patel', comment: "NA" },
    { id: 15, rollNo: 101,  fullName: 'Melisandre patel', comment: "NA" },
    { id: 16, rollNo: 101,  fullName: 'Clifford patel', comment: "NA" },
    { id: 17, rollNo: 101,  fullName: 'Frances patel', comment: "NA" },
    { id: 18, rollNo: 101,  fullName: 'Roxie patel', comment: "NA" },
  ];

  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Grid item container spacing={3} alignItems="flex-end">

          <Grid item direction="column" align="left" xs={12} sm={12} md={3} lg={3}>
            <Typography variant="h6" color="primary" className={clsx(classes.margin, classes.textColor1)}>Start Date</Typography>
            <TextField
              id="attendanceDate"
              name="attendanceDate"
              type="date"
              variant="outlined"
              defaultValue=""
              fullWidth
              inputRef={register({
                required: "Please select attendance date"
              })}
              error={Boolean(errors.attendanceDate)}
              helperText={errors.attendanceDate?.message}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>


          <Grid item direction="column" align="left" xs={12} sm={12} md={3} lg={3}>
            <Typography variant="h6" color="primary" className={clsx(classes.margin, classes.textColor1)}>Select class</Typography>
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

          <Grid item direction="column" align="left" xs={12} sm={12} md={3} lg={3}>
            <Typography variant="h6" color="primary" className={clsx(classes.margin, classes.textColor1)}>Select section</Typography>
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

          <Grid item xs={12} sm={12} md={3} lg={3} align="left">
            <Button variant="contained" color="primary" type="submit" onClick={handleToggle} className={clsx(classes.roundedButton, classes.whiteColor)}>
              <Typography variant="h6">View Attendance</Typography>
            </Button>
          </Grid>

          <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            <CircularProgress color="inherit" />
          </Backdrop>


        </Grid>
      </form>

      { showList &&
        
        <>
          <Grid container spacing={2} className={classes.marginTop}>
            <Grid item>
              <Typography variant="h6">{data.class}, {data.section}, Date: {data.attendanceDate}</Typography>
            </Grid>
          </Grid>
          <div style={{ width: '60%' }} className={clsx(classes.root, classes.marginTop)}>
            <DataGrid checkboxSelection={true} rows={rows} columns={columns} autoHeight={true}
              onSelectionModelChange={(item) => console.log(item)} />
          </div>
          <Grid item xs={12} sm={12} md={12} lg={12} align="left">
            <Button variant="contained" color="primary" className={clsx(classes.roundedButton, classes.whiteColor)}>
              <Typography variant="h6">Save Attendance</Typography>
            </Button>
          </Grid>
        </>

      }
    </Grid>
  );

}

