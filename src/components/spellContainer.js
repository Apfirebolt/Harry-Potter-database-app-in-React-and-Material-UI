import React from 'react';
import { makeStyles, Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "80%",
    margin: "1.5rem auto",
    padding: "1.5rem",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    color: "indianred",
    margin: "1.5rem"
  },
  sub_title: {
    fontSize: 24,
    color: "gray",
    margin: "1rem",
    padding: "1.2rem",
    backgroundColor: "beige"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SpellContainer(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h3" className={classes.sub_title}>
          {props.spell} ({props.type} Type)
        </Typography>
        <Typography variant="h5" component="h4" className={classes.title}>
          This spell {props.effect}
        </Typography>
      </CardContent>
    </Card>
  );
}
