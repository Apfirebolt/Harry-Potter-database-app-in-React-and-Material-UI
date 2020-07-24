import React from 'react';
import { makeStyles, Box, List, ListItem, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';


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
    margin: "1rem"
  },
  sub_title: {
    fontSize: 24,
    color: "gray",
    margin: "1rem",
    padding: "1.2rem",
    backgroundColor: "beige"
  },
  body_container: {
    margin: "1.5rem",
    border: "1px solid black",
    padding: "1rem",
    textAlign: "left"
  },
  list_item: {
    backgroundColor: 'azure',
    fontSize: "1.2rem"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HouseContainer(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h3" className={classes.sub_title}>
          {props.name} was created by {props.founder}
        </Typography>
        <Box className={classes.body_container}>
          <h2 style={{ textAlign: "center" }}>House Details</h2>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.headOfHouse ? `${props.headOfHouse} is the head of ${props.name}.` : null}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.mascot ? `${props.mascot} is the mascot of ${props.name}.` : null}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.houseGhost ? `${props.houseGhost} is the house ghost of ${props.name}.` : null}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.school ? `${props.school}` : null}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.values ? `${props.name} follows following pillars of values :-` : null}
          </Typography>
          <List>
            {props.values.map((item, index) => {
              return (
              <ListItem key={index} button className={classes.list_item}>{item}</ListItem>
              )
            })}
          </List>
          <h2 style={{ textAlign: "center" }}>House Colors</h2>
          <List>
            {props.colors.map((item, index) => {
              return (
                <ListItem key={index} button className={classes.list_item}>{item}</ListItem>
              )
            })}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}



/*
colors: ["blue", " bronze"]
founder: "Rowena Ravenclaw"
headOfHouse: "Fillius Flitwick"
houseGhost: "The Grey Lady"
mascot: "eagle"
members: ["5a0fa8a6ae5bc100213c233b", "5a107ffee0686c0021283b21", "5a108023e0686c0021283b22",…]
name: "Ravenclaw"
school: "Hogwarts School of Witchcraft and Wizardry"
values: ["intelligence", "creativity", "learning", "wit"]
 */