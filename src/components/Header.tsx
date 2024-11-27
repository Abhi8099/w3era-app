"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiUser } from 'react-icons/fi';

interface HeaderProps {
  activeItem: string;
}

const Header: React.FC<HeaderProps> = ({ activeItem }) => {
  return (
    <motion.header 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md p-4 flex justify-between items-center"
    >
      <h2 className="text-2xl font-semibold text-textPurple">{activeItem}</h2>
      <div className="flex items-center space-x-4">
        <button className="text-textGrey hover:text-pink transition-colors">
          <FiBell size={24} />
        </button>
        <button className="text-textGrey hover:text-pink transition-colors">
          <FiUser size={24} />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;

