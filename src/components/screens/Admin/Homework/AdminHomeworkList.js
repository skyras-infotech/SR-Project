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
    { field: 'title', headerName: 'Title', width: 100, headerClassName: 'headerStyle'},
    { field: 'class', headerName: 'Class', width: 150, headerClassName: 'headerStyle'},
    { field: 'subject', headerName: 'Subject', width: 150, headerClassName: 'headerStyle' },
    { field: 'submissionDate', headerName: 'Submission Date', width: 200, headerClassName: 'headerStyle' },
    { field: 'createdDate', headerName: 'Created Date', width: 200, headerClassName: 'headerStyle' },
    { field: 'action', headerName: 'Actions', width: 300, headerClassName: 'headerStyle', renderCell: () => (
        <Grid container>
          {/* <Button
                variant="contained"
                color="primary"
                size="small"
                style={{backgroundColor:"lightgreen"}}>
              <Link to="/student/view-student-details" style={{ color: "black", textDecoration: "none"}}>View</Link>
          </Button> */}
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
    { id: 1, title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020" },
    { id: 2, title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 3, title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 4, title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 5, title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 6, title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 7, title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 8, title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 9, title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 10,title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020" },
    { id: 11,title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 12,title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 13,title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 14,title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 15,title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 16,title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 17,title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
    { id: 18,title:"SS HW", class: '5', subject: 'Science',submissionDate:"03/12/2021",createdDate:"03/02/2020"  },
  ];

export default function AdminHomeworkList() {

  const classes = useStyles();
    return (
      <div style={{ height: 700, width: '100%' }} className={classes.root}>
          <DataGrid pagination rows={rows} columns={columns} pageSize={10} showCellRightBorder />
      </div>
    );
    
}

