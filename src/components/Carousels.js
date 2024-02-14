import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import img1 from "../images/carousel/carousel1.jpg";
import img2 from "../images/carousel/carousel2.jpg";
import img3 from "../images/carousel/carousel3.png";

function Carousels() {
  var items = [
    {
      img: img1,
      description: "Items",
    },
    {
      img: img2,
      description: "Delivery modes",
    },
    {
      img: img3,
      description: "Cart value",
    },
  ];

  return (
    <Carousel autoplay autoplaySpeed={1000}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <img alt={props.description} width="100%" src={props.item.img} />
    </Paper>
  );
}

export default Carousels;
