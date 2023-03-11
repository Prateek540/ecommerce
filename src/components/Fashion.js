import Grids from "./Grids";
import { Container } from "@mui/system";
import { fashion } from "../components/Products";

function Fashion() {
  return (
    <>
      <Container>
        <h1 style={{ marginLeft: 25, marginBottom: 25 }}>Fashion</h1>
        <Grids home={fashion} />
      </Container>
    </>
  );
}

export default Fashion;
