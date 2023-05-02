import { Container } from "@mui/system";
import Grids from "./Grids";
import products from "../components/Products";
import Carousels from "./Carousels";

function Home() {
  const newProducts = products.filter((item) => item.type === "offer");
  return (
    <>
      <Container>
        <Carousels />
        <h1 style={{ marginLeft: 25, marginBottom: 25 }}>Offers</h1>
        <Grids home={newProducts} />
      </Container>
    </>
  );
}

export default Home;
