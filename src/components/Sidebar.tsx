"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  subitems?: string[];
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: <FiChevronRight /> },
  { name: 'Analytics', icon: <FiChevronRight /> },
  { 
    name: 'Reports', 
    icon: <FiChevronDown />,
    subitems: ['Daily', 'Weekly', 'Monthly']
  },
  { name: 'Settings', icon: <FiChevronRight /> },
];

interface SidebarProps {
  setActiveItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveItem }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <motion.div 
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 bg-purple text-white p-4 h-screen"
    >
      <h1 className="text-2xl font-bold mb-8">Seo Tools</h1>
      <nav>
        {navItems.map((item) => (
          <div key={item.name} className="mb-4">
            <button
              onClick={() => {
                setActiveItem(item.name);
                if (item.subitems) toggleExpand(item.name);
              }}
              className="flex items-center justify-between w-full text-left py-2 px-4 rounded hover:bg-pink transition-colors"
            >
              <span>{item.name}</span>
              {item.icon}
            </button>
            {item.subitems && expandedItems.includes(item.name) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="ml-4 mt-2"
              >
                {item.subitems.map((subitem) => (
                  <button
                    key={subitem}
                    onClick={() => setActiveItem(`${item.name} - ${subitem}`)}
                    className="block w-full text-left py-2 px-4 rounded hover:bg-pink transition-colors"
                  >
                    {subitem}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;

