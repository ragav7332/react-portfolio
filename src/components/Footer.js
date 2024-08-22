import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';    

function Footer() {
  return (
    <footer style={{ backgroundColor: '#2c2c2c', padding: '40px 0', color: '#fff',bottom:0, width:"100%" }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="p">
              Ragavan
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
                <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
                <li><Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link></li>
                <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="flex-end">
              <IconButton href="https://www.instagram.com/" target="_blank" style={{ color: '#fff' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/ragavan-r-83077b1b4" target="_blank" style={{ color: '#fff' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/ragav7332" target="_blank" style={{ color: '#fff' }}>
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            Copyright © <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Ragavan</Link> - All rights reserved
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
