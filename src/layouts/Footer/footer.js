import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageOne from './ron_hermione.jpg';
import ImageTwo from './hrpotter.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Harry Potter Franchise
          </Typography>
          <p>
            Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley,
            all of whom are students at Hogwarts School of Witchcraft and Wizardry.
          </p>

          <p>
            Since the release of the first novel, Harry Potter and the Philosopher's Stone, on 26 June 1997, the books have
            found immense popularity, critical acclaim and commercial success worldwide. They have attracted a wide adult audience as well as younger readers and are often considered cornerstones of modern young adult literature.
            As of February 2018, the books have sold more than 500 million copies worldwide, making them the best-selling book
            series in history, and have been translated into eighty languages.[3] The last four books consecutively set records as the fastest-selling books in history, with the final installment selling roughly eleven million copies in the United States within twenty-four hours of its release.
          </p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <img src={ImageTwo} alt=""/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <img src={ImageOne} alt=""/>
        </Paper>
      </Grid>
    </Grid>
  )
}
