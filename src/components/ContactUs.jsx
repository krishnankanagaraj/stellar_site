import { motion } from 'framer-motion';
import { Box, Grid, Typography, IconButton, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {
  const contactInfo = {
    email: 'info@stellardevelopment.com',
    phone: '+1 (555) 123-4567',
    social: {
      linkedin: 'https://linkedin.com/company/stellar-development',
      github: 'https://github.com/stellar-development',
      twitter: 'https://twitter.com/stellar_dev',
      instagram: 'https://instagram.com/stellar.development'
    }
  };

  return (
    <Box className="container" sx={{ py: 8, bgcolor: 'background', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            color: 'secondary.main',
          }}
        >
          Get In Touch
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { mb: 2 },
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <TextField
                required
                label="Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                label="Subject"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                  fullWidth
                >
                  Send Message
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ pl: { md: 4 } }}>
              <Typography
                variant="h4"
                color="secondary"
                sx={{ mb: 4, fontWeight: 'bold' }}
              >
                Contact Information
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon color="secondary" sx={{ mr: 2, fontSize: 28 }} />
                  <Typography variant="h6" color="text.secondary">
                    {contactInfo.email}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon color="secondary" sx={{ mr: 2, fontSize: 28 }} />
                  <Typography variant="h6" color="text.secondary">
                    {contactInfo.phone}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h5"
                color="secondary"
                sx={{ mb: 2, fontWeight: 'bold' }}
              >
                Follow Us
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconButton
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'secondary.main',
                      '&:hover': { bgcolor: 'transparent' }
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: 32 }} />
                  </IconButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconButton
                    href={contactInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'secondary.main',
                      '&:hover': { bgcolor: 'transparent' }
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 32 }} />
                  </IconButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconButton
                    href={contactInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'secondary.main',
                      '&:hover': { bgcolor: 'transparent' }
                    }}
                  >
                    <TwitterIcon sx={{ fontSize: 32 }} />
                  </IconButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <IconButton
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'secondary.main',
                      '&:hover': { bgcolor: 'transparent' }
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: 32 }} />
                  </IconButton>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;