import heroImage from "../assets/Hero.svg";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

function Herosection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="container py-5 mt-3">
        <div className="row">
          <motion.div
            className="col-md-6 order-md-2 order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img
              src={heroImage}
              alt="Hero Section SVG"
              className="img-fluid"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <div className="col-md-6 order-md-1 order-1 d-flex align-items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hero-text"
            >
              <motion.h1
                className="fs-3 text-capitalize text-md-start text-center"
                variants={itemVariants}
              >
                Make your business grow higher with us !!!
              </motion.h1>
              <motion.p
                className="lead text-capitalize justified text-md-start text-center"
                variants={itemVariants}
              >
                a strong online presence is no longer just an option, it&apos;s a
                necessity
              </motion.p>
              <div>
                <motion.div
                  component="button"
                  style={{maxWidth:'fit-content'}}
                  className="mx-auto mx-md-0"
                  variants={itemVariants}
                  whileHover={{
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
