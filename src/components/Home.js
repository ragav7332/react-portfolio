// // components/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import useTypingEffect from '../hooks/useTypingEffect';

// function Home() {
//   const typedText = useTypingEffect(['Designer', 'Developer'], 100, 80, 2000);

//   return (
//     <section id="home" className="section featured-box">
//       <div className="featured-text">
//         <div className="featured-text-card">Ragavan</div>
//         <div className="featured-name">I'm <span className="typedText">{typedText}</span></div>
//         <div className="featured-text-info">
//           Software Engineer Intern with experience, specializing in Full Stack development. Strong understanding of web application development, front-end design, and back-end programming.
//         </div>
//         <div className="featured-text-btn">
//           <button className="btn blue-btn">Fresher Me</button>
//           <button className="btn">Download CV</button>
//         </div>
//         <div className="social_icons">
//           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon"><i className="bx bxl-instagram"></i></a>
//           <a href="https://www.linkedin.com/in/ragavan-r-83077b1b4" target="_blank" rel="noopener noreferrer" className="icon"><i className="bx bxl-linkedin"></i></a>
//           <a href="https://github.com/ragav7332" target="_blank" rel="noopener noreferrer" className="icon"><i className="bx bxl-github"></i></a>
//         </div>
//       </div>
//       <div className="scroll-icon-box">
//         <Link to="/about" className="scroll-btn">
//           <i className="bx bx-mouse"></i>
//           <span>Scroll Down</span>
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography, IconButton } from '@mui/material';
import useTypingEffect from '../hooks/useTypingEffect';
import { Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Home() {
  const typedText =
  //  useTypingEffect(['Designer', 'Full Stack Developer'], 70, 300, 3000);
  'Full Stack Developer'

  return (
    // <div style={{padding: '50px',backgroundColor:"#f5f5f5"}}>
    <Box id="home" sx={{ py: 5 }}>
      <Container style={{padding: '50px',backgroundColor:"#f5f5f5"}}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            Ragavan
          </Typography>
          <Typography variant="h4" component="h2">
            I'm <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>{typedText}</Box>
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 2 }} style={{ textAlign: "justify", letterSpacing: "0.5px" }}>
            Software Engineer Intern with experience, specializing in Full Stack development. Strong understanding of web application development, front-end design, and back-end programming.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Fresher Me
            </Button>
            {/* <Button variant="outlined" color="primary">
              Download CV
            </Button> */}
            <a
                href= "https://drive.google.com/file/d/1BKwhD__gg0870-fhkE7nzxes2-AR0YuV/view?usp=sharing"
                target="_blank"
                ><Button variant="outlined" color="primary">
                  Download CV <i class="uil uil-file-alt"></i></Button>
              </a>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <IconButton component="a" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram sx={{ color: 'secondary.main' }} />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/ragavan-r-83077b1b4" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{ color: 'secondary.main' }} />
          </IconButton>
          <IconButton component="a" href="https://github.com/ragav7332" target="_blank" rel="noopener noreferrer">
            <GitHub sx={{ color: 'secondary.main' }} />
          </IconButton>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button component={Link} to="/about" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ArrowForwardIcon>
            <Box component="i" sx={{ fontSize: '24px' }}></Box>
            
            </ArrowForwardIcon>
            <Typography>Next PAGE</Typography>
          </Button>
        </Box>
      </Container>
    </Box>
    // </div>
  );
}

export default Home;
