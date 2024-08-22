import React from 'react';
import { Button, Typography, Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function About() {
  return (
    <Box id="about" sx={{ py: 5 }}>
      <Container style={{padding: '50px',backgroundColor:"#f5f5f5"}}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1">
            About Me
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                My introduction
              </Typography>
              <Typography variant="body1" style={{textAlign:'justify',letterSpacing:'0.5px'}} paragraph>
                Software Engineer Intern with experience, specializing in Full Stack development. Strong
                understanding of web application development, front-end design,
                and back-end programming. Seeking to apply skills and knowledge
                in a professional software engineering role to contribute to the
                success of a dynamic organization.</Typography>
              <a
                href= "https://drive.google.com/file/d/1BKwhD__gg0870-fhkE7nzxes2-AR0YuV/view?usp=sharing"
                target="_blank"
                ><Button variant="contained" color="primary">
                  Download CV <i class="uil uil-file-alt"></i></Button>
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                Frontend
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 ,justifyContent:'center'}}>
                <Typography variant="body1">HTML</Typography>
                <Typography variant="body1">CSS</Typography>
                <Typography variant="body1">Bootstrap</Typography>
                <Typography variant="body1">JavaScript</Typography>
                <Typography variant="body1">React Js</Typography>
              </Box>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                Backend
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 ,justifyContent:'center' }}>
                <Typography variant="body1">JAVA</Typography>
                <Typography variant="body1">JSON</Typography>
                <Typography variant="body1">Restful API</Typography>
                <Typography variant="body1">Spring Boot</Typography>
                <Typography variant="body1">Node Js</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                Database
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 ,justifyContent:'center' }}>
                <Typography variant="body1">MySQL</Typography>
                <Typography variant="body1">MongoDB-Atlas</Typography>
                <Typography variant="body1">Oracle SQL</Typography>
              </Box>
            </Box>
            
          </Grid>
          
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
        
          <Button component={Link} to="/projects" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ArrowForwardIcon>
            <Box component="i" sx={{ fontSize: '24px' }}></Box>
            
            </ArrowForwardIcon>
            <Typography>Next PAGE</Typography>
          </Button>
          
        </Box>
      </Container>
    </Box>
  );
}

export default About;
