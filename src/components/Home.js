import { Container } from "@mui/system";
import Grids from "./Grids";
import Carousels from "./Carousels";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.counterCart);
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
