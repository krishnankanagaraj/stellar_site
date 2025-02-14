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

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Products",
    "Our Team",
    "Contact",
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <MotionAppBar
        component="nav"
        className="d-flex"
        style={{ boxShadow: headerShadow }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Toolbar className="w-100 px-0 d-flex justify-content-between container">
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    value={item.split(" ").join("").toLowerCase()}
                    sx={{
                      color: "secondary.main",
                      mx: 1,
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {item}
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
              width: { xs: 300, sm: "50vw", md: 450 },
              bgcolor: "secondary.main",
              color: "white",
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ marginTop: "25px" }}>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "start" }}>
                    <ListItemText primary={item} />
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
