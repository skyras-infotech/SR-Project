import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button,Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
    '& .headerStyle': {
      color:"green",
    },
  },
  margin: {
    margin: theme.spacing(0.5),
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

const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide:true, headerClassName: 'headerStyle'},
    { field: 'subjectCode', headerName: 'Subject Code', width: 150, headerClassName: 'headerStyle'},
    { field: 'subjectName', headerName: 'Subject Name', width: 150, headerClassName: 'headerStyle'},
    { field: 'teacherName', headerName: 'Teacher Name', width: 150, headerClassName: 'headerStyle'},
    { field: 'className', headerName: 'Class Name', width: 140, headerClassName: 'headerStyle'},
    { field: 'sectionName', headerName: 'Section Name', width: 150, headerClassName: 'headerStyle'},
    { field: 'authorName', headerName: 'Author Name', width: 150, headerClassName: 'headerStyle'},
    { field: 'edition', headerName: 'Edition Name', width: 150, headerClassName: 'headerStyle'},
    { field: 'action', headerName: 'Actions', width: 200, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ backgroundColor:"lightblue",color:"black" }}>
            Edit
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
    { id: 1, subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Snow Jon', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 2, subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Lannister Cersei', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 3, subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Lannister Jaime', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 4, subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Stark patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 5, subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Targaryen patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 6, subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Melisandre patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 7, subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Clifford patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 8, subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Frances patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 9, subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Roxie patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 10,subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Snow patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 11,subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Lannister patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 12,subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Lannister patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 13,subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Stark patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 14,subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Targaryen patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 15,subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Melisandre patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 16,subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Clifford patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 17,subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Frances patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
    { id: 18,subjectCode:"SS101",subjectName:"Science", className:"6",teacherName: 'Roxie patel', sectionName:"Class A",authorName:"SK Gupta",edition:"5th"},
  ];

export default function AdminSubjectList() {

  const classes = useStyles();
    return (
     
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
     
    );
    
}

