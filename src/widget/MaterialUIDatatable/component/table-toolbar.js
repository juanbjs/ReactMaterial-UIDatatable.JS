import React from 'react';
import clsx from 'clsx';

import { lighten, makeStyles } from '@material-ui/core/styles';


import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ImportExportIcon from '@material-ui/icons/ImportExport';

import { Button } from '../../../widget';

import TableSearch from './table-search';

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  title: {
    flex: '0 0 auto',
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#003c65',
  },
}));

export function MaterialTableToolbar(props) {
  const classes = useToolbarStyles();
  const { title, filterData, filterValue, clearFilterData, exportData, exportXLS } = props;

  return (
    <Toolbar
      className={clsx(classes.root)}
    >
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          {title}
        </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <TableSearch
          onChange={filterData}
          value={filterValue}
          clearFilterData={clearFilterData}
        />
        {
          exportData ?
            <Button
              title="Exportar"
              className={classes.button}
              onClick={exportXLS}
              icon={<ImportExportIcon className={classes.leftIcon} />}
            />
            : null
        }
      </div>
    </Toolbar>
  );
};