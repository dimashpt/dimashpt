'use client';

import { usePathname } from 'next/navigation';
import {
  AnimatePresence as FramerAnimatePresence,
  motion,
} from 'framer-motion';
import { FrozenRoute } from './frozen-route';

export const AnimatePresence: React.FC<{
  children: React.ReactNode;
}> = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <FramerAnimatePresence mode="wait">
      {/**
       * We use `motion.div` as the first child of `<AnimatePresence />` Component so we can specify page animations at the page level.
       * The `motion.div` Component gets re-evaluated when the `key` prop updates, triggering the animation's lifecycles.
       * During this re-evaluation, the `<FrozenRoute />` Component also gets updated with the new route components.
       */}
      <motion.div
        key={pathname}
        className="flex flex-grow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          type: 'easeInOut',
          duration: 0.25,
        }}
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </FramerAnimatePresence>
  );
};
