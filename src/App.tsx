import React from "react";
import { TitleComponent, VotesComponent } from "./components";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <main>
        <Container maxWidth="sm">
          <Grid container flexDirection={'column'} py={4}>
            <Grid item xs>
              <TitleComponent title="Votes" />
            </Grid>
            <Grid item xs>
              <VotesComponent name="John Doe" />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
