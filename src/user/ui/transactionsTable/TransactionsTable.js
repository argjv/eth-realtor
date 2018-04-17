import React, { Component } from 'react'


import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});




class TransactionsTable extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
   const { classes } = this.props;
    return (
      <div>
        <h2>Received transactions history</h2>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>To</CustomTableCell>
                  <CustomTableCell numeric>Time</CustomTableCell>
                  <CustomTableCell numeric>Value</CustomTableCell>
                  <CustomTableCell numeric>Gas Price</CustomTableCell>
                  <CustomTableCell numeric>Gas</CustomTableCell>
                  <CustomTableCell numeric>BlockNumber</CustomTableCell>
                </TableRow>
              </TableHead>
          <TableBody>
            {
              this.props.outTransactionsData.map(n => {
            return (
              <TableRow className={classes.row} key={n.to}>
                <CustomTableCell>{n.to}</CustomTableCell>
                <CustomTableCell numeric>{n.time}</CustomTableCell>
                <CustomTableCell numeric>{n.value}</CustomTableCell>
                <CustomTableCell numeric>{n.gasPrice}</CustomTableCell>
                <CustomTableCell numeric>{n.gas}</CustomTableCell>
                <CustomTableCell numeric>{n.blockNumber}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
      </div>
    );
  }
}

TransactionsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionsTable);