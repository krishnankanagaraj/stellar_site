import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { RocketLaunch } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Cloud Solutions',
    'DevOps Services',
    'Consulting',
  ];

  const products = [
    'Event Management',
    'Recipe Platform',
    'Job Portal',
    'Blog System',
    'HRMS',
    'Task Manager',
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <RocketLaunch sx={{ mr: 1, fontSize: 28 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Stellar Development
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Transforming ideas into powerful digital solutions. We craft exceptional web experiences that drive success.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconButton
                    href="https://linkedin.com"
                    target="_blank"
                    sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconButton
                    href="https://github.com"
                    target="_blank"
                    sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconButton
                    href="https://twitter.com"
                    target="_blank"
                    sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                  >
                    <TwitterIcon />
                  </IconButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconButton
                    href="https://instagram.com"
                    target="_blank"
                    sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Quick Links
              </Typography>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  sx={{
                    color: 'white',
                    display: 'block',
                    mb: 1,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Services
              </Typography>
              {services.map((service) => (
                <Typography
                  key={service}
                  variant="body2"
                  sx={{ mb: 1 }}
                >
                  {service}
                </Typography>
              ))}
            </motion.div>
          </Grid>

          {/* Products */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Products
              </Typography>
              {products.map((product) => (
                <Typography
                  key={product}
                  variant="body2"
                  sx={{ mb: 1 }}
                >
                  {product}
                </Typography>
              ))}
            </motion.div>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            mt: 6,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography variant="body2" color="rgba(255,255,255,0.7)">
              &copy; {new Date().getFullYear()} Stellar Development. All rights reserved.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;