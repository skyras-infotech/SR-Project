import { Grid, makeStyles, TableContainer,TableCell,Table,TableRow,TableBody, TableHead,withStyles } from '@material-ui/core';
import React from 'react';

const usesStyles = makeStyles((theme) => ({
 
    table: {
        minWidth: 300,
      },
   
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "lightgray",
      color: "black",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

function createData(code, name, date, examstarttime, examendtime) {
    return { code, name, date, examstarttime, examendtime};
  }
  
  const rows = [
    createData("12345", "SS", "03/12/2020", "12:00 pm", "02:00 pm"),
    createData("95125", "Hindi", "04/12/2020", "12:00 pm", "02:00 pm"),
    createData("74102", "English", "05/12/2020", "12:00 pm", "02:00 pm"),

  ];

export default function AdminExamDetails() {

    const classes = usesStyles();

    return(
        <Grid>

            <Grid container xs>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Subject Code</StyledTableCell>
                                <StyledTableCell align="center">Subject Name</StyledTableCell>
                                <StyledTableCell align="center">Exam Date</StyledTableCell>
                                <StyledTableCell align="center">Exam Start Time</StyledTableCell>
                                <StyledTableCell align="center">Exam End Time</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                            <StyledTableCell align="center">{row.code}</StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="center">{row.date}</StyledTableCell>
                            <StyledTableCell align="center">{row.examstarttime}</StyledTableCell>
                            <StyledTableCell align="center">{row.examendtime}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

          
        </Grid>
    );
}