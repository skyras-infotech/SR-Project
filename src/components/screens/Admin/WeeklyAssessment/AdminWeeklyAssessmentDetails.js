import { Grid, withStyles,makeStyles, TableContainer, TableCell, Table, TableRow, TableBody } from '@material-ui/core';
import React from 'react';

const usesStyles = makeStyles((theme) => ({
    margin: {
        marginRight: theme.spacing(20),
        marginLeft: theme.spacing(1)
    },
    maginTop: {
        marginTop: theme.spacing(5),
    },
    root: {
        backgroundColor: "#F89",
    },
    textColor: {
        color: "#51BEFF"
    },
    whiteColor: {
        color: "#fff"
    },
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

export default function AdminWeeklyAssessmentDetails(prop) {

    const classes = usesStyles();

    return (
        <Grid>
            <Grid container>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <StyledTableRow key={prop.details.date}>
                      <StyledTableCell >Created Date : {prop.details.date}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={prop.details.class}>
                      <StyledTableCell >Class : {prop.details.class}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={prop.details.section}>
                      <StyledTableCell >Section : {prop.details.section}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={prop.details.subject}>
                      <StyledTableCell >Subject : {prop.details.subject}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={prop.details.topic}>
                      <StyledTableCell >Topic : {prop.details.topic}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={prop.details.teacher}>
                      <StyledTableCell >Teacher : {prop.details.teacher}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow key={prop.details.assessmentDate}>
                      <StyledTableCell >Assessment Date : {prop.details.assessmentDate}</StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

        </Grid>
    );
}