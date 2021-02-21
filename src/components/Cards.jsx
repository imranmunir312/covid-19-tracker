import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 50,
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },
  cardFirst: {
    borderBottom: "10px solid green",
    padding: 10,
  },
  cardSecond: {
    borderBottom: "10px solid red",
    padding: 10,
  },
  cardThird: {
    borderBottom: "10px solid blue",
    padding: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Cards = ({ cardData, complete }) => {
  const classes = useStyles();
  if (complete) {
    return (
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.cardFirst}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Recovered
                </Typography>
                <Typography variant="h5" component="h2">
                  <CountUp end={cardData.recovered} duration={5} />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {new Date(cardData.updated).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                  Recovered Cases
                  <br />
                  of COVID-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.cardSecond}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Deaths
                </Typography>
                <Typography variant="h5" component="h2">
                  <CountUp end={cardData.deaths} duration={5} />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {new Date(cardData.updated).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                  Deaths Cases
                  <br />
                  of COVID-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.cardThird}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Active
                </Typography>
                <Typography variant="h5" component="h2">
                  <CountUp end={cardData.active} duration={5} />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {new Date(cardData.updated).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                  Active Cases
                  <br />
                  of COVID-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default Cards;
