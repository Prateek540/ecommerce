import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Container } from "@mui/material";
import products from "./Products";

export default function Cart() {
  const newProducts = products.filter((item) => item.type === "offer");
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
                <TableCell align="right">0</TableCell>
                <TableCell align="right">{row.cost}</TableCell>
                <TableCell align="right">0</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="total">
        <h3>Total</h3>
        <h4>₹0.00</h4>
      </div>
      <div className="buttonSet">
        <Button variant="outlined">Order</Button>
        <Button variant="contained">Remove All Items</Button>
      </div>
    </Container>
  );
}
