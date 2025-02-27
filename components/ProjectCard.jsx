import { CiFolderOn } from 'react-icons/ci';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

const ProjectCard = ({ title, description, techStack, githubLink, projectLink }) => {
  const links = [
    { href: githubLink, Icon: GitHubIcon },
    { href: projectLink, Icon: OpenInNewRoundedIcon },
  ];

  return (
    <div className="columns-1 rounded-lg bg-light-navy max-w-xs mx-auto">
      <div className="m-6">
        <div className="flex justify-between items-center">
          <CiFolderOn className="text-4xl text-green" />
          <div className="flex space-x-2">
            {links.map(
              ({ href, Icon }, index) =>
                href && (
                  <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-2xl text-lightest-slate" />
                  </a>
                )
            )}
          </div>
        </div>
        <h3 className="my-4 text-2xl text-lightest-slate">{title}</h3>
        <h4 className="mb-8 text-light-slate">{description}</h4>
        <div className="flex flex-wrap mt-2">
          {techStack.map((tech, index) => (
            <span key={index} className="mr-2 text-slate">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
