import { motion } from 'framer-motion';
import { Box, Typography, Grid } from '@mui/material';
import aboutImg from '../assets/About.svg'

const About = () => {

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box className="container" sx={{ py: 8, minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <Grid container spacing={4} alignItems="center">
        {/* SVG Animation Side */}
        <Grid item xs={12} md={6} sx={{ overflow: 'hidden' }}>
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            sx={{ width: '100%' }}
          >
            <motion.img
              src={aboutImg}
              alt="About Section SVG"
              className="w-100"
              style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
            />
          </motion.div>
        </Grid>

        {/* Content Side */}
        <Grid item xs={12} md={6}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              gutterBottom
              color="secondary"
              sx={{ fontWeight: 'bold', mb: 4 }}
            >
              What We Do ?
            </Typography>
            
            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: '1.1rem', color: 'text.secondary' }}
            >
              At Stellar Development, we're not just developers – we're innovators, problem-solvers, and digital craftsmen. With over a decade of experience in transforming ideas into powerful digital solutions, we've helped businesses across the globe achieve their technological aspirations.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: '1.1rem', color: 'text.secondary' }}
            >
              Our team combines cutting-edge technology with creative thinking to deliver solutions that not only meet your current needs but anticipate future challenges. We believe in building lasting partnerships with our clients, understanding their unique visions, and turning them into reality.
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: '1.1rem', color: 'text.secondary' }}
            >
              From startups to enterprises, we've successfully delivered over 500+ projects, each uniquely tailored to our clients' specific needs. Our commitment to excellence, innovation, and client satisfaction has made us a trusted partner in the digital transformation journey.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;