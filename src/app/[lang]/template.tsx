'use client';

import { NextPage } from 'next';
import { motion } from 'framer-motion';

const RootTemplate: NextPage<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <motion.div
      className="flex flex-grow"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{
        type: 'easeInOut',
        duration: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RootTemplate;
