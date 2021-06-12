import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const todaysDate = ()=>{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}
const columns = [
  { id: 'slno', label: 'Sl No.', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'description', label: 'Description', minWidth: 170 },
  { id: 'category', label: 'Category', minWidth: 100 },
  { id: 'income', label: 'Income', minWidth: 100 },
  { id: 'expense', label: 'Expense', minWidth: 100 },
  { id: 'saving', label: 'Saving', minWidth: 100 },
  { id: 'given', label: 'Given\u00a0to\u00a0whom', minWidth: 100 },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 340,
    minHeight: 340,
  },
});
function createData(slno,date, description, category, income, expense, saving, given) {
  return {slno, date, description, category, income, expense, saving, given};
}

const rows = [
  createData(1, todaysDate(), 'Salary credited', "Salary", 68000,0,0,"None"),
  createData(2, todaysDate(), 'Transfer Money to home', "Transfer to home", 0,60000,0,"Baba"),
  createData(3, todaysDate(), 'Pocket money', "Cash Withdrawal", 0,2000,0,"None"),
  createData(4, todaysDate(), 'PPF', "PPF", 0,0,3000,"PPF"),
  createData(5, todaysDate(), 'ABLS', "SIP", 0,0,3000,"ABLS"),
 
];

const CashFlowTransactionLists = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
            console.log("row",row);
            
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.slno}>
                  {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  );
}

export default CashFlowTransactionLists;