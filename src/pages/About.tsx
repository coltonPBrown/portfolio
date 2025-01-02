import { Paper } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Paper
      elevation={3}
      style={{
        width: "80%",
        margin: "auto",
        padding: "2em",
      }}
    >
      <h2>About Me</h2>
      <p>
        I’m a full-stack developer with expertise in Java, Oracle SQL,
        PostgreSQL, and React. Passionate about building scalable applications
        and learning new technologies.
      </p>
    </Paper>
  );
}
