import { Grid, makeStyles, TableContainer, TableCell, Table, TableRow, TableBody, TableHead, withStyles, Typography } from '@material-ui/core';
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


export default function AdminExamDetails(prop) {

  const classes = usesStyles();

  return (
    <Grid container>
      <Typography variant="h6">Class {prop.details.class}, {prop.details.section}</Typography>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Period</StyledTableCell>
              <StyledTableCell align="center">Timing</StyledTableCell>
              <StyledTableCell align="center">Monday</StyledTableCell>
              <StyledTableCell align="center">Tuesday</StyledTableCell>
              <StyledTableCell align="center">Wednesday</StyledTableCell>
              <StyledTableCell align="center">Thursday</StyledTableCell>
              <StyledTableCell align="center">Friday</StyledTableCell>
              <StyledTableCell align="center">Saturday</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key={1}>
              <StyledTableCell align="center">1</StyledTableCell>
              <StyledTableCell align="center">08:30 am to 09:30 am</StyledTableCell>
              <StyledTableCell align="center">Science</StyledTableCell>
              <StyledTableCell align="center">Maths</StyledTableCell>
              <StyledTableCell align="center">Social Science</StyledTableCell>
              <StyledTableCell align="center">Gujarati</StyledTableCell>
              <StyledTableCell align="center">Hindi</StyledTableCell>
              <StyledTableCell align="center">Maths</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={2}>
              <StyledTableCell align="center">2</StyledTableCell>
              <StyledTableCell align="center">09:30 am to 10:10 am</StyledTableCell>
              <StyledTableCell align="center">Science</StyledTableCell>
              <StyledTableCell align="center">Maths</StyledTableCell>
              <StyledTableCell align="center">Social Science</StyledTableCell>
              <StyledTableCell align="center">Gujarati</StyledTableCell>
              <StyledTableCell align="center">Hindi</StyledTableCell>
              <StyledTableCell align="center">Maths</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={2}>
              <StyledTableCell align="center">Short Break</StyledTableCell>
              <StyledTableCell align="center">10:10 am to 10:20 am</StyledTableCell>
              <StyledTableCell colSpan="6" align="center">Break</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}