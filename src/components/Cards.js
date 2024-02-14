import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { increment, decrement } from "../slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function Cards(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.counterCart);
  const id = props.id;
  const index = products.findIndex((item) => item.id === id);
  const count = products[index] === undefined ? 0 : products[index].count;
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
          ₹{props.cost}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => dispatch(decrement({ id }))}
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
          {count}
        </Typography>
        <Button
          onClick={() => dispatch(increment({ id }))}
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
