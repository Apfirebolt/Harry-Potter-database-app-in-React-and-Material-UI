import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '80%',
    },
  },
}));

export default function SearchFilter(props) {
  const classes = useStyles();
  console.log('Search filter pros : ', props);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Please Enter the text to search for!" variant="outlined"
      onChange={props.onChangeText}/>
    </form>
  );
}

SearchFilter.propTypes = {
  onChangeText: PropTypes.func.isRequired
};