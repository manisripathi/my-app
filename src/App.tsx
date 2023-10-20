import React from "react";
import { Form1Component } from "./components";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <main>
        <Container maxWidth="sm">
          <Grid container flexDirection={"column"} py={4}>
            <Grid item xs>
              <Form1Component />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
