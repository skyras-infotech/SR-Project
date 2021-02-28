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
    { field: 'title', headerName: 'Title', width: 200, headerClassName: 'headerStyle'},
    { field: 'comment', headerName: 'Comment', width: 150, headerClassName: 'headerStyle'},
    { field: 'startDate', headerName: 'Start Date', width: 150, headerClassName: 'headerStyle'},
    { field: 'endDate', headerName: 'End Date', width: 140, headerClassName: 'headerStyle'},
    { field: 'noticeFor', headerName: 'Notice For', width: 150, headerClassName: 'headerStyle'},
    { field: 'class', headerName: 'Class', width: 150, headerClassName: 'headerStyle'},
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
    { id: 1, title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 2, title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 3, title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 4, title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 5, title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 6, title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 7, title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 8, title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 9, title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 10,title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 11,title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 12,title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 13,title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 14,title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 15,title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 16,title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 17,title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
    { id: 18,title:"Notice for leave",comment:"NA", startDate:"02/10/2020",endDate: '03/11/2020', noticeFor:"Student",class:"6"},
  ];

export default function AdminNoticeboardList() {

  const classes = useStyles();
    return (
          <div style={{ height: 700, width: '100%' }} className={classes.root}>
              <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
          </div>
    );
    
}

