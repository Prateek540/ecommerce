import Grids from "./Grids";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";

function Electronics() {
  const products = useSelector((state) => state.counterCart);
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
