import { Paper } from "@mui/material";
import React from "react";

const Home: React.FC = () => {
  return (
    <Paper
      elevation={3}
      style={{
        width: "80%",
        margin: "auto",
        textAlign: "center",
        marginTop: "2em",
      }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my projects, skills, and experiences.</p>
    </Paper>
  );
};

export default Home;
