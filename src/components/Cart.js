import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../slices/counterSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.counterCart);
  const newProducts = products.filter((item) => item.count > 0);
  let orderTotal = 0;
  newProducts.forEach((item) => {
    orderTotal = orderTotal + item.total;
  });
  return (
    <Container>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Product</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newProducts.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={row.img}
                    alt="pic"
                    style={{
                      height: "auto",
                      width: "100%",
                      maxWidth: "100px",
                      border: "1px solid black",
                    }}
                  />
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.count}</TableCell>
                <TableCell align="right">₹{row.cost}</TableCell>
                <TableCell align="right">₹{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="total">
        <h3>Total</h3>
        <h4>₹{orderTotal}</h4>
      </div>
      {newProducts.length > 0 && (
        <div className="buttonSet">
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(remove());
              alert("Your order is submitted.");
            }}
          >
            Order
          </Button>
          <Button variant="contained" onClick={() => dispatch(remove())}>
            Remove
          </Button>
        </div>
      )}
      {newProducts.length === 0 && <h3>Your Cart is empty.</h3>}
    </Container>
  );
}
