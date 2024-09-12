
import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Projects() {
  const projects = [
    {
      title: "Chat-App",
      description: "The Chat-Bot-App uses React on the front-end and Node.js with Socket.io on the back-end for real-time messaging. Users can connect and send messages via a Socket.io connection, enabling live chat. The app allows communication with multiple users in real time, where messages are broadcasted to all connected users.",
      clientSource: "https://github.com/ragav7332/Chat-APP-React/tree/Chat_app",
      serverSource:"https://github.com/ragav7332/Chat-app-server",
      deployedUrl: "https://exquisite-pothos-82d638.netlify.app/"
    },
    {
      title: "Gmail Cloning",
      description: "Developed a Gmail Clone App in Both Frontend and Backend of React.js, Node.js, Express.js, and SQL in MongoDB Atlas. Make a mail request and responsive to send and receive a mail.",
      clientSource: "https://github.com/ragav7332/gmailclient",
      serverSource: "https://github.com/ragav7332/gmailserver",
      deployedUrl: "https://melodious-gingersnap-27545c.netlify.app/"
    },
    {
      title: "Employee Portal",
      description: "Secure Authentication: Implemented robust authentication using OAuth and JWT to ensure secure access and data protection. Comprehensive CRUD Operations: Developed full CRUD functionalities allowing seamless management of employee records.",
      source: "https://github.com/ragav7332/EmployeeApp",
      loginCredentials: "https://backend-zsgt.onrender.com/users",
      deployedUrl: "https://employee-portal-forinfo.netlify.app/"
    },
    {
      title: "Payment Gateway Integration",
      description: "Payment Gateway Integration Using Stripe and Razorpay.By Using of Publishable Key and Secret Key in Client Side and Server Side.In Backend using of Secret Key with method and Instances in Stripe and Razorpay achieving it that reliable to Frontend Processing.",
      clientSource: "https://github.com/ragav7332/stripeproduct",
      serverSource : "https://github.com/ragav7332/Stripebackend",
      deployedUrl: "https://stripe-and-razorpay-gateway.netlify.app/"
    },  
    {
      title: "Software Engineer Intern",
      description: "Developed ERP Individual Screen Using React, Node.js, Express & SQL in MySQL for 6 months. Explored the field of Employee personal details, address, qualification, leave system, and dashboard of ERP.",
      company: "Tekplay Systems Limited",
      duration: "6 Months in the field"
    }
  ];

  return (
    <section id="projects" className="section">
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ textAlign: "justify", letterSpacing: "0.5px" }} >
                    {project.description}
                  </Typography>
                  {project.company && (
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      <strong>Company:</strong> {project.company}
                    </Typography>
                  )}
                  {project.duration && (
                    <Typography variant="body2" color="text.secondary">
                      <strong>Duration:</strong> {project.duration}
                    </Typography>
                  )}
                </CardContent>
                <CardActions style={{justifyContent:'space-evenly'}}>
                  {project.clientSource && (
                    <Button size="small" variant='contained' color="primary" sx={{fontSize:'11px'}} href={project.clientSource} target="_blank" rel="noopener noreferrer">
                      Client Source
                    </Button>
                  )}
                  {project.serverSource && (
                    <Button size="small" variant='contained' color='error'sx={{fontSize:'11px'}} href={project.serverSource} target="_blank" rel="noopener noreferrer">
                      Server Source
                    </Button>
                  )}
                  {project.deployedUrl && (
                    <Button size="small" variant='contained' color="success" sx={{fontSize:'11px'}} href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                    Deployed URL
                  </Button>
                  )}
                  {project.source && (
                    <Button size="small" variant='contained' color="error" sx={{fontSize:'11px'}} href={project.source} target="_blank" rel="noopener noreferrer">
                   Source
                  </Button>
                  )}
                  {project.loginCredentials && (
                    <Button size="small" variant='contained' color="primary" sx={{fontSize:'11px'}} href={project.loginCredentials} target="_blank" rel="noopener noreferrer">
                      Login Creditionals
                    </Button>
                  )}
                 
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
        
          <Button component={Link} to="/contact" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ArrowForwardIcon>
            <Box component="i" sx={{ fontSize: '24px' }}></Box>
            
            </ArrowForwardIcon>
            <Typography>Next PAGE</Typography>
          </Button>
          
        </Box>
      </Container>
    </section>
  );
}

export default Projects;
