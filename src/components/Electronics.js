import Grids from "./Grids";
import { Container } from "@mui/system";
import { electronics } from "../components/Products";

function Electronics() {
  return (
    <>
      <Container>
        <h1 style={{ marginLeft: 25, marginBottom: 25 }}>Electronics</h1>
        <Grids home={electronics} />
      </Container>
    </>
  );
}

export default Electronics;
