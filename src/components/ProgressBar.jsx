import { LinearProgress } from '@mui/material';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgress(latest * 100);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: '64px',
        left: 0,
        right: 0,
        zIndex: 1100
      }}
    >
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ 
          height: 3,
          bgcolor: 'transparent',
          '& .MuiLinearProgress-bar': {
            bgcolor: 'secondary.main'
          }
        }}
      />
    </motion.div>
  );
};

export default ProgressBar;