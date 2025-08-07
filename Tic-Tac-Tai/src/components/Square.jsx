import React from 'react';
import { motion } from 'framer-motion';

const Square = ({ value, onClick }) => {
  return (
    <motion.button
      className="w-[90px] h-[90px] font-bold flex items-center justify-center bg-[#1E293B]"
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      {value}
    </motion.button>
  );
};

export default Square;