import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const services = [
  {
    title: "Frontend Development",
    icon: <WebIcon color="secondary" sx={{ fontSize: 40 }} />,
    items: [
      "JavaScript wizardry for seamless web applications",
      "HTML & CSS mastery with pixel-perfect designs",
      "Tailwind and Bootstrap framework expertise",
      "React with TypeScript for robust applications",
      "React Flow for interactive node-based diagrams",
    ],
  },
  {
    title: "Backend Development",
    icon: <CodeIcon color="secondary" sx={{ fontSize: 40 }} />,
    items: [
      "High-performance Node.js applications",
      "Robust authentication & authorization",
      "TypeScript integration for improved maintainability",
      "Scalable architecture design",
      "API development and integration",
    ],
  },
  {
    title: "Database Management",
    icon: <StorageIcon color="secondary" sx={{ fontSize: 40 }} />,
    items: [
      "PostgreSQL for complex data requirements",
      "MongoDB for flexible NoSQL solutions",
      "Data modeling and optimization",
      "Database security implementation",
      "Performance tuning and monitoring",
    ],
  },
];

const Services = () => {
  const theme = useTheme();
  const [selectedService, setSelectedService] = useState(0);
  const isMobile=useMediaQuery( theme.breakpoints.down("md"))

  const cardVariants = !isMobile?{
    enter: { y: 1000, opacity: 0 },
    center: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
    exit: { 
      y: -1000, 
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      }
    },
  }:{
    enter: { x: 1000, opacity: 0 },
    center: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
    exit: { 
      x: -1000, 
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      }
    },
  };

  return (
    <Box
      id="services"
      className="container"
      sx={{ py: 8, bgcolor: "background", overflow: "hidden" }}
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
            color: "secondary.main",
          }}
        >
          Our Services
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {/* Left side - Service names */}
        <Grid item xs={12} md={4}>
          <List>
            {services.map((service, index) => (
              <ListItem
                key={index}
                button
                onClick={() => setSelectedService(index)}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  bgcolor: selectedService === index ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    cursor:'pointer'
                  }
                }}
              >
                <ListItemIcon sx={{ color: theme.palette.secondary.main }}>
                  {service.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      color={selectedService === index ? "secondary" : "text.primary"}
                      sx={{ fontWeight: selectedService === index ? 'bold' : 'normal' }}
                    >
                      {service.title}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Right side - Service card */}
        <Grid item xs={12} md={8}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Card
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  padding: "20px",
                }}
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    bgcolor: "secondary.main",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {services[selectedService].icon}
                    <Typography
                      variant="h5"
                      component="h2"
                      color="secondary"
                      sx={{ ml: 1, fontWeight: "bold" }}
                    >
                      {services[selectedService].title}
                    </Typography>
                  </Box>
                  {services[selectedService].items.map((item, itemIndex) => (
                    <Typography
                      key={itemIndex}
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <KeyboardDoubleArrowRightIcon color="secondary" sx={{ mr: 1 }} />
                      {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
