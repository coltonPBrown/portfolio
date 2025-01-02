import { Paper } from "@mui/material";
import React from "react";
export default function Contact() {
  return (
    <Paper
      elevation={3}
      style={{
        width: "80%",
        margin: "auto",
        padding: "2em",
      }}
    >
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your Profile
        </a>
      </p>
    </Paper>
  );
}
