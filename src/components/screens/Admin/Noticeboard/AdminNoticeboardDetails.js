import { Grid, makeStyles, TableContainer, TableCell, Table, TableRow, TableBody, TableHead, withStyles } from '@material-ui/core';
import React from 'react';

const usesStyles = makeStyles((theme) => ({
    margin: {
        marginRight: theme.spacing(20),
        marginLeft: theme.spacing(1)
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
    }
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
  

export default function AdminNoticeboardDetails(prop) {

    const classes = usesStyles();

    return (
        <Grid>
            <Grid container>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Notice</StyledTableCell>
                                <StyledTableCell align="center">Comment</StyledTableCell>
                                <StyledTableCell align="center">Start Date</StyledTableCell>
                                <StyledTableCell align="center">End Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow key={prop.details.title}>
                                <StyledTableCell align="center">{prop.details.title}</StyledTableCell>
                                <StyledTableCell align="center">{prop.details.comment}</StyledTableCell>
                                <StyledTableCell align="center">{prop.details.startDate}</StyledTableCell>
                                <StyledTableCell align="center">{prop.details.endDate}</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}