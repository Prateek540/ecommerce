import Grids from "./Grids";
import { Container } from "@mui/system";
import products from "../components/Products";

function Electronics() {
  const newProducts = products.filter((item) => item.type === "electronics");
  return (
    <>
      <Container>
        <h1 style={{ marginLeft: 25, marginBottom: 25 }}>Electronics</h1>
        <Grids home={newProducts} />
      </Container>
    </>
  );
}

export default Electronics;
