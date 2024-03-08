import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
};

const ArticlesPage: React.FC = () => {
  return (
    <div className="content items-center justify-center">
      <p>Articles Page</p>
    </div>
  );
};

export default ArticlesPage;
