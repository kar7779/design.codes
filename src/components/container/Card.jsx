import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import insta from "./images/ins.jpeg";
import GithubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    width: 200,
    height: 140,
  },
});

export default function MCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={insta}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Instagram-clone
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I made isntagram-clone using reactjs and i used firebase for backend
            in order to store posts and authorization.You can checkout my
            git-hub for source code
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://github.com/kar7779">
            <GithubIcon style={{ color: "black" }}>Github</GithubIcon>
          </a>
        </Button>
        <Button>
          <a href="https://instagram-clone-bbb5a.web.app/">Go to site</a>
        </Button>
      </CardActions>
    </Card>
  );
}
