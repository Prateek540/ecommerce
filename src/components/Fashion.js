import Grids from "./Grids";
import { Container } from "@mui/system";
import products from "../components/Products";

function Fashion() {
  const newProducts = products.filter((item) => item.type === "fashion");
  return (
    <>
      <Container>
        <h1 style={{ marginLeft: 25, marginBottom: 25 }}>Fashion</h1>
        <Grids home={newProducts} />
      </Container>
    </>
  );
}

export default Fashion;
