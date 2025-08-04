import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const projects = [
    {
      title: 'Object Detector',
      description:
        'A web app that detects and identifies objects in real time using a webcam or uploaded images, featuring customizable detection settings for precision.',
      techStack: [
        'React',
        'JavaScript',
        'Tensorflow.js',
        'COCO-SSD',
        'HTML',
        'CSS',
      ],
      githubLink: 'https://github.com/alexislayvu/ObjectDetector',
      projectLink: null,
    },
    {
      title: 'TaskPilot',
      description:
        'A backend for a to-do app where users can register, log in, and manage their tasks.',
      techStack: [
        'Python',
        'Flask',
        'Celery',
        'Redis',
        'Nginx',
        'MySQL',
        'JWT',
        'Postman',
      ],
      githubLink: 'https://github.com/alexislayvu/backend-todo-app',
      projectLink: null,
    },
    {
      title: 'QuizLingo',
      description:
        'A language learning app that helps users build vocabulary through image-based translation quizzes.',
      techStack: ['Kotlin', 'Google ML Kit Translator API', 'Unsplash API'],
      githubLink: 'https://github.com/alexislayvu/quizlingo',
      projectLink: null,
    },
    {
      title: 'University Database',
      description:
        'A web app for managing and retrieving university data, allowing users to view information on students, courses, and faculty.',
      techStack: ['HTML', 'CSS', 'MySQL', 'PHP'],
      githubLink: null,
      projectLink: null,
    },
  ];

  return (
    <section id="projects">
      <FadeInSection>
        <SectionHeader title="/ projects" />
        <div className="py-4 flex justify-center">
          <div className="py-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubLink={project.githubLink}
                projectLink={project.projectLink}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
