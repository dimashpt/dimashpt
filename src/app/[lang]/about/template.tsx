import { NextPage } from 'next';
import { AnimateRoute } from '@/components/atoms';

const AboutTemplate: NextPage<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <AnimateRoute className="flex flex-1 overflow-y-auto">
      {children}
    </AnimateRoute>
  );
};

export default AboutTemplate;
