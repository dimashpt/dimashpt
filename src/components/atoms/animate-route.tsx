'use client';

import { NextPage } from 'next';
import { motion } from 'framer-motion';

export const AnimateRoute: NextPage<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <motion.div
      className="flex-1"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{
        type: 'easeInOut',
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
