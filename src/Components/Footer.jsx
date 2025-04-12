import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box component="footer" className="bg-gray-900 text-white py-10">
      <Container maxWidth="lg">
        <Grid container   spacing={{ xs: 4, sm: 6, md: 16, lg: 22 }}>
          <Grid item xs={14} sm={6}>
            <Typography variant="h6" className="text-lg font-bold mb-4">
              Sandeep Kumar
            </Typography>
            <Typography variant="body2" className="text-gray-300">
            A creative portfolio highlighting my skills<br />
            in UI/UX design, full-stack development, <br />
            and innovative problem-solving. Showcasing <br />
            projects that blend technology and design<br />
            to deliver impactful digital experiences<br />
            across web, mobile, and responsive <br />platforms with clean, modern aesthetics.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="text-lg font-bold mb-4">
              Quick Links
            </Typography>
            <Box className="flex flex-col space-y-2">
              <Link href="#home" color="inherit" underline="hover" className="text-gray-300 hover:text-blue-400">
                Home
              </Link>
              <Link href="#about" color="inherit" underline="hover" className="text-gray-300 hover:text-blue-400">
                About
              </Link>
              <Link href="#projects" color="inherit" underline="hover" className="text-gray-300 hover:text-blue-400">
                Projects
              </Link>
              <Link href="#contact" color="inherit" underline="hover" className="text-gray-300 hover:text-blue-400">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="text-lg font-bold mb-4">
              Connect
            </Typography>
            <Box  sx={{ display: 'flex', gap: 2 }}>
              <Link href="http://www.linkedin.com/in/SandeepKumar8079" target="_blank" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 hover:text-blue-400 text-2xl" />
              </Link>
              <Link href="https://github.com/sandeepkumar0702" target="_blank" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="text-gray-300 hover:text-blue-400 text-2xl" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="text-gray-300 hover:text-blue-400 text-2xl" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-blue-400 text-2xl" />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box className="mt-8 text-center border-t border-gray-700 pt-4">
          <Typography variant="body2" className="text-gray-400">
            © {new Date().getFullYear()} Sandeep Kumar. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;