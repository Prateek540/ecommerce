import { Container } from "@mui/system";
import Grids from "./Grids";
import { home } from "../components/Products";
import Carousels from "./Carousels";

function Home() {
  return (
    <>
      <Container>
        <Carousels />
        <h1 style={{ marginLeft: 25, marginBottom: 25 }}>Offers</h1>
        <Grids home={home} />
      </Container>
    </>
  );
}

export default Home;
