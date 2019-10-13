import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 380,
  },
  root400: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 345,
  },
  root360: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 345,
  },
  root350: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 335,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function TableSearch(props) {
  const classes = useStyles();

  const matches400 = useMediaQuery('(max-width:400px)');
  const matches360 = useMediaQuery('(max-width:360px)');
  const matches350 = useMediaQuery('(max-width:350px)');


  const { onChange, value, clearFilterData } = props;
  return (
    <div className={matches350 ? classes.root350 : matches360 ? classes.root360 : matches400 ? classes.root400 : classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        className={classes.input}
        placeholder="Buscar"
      />
      <IconButton className={classes.iconButton} onClick={clearFilterData} aria-label="search">
        <CloseIcon />
      </IconButton>
    </div>
  );
}
