import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cards(props) {
  return (
    <Card
      sx={{
        minWidth: "13vw",
        boxShadow: 3,
        borderRadius: 3,
        boxSizing: "border-box",
      }}
    >
      <CardMedia
        sx={{
          height: "25vh",
        }}
        image={props.img}
        title="item"
      />
      <CardContent>
        <Typography
          sx={{ fontSize: { xs: 14, md: 18 } }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.name}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 10, md: 14 } }}
          variant="body2"
          color="text.secondary"
        >
          {props.cost}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="error"
          sx={{
            minWidth: "6vw",
            borderRadius: 6,
          }}
        >
          <RemoveIcon />
        </Button>
        <Typography sx={{ ml: 1 }} variant="h5" component="div">
          {props.count}
        </Typography>
        <Button
          variant="outlined"
          color="success"
          sx={{
            minWidth: "6vw",
            borderRadius: 6,
          }}
        >
          <AddIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
