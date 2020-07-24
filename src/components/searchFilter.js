import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '1rem auto',
      width: '50%',
      display: 'flex'
    },
  },
}));

export default function SearchFilter(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Please Enter the text to search for!" variant="outlined"
      onChange={props.onChangeText}/>
      <InputLabel id="page-number">Number of Items Per Page</InputLabel>
      <Select
        labelId="page-number"
        id="page-number-id"
        label="Number of Items per page"
        onChange={props.handleItemsChange}
        value={props.itemsPerPage}
      >
        <MenuItem value={5}>Five</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </form>
  );
}

SearchFilter.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  handleItemsChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};