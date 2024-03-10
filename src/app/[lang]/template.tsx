import { NextPage } from 'next';
import { AnimateRoute } from '@/components/atoms';

const RootTemplate: NextPage<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  return <AnimateRoute>{children}</AnimateRoute>;
};

export default RootTemplate;
