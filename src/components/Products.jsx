import { motion } from 'framer-motion';
import { Box, Grid, Card, CardContent, Typography, useTheme } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FeedbackIcon from '@mui/icons-material/Feedback';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import InventoryIcon from '@mui/icons-material/Inventory';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PollIcon from '@mui/icons-material/Poll';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TaskIcon from '@mui/icons-material/Task';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const products = [
  {
    title: 'Event Registration',
    icon: <EventIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'User-friendly registration forms',
      'Payment gateway integration',
      'QR code ticket generation',
      'Event analytics dashboard',
      'Automated email notifications'
    ]
  },
  {
    title: 'Recipe Management',
    icon: <RestaurantIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Recipe creation and storage',
      'Ingredient calculation',
      'Nutritional information',
      'Shopping list generation',
      'Recipe sharing capabilities'
    ]
  },
  {
    title: 'Feedback Systems',
    icon: <FeedbackIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Custom feedback forms',
      'Real-time analytics',
      'Sentiment analysis',
      'Response management',
      'Automated reporting'
    ]
  },
  {
    title: 'Job Board Platform',
    icon: <WorkIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Job posting management',
      'Advanced search filters',
      'Application tracking',
      'Resume parsing',
      'Interview scheduling'
    ]
  },
  {
    title: 'Blog Platform',
    icon: <ArticleIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Multi-user support',
      'Rich text editor',
      'Content scheduling',
      'SEO optimization',
      'Social media integration'
    ]
  },
  {
    title: 'Inventory System',
    icon: <InventoryIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Stock tracking',
      'Barcode scanning',
      'Purchase orders',
      'Supplier management',
      'Inventory analytics'
    ]
  },
  {
    title: 'Vehicle Rental',
    icon: <DirectionsCarIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Online booking system',
      'Vehicle tracking',
      'Maintenance scheduling',
      'Digital contracts',
      'Payment processing'
    ]
  },
  {
    title: 'Real Estate Platform',
    icon: <ApartmentIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Property listings',
      'Virtual tours',
      'Agent management',
      'Lead tracking',
      'Document management'
    ]
  },
  {
    title: 'Survey Builder',
    icon: <PollIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Custom survey creation',
      'Response analytics',
      'Multiple question types',
      'Data visualization',
      'Export capabilities'
    ]
  },
  {
    title: 'HR Management',
    icon: <GroupsIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Employee records',
      'Leave management',
      'Payroll processing',
      'Performance tracking',
      'Recruitment pipeline'
    ]
  },
  {
    title: 'Healthcare System',
    icon: <LocalHospitalIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Patient records',
      'Appointment scheduling',
      'Prescription management',
      'Billing integration',
      'Lab results tracking'
    ]
  },
  {
    title: 'Supply Chain',
    icon: <LocalShippingIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Order tracking',
      'Inventory optimization',
      'Supplier portal',
      'Logistics management',
      'Real-time analytics'
    ]
  },
  {
    title: 'Task Management',
    icon: <TaskIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Project organization',
      'Team collaboration',
      'Time tracking',
      'Progress monitoring',
      'Resource allocation'
    ]
  },
  {
    title: 'Institute Management',
    icon: <SchoolIcon color='secondary' sx={{ fontSize: 40 }} />,
    features: [
      'Student management',
      'Course scheduling',
      'Attendance tracking',
      'Grade management',
      'Parent portal'
    ]
  }
];

const Products = () => {
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
          Our Products
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.2 }}
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
                    {product.icon}
                    <Typography
                      variant="h5"
                      component="h2"
                      color='secondary'
                      sx={{ ml: 1, fontWeight: 'bold' }}
                    >
                      {product.title}
                    </Typography>
                  </Box>
                  {product.features.map((feature, featureIndex) => (
                    <Typography
                      key={featureIndex}
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
                      <KeyboardDoubleArrowRightIcon color='secondary'/>{feature}
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

export default Products;