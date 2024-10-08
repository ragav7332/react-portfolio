import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar position="static" color="transparent" elevation={headerShadow ? 4 : 0} >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold',fontSize:'30px' }}>
            Ragavan<span style={{ color: '#1976d2' }}>.</span>
          </Typography>
        </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button component={Link} to="/" color="inherit" style={{mx: 2, color: 'text.primary',fontSize:'15px'}}>
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit" style={{mx: 2, color: 'text.primary',fontSize:'15px'}} >
              About
            </Button>
            <Button component={Link} to="/projects" color="inherit" style={{mx: 2, color: 'text.primary',fontSize:'15px'}}>
              Projects
            </Button>
            <Button component={Link} to="/contact" color="inherit" style={{mx: 2, color: 'text.primary',fontSize:'15px'}}>
              Contact
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <a
                href= "https://drive.google.com/file/d/1BKwhD__gg0870-fhkE7nzxes2-AR0YuV/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                ><Button variant="contained" color="primary">
                  Download CV <i class="uil uil-file-alt"></i></Button>
              </a>
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" }, ml: 2 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      {menuOpen && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            alignItems: "center",
            pb: 2,
          }}
        >
          <Button
            component={Link}
            to="/"
            color="inherit"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/projects"
            color="inherit"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Button>
        </Box>
      )}
    </AppBar>
  );
}

export default Header;
