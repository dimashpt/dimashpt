import { NextPage } from 'next';

const LoadingPage: NextPage = () => {
  return (
    <section className="flex flex-col flex-grow h-full w-full items-center justify-center">
      Loading...
    </section>
  );
};

export default LoadingPage;
