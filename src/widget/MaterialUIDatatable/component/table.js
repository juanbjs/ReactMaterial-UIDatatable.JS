import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import { TableToolbar, TableHead, TableBody } from '../component';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  title: {
    textAlign: 'right',
    fontSize: '12px',
    color: '#00538b',
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

function MaterialUITable(props) {

  const { rows, rowsProperties, checkView, title, filterData, filterValue, clearFilterData,
    rowsName, exportData, exportXLS, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage,
    onDobleClickRowSelected
  } = props;

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  
  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          title={title}
          filterData={filterData}
          filterValue={filterValue}
          clearFilterData={clearFilterData}
          exportData={exportData}
          exportXLS={exportXLS}
        />
        {
          onDobleClickRowSelected
            ? <Box component="div" m={1}>
                <Typography variant="h6" component="h6" className={classes.title}>
                  {"Si desea ver el detalle del registro, presione doble click sobre la fila deseada"}
                </Typography>
              </Box>
            : null
        }
        <div className={classes.tableWrapper}>
          <Table className={classes.table} size="small">
            <TableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headRows={rowsProperties}
              checkView={checkView}
            />
            <TableBody 
              rows = {rows}
              rowsName = {rowsName} 
              page = {page}
              rowsPerPage = {rowsPerPage}
              onDobleClickRowSelected = {onDobleClickRowSelected}
              selected = {selected}
              setSelected = {setSelected} 
              order = {order}
              orderBy = {orderBy}
            />
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="Cant. de Filas:"
        />
      </Paper>
    </div>
  );
}

export default MaterialUITable;