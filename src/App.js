import React, { Component } from "react";
import MBTICards from "./components/MBTICards";
import { Container, Typography } from "@mui/material";

class App extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          MBTI 유형별 특징
        </Typography>
        <MBTICards />
      </Container>
    );
  }
}

export default App;