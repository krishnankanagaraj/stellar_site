import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { RocketLaunch } from "@mui/icons-material";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { scrollY } = useScroll();

  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "rgba(17, 17, 26, 0.1) 0px 1px 0px"]
  );

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const MotionAppBar = motion(AppBar);

  const pages = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ display: "flex", width: "100%", overflow: "hidden" }}>
      <MotionAppBar
        component="nav"
        style={{ boxShadow: headerShadow }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        sx={{ width: "100%" }}
      >
        <Toolbar
          sx={{ width: "100%", maxWidth: "100vw", px: { xs: 2, sm: 3 } }}
          className="d-flex justify-content-between align-items-center"
        >
          {isMobile && (
            <Typography
              variant="h6"
              color="secondary"
              sx={{ my: 2, cursor: "pointer" }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  width: "100%",
                  marginLeft: "22px",
                }}
              >
                <RocketLaunch color="secondary" /> Stellar Development
              </div>
            </Typography>
          )}

          {!isMobile && (
            <Typography
              variant="h6"
              component="div"
              color="secondary"
              sx={{
                flexGrow: 1,
                cursor: "pointer",
              }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="d-flex justify-content-start align-items-center ms-2">
                <RocketLaunch color="secondary" className="me-1" /> Stellar
                Development
              </div>
            </Typography>
          )}
          {!isMobile && (
            <Box
              sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}
            >
              {pages.map((page, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleNavClick(page.href)}
                    sx={{
                      color: "secondary.main",
                      mx: 1,
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="ms-1"
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}
        </Toolbar>
      </MotionAppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: 250, sm: 300 },
              bgcolor: "secondary.main",
              color: "white",
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ marginTop: "25px" }}>
            <List>
              {pages.map((page) => (
                <ListItem key={page.name} disablePadding>
                  <ListItemButton sx={{ textAlign: "start" }} onClick={() => handleNavClick(page.href)}>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
