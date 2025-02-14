import { motion } from 'framer-motion';
import { Box, Grid, Card, CardContent, Typography, IconButton, CardMedia } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Lead Developer',
    image: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
    bio: 'Full-stack developer with 8+ years of experience in building scalable web applications.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    image: 'https://xsgames.co/randomusers/assets/avatars/female/1.jpg',
    bio: 'Creative designer passionate about crafting intuitive and beautiful user experiences.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Backend Engineer',
    image: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
    bio: 'Specialized in building robust and scalable server-side applications and APIs.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    image: 'https://xsgames.co/randomusers/assets/avatars/female/2.jpg',
    bio: 'Experienced in leading cross-functional teams and delivering successful products.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  }
];

const TeamSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box 
      id="team"
      className="container" 
      sx={{ py: 8, bgcolor: 'background', overflow: 'hidden' }}>
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
          Our Team
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  overflow: 'hidden',
                  '&:hover': {
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    transform: 'translateY(-5px)',
                    bgcolor: 'secondary.main',
                    '& .MuiTypography-root': {
                      color: 'white !important',
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'white !important',
                    }
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '4px solid',
                    borderColor: 'secondary.main'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    color="secondary"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 2, fontWeight: 500 }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {member.bio}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <IconButton
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: 'secondary.main',
                          '&:hover': { bgcolor: 'transparent' }
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <IconButton
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: 'secondary.main',
                          '&:hover': { bgcolor: 'transparent' }
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <IconButton
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: 'secondary.main',
                          '&:hover': { bgcolor: 'transparent' }
                        }}
                      >
                        <TwitterIcon />
                      </IconButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <IconButton
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: 'secondary.main',
                          '&:hover': { bgcolor: 'transparent' }
                        }}
                      >
                        <InstagramIcon />
                      </IconButton>
                    </motion.div>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;