import { motion } from 'framer-motion';
import { Box, Grid, Card, CardContent, Typography, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const services = [
  {
    title: 'Frontend Development',
    icon: <WebIcon color='secondary' sx={{ fontSize: 40 }} />,
    items: [
      'JavaScript wizardry for seamless web applications',
      'HTML & CSS mastery with pixel-perfect designs',
      'Tailwind and Bootstrap framework expertise',
      'React with TypeScript for robust applications',
      'React Flow for interactive node-based diagrams'
    ]
  },
  {
    title: 'Backend Development',
    icon: <CodeIcon color='secondary' sx={{ fontSize: 40 }} />,
    items: [
      'High-performance Node.js applications',
      'Robust authentication & authorization',
      'TypeScript integration for improved maintainability',
      'Scalable architecture design',
      'API development and integration'
    ]
  },
  {
    title: 'Database Management',
    icon: <StorageIcon color='secondary' sx={{ fontSize: 40 }} />,
    items: [
      'PostgreSQL for complex data requirements',
      'MongoDB for flexible NoSQL solutions',
      'Data modeling and optimization',
      'Database security implementation',
      'Performance tuning and monitoring'
    ]
  }
];

const Services = () => {
  const theme = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <Box 
      id="services"
      className='container' 
      sx={{ py: 8, bgcolor: 'background', overflow: 'hidden' }}
    >
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
            color:'secondary.main',
          }}
        >
          Our Services
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
                  minHeight: '24rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease-in-out',
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
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: theme.palette.primary.main
                    }}
                  >
                    {service.icon}
                    <Typography
                      variant="h5"
                      component="h2"
                      color='secondary'
                      sx={{ ml: 1, fontWeight: 'bold' }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  {service.items.map((item, itemIndex) => (
                    <Typography
                      key={itemIndex}
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        '&:before': {
                          marginRight: '8px'
                        }
                      }}
                    >
                      <KeyboardDoubleArrowRightIcon color='secondary'/>{item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;