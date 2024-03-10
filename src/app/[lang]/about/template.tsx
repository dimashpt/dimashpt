import { NextPage } from 'next';
import { AnimateRoute } from '@/components/atoms';

const AboutTemplate: NextPage<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  return <AnimateRoute>{children}</AnimateRoute>;
};

export default AboutTemplate;
