import Cards from "./Cards";
import { Grid, Container } from "@mui/material";

function Grids(props) {
  return (
    <>
      <Container>
        <Grid container spacing={{ sm: 3, xs: 3, md: 4 }}>
          {props.home.map((data) => {
            return (
              <Grid key={data.id} item xs={6} sm={4} md={3}>
                <Cards
                  id={data.id}
                  name={data.name}
                  cost={data.cost}
                  img={data.img}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Grids;
