import React from 'react';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  buttonShadow:{
    '&:hover': {
      boxShadow: '5px 5px 7px -2px rgba(102, 102, 102, 0.5)',
      backgroundColor: '#003c65',
      borderColor: '#003c65'
    },
  }
}));

export function MaterialButton(props) {

  const classes = useStyles();

  const { icon, title, onClick, className, disabled } = props

  return (
    <Button
      variant="contained"
      color="primary"
      className={ className ? clsx(className, classes.buttonShadow) : clsx(classes.button, classes.buttonShadow)}
      icon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
}
