import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        sx={{ background: theme.palette.primary.main }}
      >
        <Toolbar>
          {/* Logo or Name */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.common.white,
            }}
          >
            Colton's Portfolio
          </Typography>

          {/* Navigation Buttons */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <Button color="inherit" variant="text" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" variant="text" component={Link} to="/about">
              About
            </Button>
            <Button
              color="inherit"
              variant="text"
              component={Link}
              to="/projects"
            >
              Projects
            </Button>
            <Button
              color="inherit"
              variant="text"
              component={Link}
              to="/contact"
            >
              Contact
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              onClick={toggleMenu}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: theme.palette.secondary.main,
            height: "100%",
          }}
        >
          <List>
            <ListItem
              component={Link}
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText
                primary="Home"
                sx={{ color: theme.palette.text.primary }}
              />
            </ListItem>
            <ListItem
              component={Link}
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText
                primary="About"
                sx={{ color: theme.palette.text.primary }}
              />
            </ListItem>
            <ListItem
              component={Link}
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText
                primary="Projects"
                sx={{ color: theme.palette.text.primary }}
              />
            </ListItem>
            <ListItem
              component={Link}
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText
                primary="Contact"
                sx={{ color: theme.palette.text.primary }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
