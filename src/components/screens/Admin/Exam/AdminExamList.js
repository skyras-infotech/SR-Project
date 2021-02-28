import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button,Grid, makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
  root: {
    '& .headerStyle': {
      color:"green",
    },
  },
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide:true, headerClassName: 'headerStyle'},
    { field: 'examTitle', headerName: 'Exam Title', width: 150, headerClassName: 'headerStyle'},
    { field: 'className', headerName: 'Class Name', width: 140, headerClassName: 'headerStyle'},
    { field: 'sectionName', headerName: 'Section Name', width: 150, headerClassName: 'headerStyle'},
    { field: 'termName', headerName: 'Term Name', width: 150, headerClassName: 'headerStyle'},
    { field: 'examStartDate', headerName: 'Exam Start Date', width: 150, headerClassName: 'headerStyle'},
    { field: 'examEndDate', headerName: 'Exam End Date', width: 150, headerClassName: 'headerStyle'},
    { field: 'comment', headerName: 'Extra Comment', width: 150, headerClassName: 'headerStyle'},
    { field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
         <Button
                variant="contained"
                color="primary"
                size="small"
                style={{backgroundColor:"lightgreen"}}>
              <Link to="/exam/view-exam-details" style={{ color: "black", textDecoration: "none"}}>View</Link>
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16,backgroundColor:"lightblue",color:"black" }}>
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
    { id: 1, examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 2, examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 3, examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 4, examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 5, examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 6, examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 7, examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 8, examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 9, examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 10,examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 11,examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 12,examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 13,examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 14,examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 15,examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 16,examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 17,examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
    { id: 18,examTitle:"Mid Term", className:"6",sectionName:"Class A",termName: 'MID TERM', examStartDate:"03/12/2020",examEndDate:"02/03/2021", comment:"No comment"},
  ];

export default function AdminExamList() {

  const classes = useStyles();
    return (
     
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
     
    );
    
}

