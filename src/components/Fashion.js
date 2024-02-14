import { Container } from "@mui/system";
import Grids from "./Grids";
import Carousels from "./Carousels";
import products from "./Products";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Fashion() {
  const [sort, setSort] = useState("");
  const newProducts = products.filter((item) => item.type === "fashion");
  const [stateProducts, setStateProducts] = useState(newProducts);

  const handleChange = (event) => {
    setSort(event.target.value);
    if (event.target.value === "plh") {
      newProducts.sort((item1, item2) => item1.cost - item2.cost);
      setStateProducts(newProducts);
    }
    if (event.target.value === "phl") {
      newProducts.sort((item1, item2) => item2.cost - item1.cost);
      setStateProducts(newProducts);
    }
    if (event.target.value === "nlh") {
      newProducts.sort((item1, item2) => item1.name.localeCompare(item2.name));
      setStateProducts(newProducts);
    }
    if (event.target.value === "nhl") {
      newProducts.sort((item1, item2) => item2.name.localeCompare(item1.name));
      setStateProducts(newProducts);
    }
  };

  return (
    <>
      <Container>
        <Carousels />
        <h1 style={{ marginLeft: 25, marginBottom: 25 }}>Fashion</h1>
        <FormControl
          style={{ minWidth: "100px", marginLeft: 25, marginBottom: 25 }}
        >
          <InputLabel id="sort">SORT</InputLabel>
          <Select
            labelId="sort"
            id="sort"
            value={sort}
            label="sort"
            onChange={handleChange}
          >
            <MenuItem value="plh">Price low to high</MenuItem>
            <MenuItem value="phl">Price high to low</MenuItem>
            <MenuItem value="nlh">Name A to Z</MenuItem>
            <MenuItem value="nhl">Name Z to A</MenuItem>
          </Select>
        </FormControl>
        <Grids home={stateProducts} />
      </Container>
    </>
  );
}

export default Fashion;
