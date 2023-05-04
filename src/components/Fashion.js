import Grids from "./Grids";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";

function Fashion() {
  const products = useSelector((state) => state.counterCart);
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
