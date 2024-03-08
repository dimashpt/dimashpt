import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="content items-center justify-center">
      <p>Projects Page</p>
    </div>
  );
};

export default ProjectsPage;
