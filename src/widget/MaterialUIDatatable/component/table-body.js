import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const CssTableCell = withStyles(theme => ({
  root: {
    //width: '100px'
  },
}))(TableCell);

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function MaterialTableBody(props) {

  const { rows, rowsName, page, rowsPerPage, onDobleClickRowSelected,
          selected, setSelected, order, orderBy
        } = props;

  let rowsFilter = rows;

  const emptyRows = rowsFilter.length ? rowsFilter.length > 0 ? rowsFilter.length : 0 : 0;
  const isSelected = name => selected.indexOf(name) !== -1;

  function handleClick(event, name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
  
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(name);
    } else if (selectedIndex === 0) {
      if (name === selected[0]) {
        newSelected = newSelected.concat(name);
        if (onDobleClickRowSelected) {
          onDobleClickRowSelected(name)
        }
      } else {
        newSelected = newSelected.concat(selected.slice(1));
      }
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
      //newSelected = selected.slice(selectedIndex + 1)
    }
  
    setSelected(newSelected);
  }

  return (
    <TableBody>
      {
        stableSort(rowsFilter, getSorting(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => {
            const isItemSelected = isSelected(row);

            return (
              <TableRow
                hover
                onClick={event => handleClick(event, row)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={index * 1000}
                selected={isItemSelected}
              >
                {
                  rowsName.map(
                    (item, i) => {
                      return <CssTableCell
                        align={item.aling}
                        key={i * 100}
                      >
                        {row[item.id]}
                      </CssTableCell>
                    }
                  )
                }
              </TableRow>
            );
          })
      }
      {
        emptyRows === 0
          ? <TableRow style={{ height: 49 * emptyRows }}>
            <TableCell colSpan={rowsName.length}>
              Sin registros para mostrar
                    </TableCell>
          </TableRow>
          : null
      }
    </TableBody>
  )
}