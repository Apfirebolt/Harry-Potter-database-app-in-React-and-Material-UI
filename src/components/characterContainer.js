import React from 'react';
import { makeStyles, Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "80%",
    margin: "1.5rem auto",
    padding: "1.5rem"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  main_title: {
    color: 'red'
  },
  body_container: {
    margin: "1.5rem",
    border: "1px solid black",
    padding: "1rem",
    textAlign: "left"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CharacterContainer(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.main_title} variant="h3" component="h2">
          {props.name}
        </Typography>
        <Typography variant="h4" component="h3">
          {props.bloodStatus} - {props.species}
        </Typography>
        <Box className={classes.body_container}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.role ? `${props.name} is a ${props.role}` : null}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.house ? `${props.name} belongs to ${props.house} house.`  : null}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.school ? `${props.name} belongs to ${props.school}.` : null}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.orderOfThePhoenix ? `${props.name} was part of Order of the Phoenix.` : null}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.dumbledoresArmy ? `${props.name} was part of Order of Dumbledore's Army.` : null}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.deathEater ? `${props.name} is a Death Eater.` : null}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
